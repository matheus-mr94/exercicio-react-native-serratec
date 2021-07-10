import React from "react";
import {View, Image, Text, TouchableWithoutFeedback} from "react-native";
import { style } from "./styles";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import logo from '../../assets/logo.png';

export function Home(){

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Login');
    } 

    return(

        <View style={style.container}>
            <View style={style.header}>
                <Image source={logo} style={style.logo} />                
            </View>
            <View style={style.container2}>
                <Text style={style.text}>
                    Veja o que está acontecendo no mundo neste momento.
                </Text>
                <Button  title="Criar Conta"/>
            </View>
            <View style={style.container3}>
                <Text style={style.text2}>Já tem uma conta ?</Text>
                <TouchableWithoutFeedback onPress={handleSignIn}>
                    <Text style={style.text3}>Entrar</Text>
                </TouchableWithoutFeedback>
            </View>
            
        </View>
    )
}