import React, {useState} from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions} from "react-native";
import Logo from '../../../assets/favicon.png'
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const SignInScreen = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("sign in")
    };
    const onForgotPasswordPressed = () => {
        console.warn("forgot password")
    };
    const onSignInFacebook = () => {
        console.warn("sign in Facebook")
    };
    const onSignInGoogle = () => {
        console.warn("sign in Google")
    };
    return (
        <View style={styles.root}>
            <Image
                source={Logo}
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode={"contain"}
            />
            <CustomInput
                placeholder="Email"
                value={Email}
                setValue={setEmail}/>
            <CustomInput
                placeholder="Password"
                value={Password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomButton text="Sign In" onPress={onSignInPressed}/>
            <CustomButton text="Forgot Password" onPress={onForgotPasswordPressed}/>
            <CustomButton text="Sign In with Facebook" onPress={onSignInFacebook}/>
            <CustomButton text="Sign In with Google" onPress={onSignInGoogle}/>

        </View>

    )
}
const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
    },
    Logo: {
        width: '70%',
        maxWidth: 300,
        height: 100

    }
})
export default SignInScreen