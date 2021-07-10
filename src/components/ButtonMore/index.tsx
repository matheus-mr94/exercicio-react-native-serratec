import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import More from 'react-native-vector-icons/Feather'

type Props={
    name: string,
    size?: number,
    color?: string,
}

export function ButtonMore({name,size,color}:Props){

    return(
        <TouchableWithoutFeedback>
            <More name={name}size={size} color={color}/>
        </TouchableWithoutFeedback>
    )
};