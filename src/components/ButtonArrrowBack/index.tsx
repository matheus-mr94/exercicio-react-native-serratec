import React from "react";
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from "react-native";
import Arrow from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/core";



type Props = {
    name: string,
    size?: number,
    color?: string,
    
    
}
export function ButtonArrowBack({ name, size, color }: Props) {

    const navigation = useNavigation();

    function handleHome() {
        navigation.navigate('Home');
    }
    // Corrigir navegação -> passar como props
    return (


        <TouchableWithoutFeedback onPress={handleHome}>
            <Arrow name={name} size={size} color={color} />
        </TouchableWithoutFeedback>


    )
}