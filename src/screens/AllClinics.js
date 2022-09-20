import React, {useContext, useEffect, useState} from 'react';
import clinicService from "../services/ClinicService";
import {Text, View} from "react-native";


const AllClinics = ({navigation}) => {
    const [clinics, setClinics] = useState([]);

    useEffect(() => {
        clinicService.getAllClinics()
            .then((res) => {
                setClinics(res.data)
                console.log(res.data)
            })
            .catch((err) => { console.log(err) })
    }, [])
    return (
        <View style={{flex: 1, alignItems: "center"}}>
            <Text style={{fontSize: 20,
                fontWeight: "bold",
                marginHorizontal: 20}}>kjjbzdkd</Text>
        </View>
    );
};


export default AllClinics;


