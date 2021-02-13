import * as React from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text} from 'react-native';
import { createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login'
import Joke from '../screens/Joke'
import Wifi from '../screens/Wifi'
import logoShellcatch from '../../images/shellcatch.png'

const Drawer = createDrawerNavigator();

export function Menu(props) {
    return(
        <View style={styles.container}>
            <View style={styles.bgContainer}>
                <View style={styles.userContainer}>
                    <Image  style={styles.userImagen} source={logoShellcatch} style={styles.logo} />
                </View>
                
            </View>  
            <DrawerItemList {...props}/>
        </View>
    )
}

function DrawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props)=> <Menu{...props}/>} initialRouteName="Login">
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Joke" component={Joke} />
                <Drawer.Screen name="Wifi" component={Wifi} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },

    bgContainer: {
        borderBottomWidth: 3,
        borderBottomColor: '#60acd0'
    },

    userContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        padding: 10,
    },

    userImagen: {
        width: 25,
        height: 25,
        borderRadius: 20,

    },
    
})

export default DrawerNavigation;