import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login'
import Joke from '../screens/Joke'

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Login">
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Joke" component={Joke} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default DrawerNavigation;