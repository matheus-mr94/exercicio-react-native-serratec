import React from "react";
import {  Text, TouchableOpacity } from "react-native";
import {style}from './styles'


type Props={
    title:string;
}
export function Button({title}:Props){

    return(
        <TouchableOpacity activeOpacity={0.8} style={style.container}>
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>

    )
}