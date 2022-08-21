import * as React from 'react';
import { View, Text, TextInput,StyleSheet, Pressable} from "react-native";

const CustomButton = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b71F3',
        width: '100%',
        padding: 15,
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 5
    },

    text: {
        fontWeight: "bold",
        color: 'white'
    }
})
export default CustomButton;