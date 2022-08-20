import * as React from 'react';
import { View, Text, TextInput,StyleSheet, Pressable} from "react-native";

export const CustomButton = ({onPress, text, type= "PRIMARY"}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, styles['container_${type}']]}>
            <Text style={[styles.text, styles['text_${type}']]}>{text}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 5
    },
    container_PRIMARY:{
        backgroundColor: '#5874bd',
    },
    container_TERTIARY:{

    },
    text: {
        fontWeight: "bold",
        color: 'white'
    },
    text_tertiary:{
        color: 'gray'
    }
})
