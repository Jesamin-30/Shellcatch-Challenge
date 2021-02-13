import * as React from 'react';
import { Text, StyleSheet, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import UserLogo from '../../images/user-logo.png';
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDHT } = Dimensions.get('window')
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false
        }
    };

    showPass= () => {
        if(this.state.press == false) {
            this.setState({showPass: false, press: true})
        }
        else {
            this.setState({showPass: true, press: false})
        }
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.logoContainer}>
                    <Image source={UserLogo} style={styles.logo} />
                    <Text style={styles.loginText}>Welcome Shellcatch</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'ios-person-outline'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.usernameIcon} />
                    <TextInput
                        style={styles.username}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlinedColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'lock-closed-outline'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.usernameIcon} />
                    <TextInput
                        style={styles.username}
                        placeholder={'Password'}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlinedColorAndroid='transparent'
                    />

                    <TouchableOpacity style={styles.btnEye}
                        onPress={this.showPass.bind(this)}>
                        <Icon name={this.state.press == false ? 'eye-outline' : 'eye-off-outline'} size={26} color={'rgba(255,255,255,0.7)'} />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.btnLogin} onPress={() => alert('Welcome!!')}>
                    <Text style={styles.textBtnLogin}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.textForgot} onPress={() => alert('Enter your email')}>
                    Forgot Password
                </Text>
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
        width: 120,
        height: 120,
    },
    loginText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,

    },
    inputContainer: {
        marginTop: 10,
    },
    username: {
        width: WIDHT - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255, 0.7)',
        marginHorizontal: 25,
    },
    usernameIcon: {
        position: 'absolute',
        top: 8,
        left: 37,
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 37,
    },
    btnLogin: {
        width: WIDHT - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#f57200',
        justifyContent: 'center',
        marginTop: 40,

    },
    textBtnLogin: {
        color: 'rgba(255,255,255, 0.7)',
        fontSize: 20,
        textAlign: 'center'
    },
    textForgot: {
        color: 'rgba(255,255,255, 0.7)',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 15,
    }
})

export default Login;