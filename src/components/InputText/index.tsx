import React, {useState} from "react";
import {TextInput,Text,View} from 'react-native'
import { style } from "./styles";

type Props={
    title: string;
}

export function InputsText({title}:Props){
    const [text, setText] = React.useState('');
    const [isFocused, setIsFocused] = useState(false);


    return(
        <View>
            <Text style={style.text}>{title}</Text>
            <TextInput
             
             style={ isFocused? {borderBottomWidth: 3, borderColor: '#1DA1F2'}: {borderBottomColor: '#ddd',
             borderBottomWidth:1}}
             onBlur={() => setIsFocused(false)}
             onFocus={() => setIsFocused(true)}
             value={text}
             onChangeText={text => setText(text)}
             />
        </View>
    )



}