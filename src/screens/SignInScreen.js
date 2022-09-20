import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet, AsyncStorage
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import userService from "../services/UserService";

const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkValidEmail, setCheckValidEmail] = useState(false);


    const handleSubmit = () => {
        userService
            .login({ email, password })
            .then((res) => {
                console.log(res.data)
                navigation.navigate('AllClinicsScreen')
            })
            .catch((err) => {
                console.log(err)
            });

    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Bienvenue !</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Email :</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder={"Votre Email..."}
                        style={styles.textInput}
                        autoCapitalize={"none"}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />

                </View>
                {checkValidEmail ? (
                    <Text style={styles.textFailed}>Wrong format email</Text>
                ) : (
                    <Text style={styles.textFailed}> </Text>
                )}
                <Text style={[styles.text_footer, {marginTop: 35}]} >Mot de passe :</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder={"Votre mot de passe..."}
                        secureTextEntry={true}
                        style={styles.textInput}
                        autoCapitalize={"none"}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />

                </View>
                <View style={styles.button}>
                    {email === '' || password === '' /*|| checkValidEmail === true*/ ? (
                    <TouchableOpacity
                        disabled
                        style={[styles.signIn, {borderColor: '#132448', borderWidth: 1, marginTop: 15}]}
                        onPress={() =>{}}
                    >
                        <Text style={[styles.textSign, {color: '#697a13'}]}>Connexion</Text>
                    </TouchableOpacity>
                        ):(
                        <TouchableOpacity
                            style={[styles.signIn, {borderColor: '#132448', borderWidth: 1, marginTop: 15}]}
                            onPress={() =>{handleSubmit()}}>
                            <Text style={[styles.textSign, {color: '#697a13'}]}>Connexion</Text>
                        </TouchableOpacity>
                            )}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn, {borderColor: '#132448', borderWidth: 1, marginTop: 15}]}
                    >
                        <Text style={[styles.textSign, {color: '#697a13'}]}>Inscription</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#132448'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#132448',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#132448',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
