import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from "./src/screens/SplashScreen";
import SignInScreen from "./src/screens/SignInScreen";
import {NavigationContainer} from "@react-navigation/native";
import SignUpScreen from "./src/screens/SignUpScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import DrawerNavigator from "@react-navigation/drawer/src/navigators/createDrawerNavigator";
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthProvider} from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";

const Drawer = createDrawerNavigator()

export default function App() {
  console.log("changes saved");

  return (
      <AuthProvider>
        <AppNav/>
      </AuthProvider>


  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});
