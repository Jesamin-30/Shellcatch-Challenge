import React from 'react';
import { PermissionsAndroid, StyleSheet, Text, Button, View, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import WifiLogo from '../../images/iconWifi.png';

const requestWifiPermission = async () => {
    const enabled = await WifiManager.isEnabled();
    if (!enabled) {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Location permission is required for WiFi connections',
                message:
                    'This app needs location permission as this is required  ' +
                    'to scan for wifi networks.',
                buttonNegative: 'DENY',
                buttonPositive: 'ALLOW',
            },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
}


const { width: WIDHT } = Dimensions.get('window')
class Wifi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEnabled: false,
            wifis: ["ABC", "EFG", "IJK", "LMN"]
        }
    }

    componentDidMount() {
        const isEnabled = requestWifiPermission();
        this.setState({ isEnabled: isEnabled });
    }

    wifiList() {
        WifiManager.loadWifiList()
            .then((res) => {
                console.log("wifi conexions", res)
            });
    }

    renderItem(item) {
        return (
            <View>
                <Text style={styles.item}>
                    {item}
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.logoContainer}>
                    <Image source={WifiLogo} style={styles.logo} />
                    <Text style={styles.wifiText}>Wifi connection</Text>
                </View>
                
                <FlatList 
                    data={this.state.wifis}
                    renderItem={({ item }) => this.renderItem(item)}
                    style={styles.flatList}
                />
                <TouchableOpacity style={styles.btnWifi} onPress={this.wifiList}>
                    <Text style={styles.textBtnWifi}>Wifi List</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#60acd0',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    logo: {
        width: 125,
        height: 120,
    },
    wifiText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        marginTop: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'white',
        fontStyle: 'italic',
    },
    btnWifi: {
        width: WIDHT - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#f57200',
        justifyContent: 'center',
        marginTop: 40,

    },
    textBtnWifi: {
        color: 'rgba(255,255,255, 0.7)',
        fontSize: 20,
        textAlign: 'center'
    },
    flatList: {
        flexGrow: 0,
        
    }
    
    
})

export default Wifi;