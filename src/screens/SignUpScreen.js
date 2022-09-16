import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';
import userService from "../services/UserService";

const SignUpScreen = ({navigation}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        let role = "user";
        userService
            .signup({ name, email, password, role})
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.error(err);
            });
    };

   /* const handleCheckEmail = text => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        setEmail(text);
        if (re.test(text) || regex.test(text)) {
            setCheckValidEmail(false);
        } else {
            setCheckValidEmail(true);
        }
    };
    const checkPasswordValidity = value => {
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
            return 'Password must not contain Whitespaces.';
        }

        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
            return 'Password must have at least one Uppercase Character.';
        }

        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
            return 'Password must have at least one Lowercase Character.';
        }

        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
            return 'Password must contain at least one Digit.';
        }

        const isValidLength = /^.{8,16}$/;
        if (!isValidLength.test(value)) {
            return 'Password must be 8-16 Characters Long.';
        }

         return null;
    };*/

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Inscrivez vous !!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={[styles.text_footer, {marginTop: 5}]}>UserName :</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder={"UserName..."}
                        style={styles.textInput}
                        autoCapitalize={"none"}
                        value={name}
                        onChangeText={name => setName(name)}
                    />

                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Email :</Text>
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
                        onChangeText={email => setEmail(email)}

                    />

                </View>
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
                        onChangeText={password => setPassword(password)}
                    />
                    <Animatable.View>

                    </Animatable.View>

                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]} >Confirmez votre mot de passe :</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder={"Confirmez votre mot de passe..."}
                        secureTextEntry={true}
                        style={styles.textInput}
                        autoCapitalize={"none"}
                    />

                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => handleSubmit()}
                        style={[styles.signIn, {borderColor: '#132448', borderWidth: 1, marginTop: 15}]}
                    >
                        <Text style={[styles.textSign, {color: '#132448'}]}>Inscription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignInScreen')}
                        style={[styles.signIn, {borderColor: '#132448', borderWidth: 1, marginTop: 15}]}
                    >
                        <Text style={[styles.textSign, {color: '#132448'}]}>Connexion</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    );
};

export default SignUpScreen;

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
