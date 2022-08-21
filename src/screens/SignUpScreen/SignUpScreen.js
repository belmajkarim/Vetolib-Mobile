import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const SignUpScreen = () => {
    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [PasswordRepeat, setPasswordRepeat] = useState('');



    const onSignUpPressed = () => {
        console.warn("sign Up")
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
            <Text style={styles.title}>Create an account</Text>
            <CustomInput
                placeholder="UserName"
                value={UserName}
                setValue={setUserName}/>
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
            <CustomInput
                placeholder="PasswordRepeat"
                value={PasswordRepeat}
                setValue={setPasswordRepeat}
                secureTextEntry={true}
            />
            <CustomButton text="Sign Up" onPress={onSignUpPressed} />
            <Text style={styles.text}> By registering, you confirm that you accept our <Text style={styles.link}>terms of use</Text> and <Text style={styles.link}> privacy</Text> </Text>

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
    text: {
        color: 'gray',
        marginVertical: 10
    },
    link:{
        color: '#FDB075',
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 10,
        color: '#051C60'

    }
})
export default SignUpScreen
