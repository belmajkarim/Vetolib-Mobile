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
import axios from "axios";

const SignUpScreen = ({navigation}) => {

    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');

    const handleClick = async () => {
        axios.post('localhost:4000/users/signup', { name:name,email:email,password: password })
            .then(response => console.log(response.data));
    };

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
                        onChangeText={name => SetName(name)}
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
                        onChangeText={email => SetEmail(email)}
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
                        onChangeText={password => SetPassword(password)}
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
                        onPress={() => handleClick(this)}
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
