import React, {useContext} from "react";
import SplashScreen from "../screens/SplashScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import styles from "react-native/template/_eslintrc";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

function AppNav() {
    const stack = createNativeStackNavigator()

    return (
        <NavigationContainer style={styles.root}>

            <stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <stack.Screen name="SplashScreen" component={SplashScreen}/>
                <stack.Screen name="SignInScreen" component={SignInScreen}/>
                <stack.Screen name="SignUpScreen" component={SignUpScreen}/>
                <stack.Screen name="HomeScreen" component={HomeScreen}/>
                <stack.Screen name="ProfileScreen" component={ProfileScreen}/>
            </stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    )
}
export default AppNav
