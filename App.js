import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from "./src/screens/SplashScreen";
import RootStackScreen from './src/screens/RootStackScreen';
import SignInScreen from "./src/screens/SignInScreen";
import {NavigationContainer} from "@react-navigation/native";
import SignUpScreen from "./src/screens/SignUpScreen";

export default function App() {
  console.log("changes saved");

  return (
    <NavigationContainer style={styles.root}>
      <SignUpScreen/>
      <StatusBar style="auto" />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'

  },
});
