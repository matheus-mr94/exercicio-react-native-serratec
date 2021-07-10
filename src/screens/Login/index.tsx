import React from "react";
import { View, Image, TouchableOpacity, Text ,TouchableWithoutFeedback} from "react-native";
import { ButtonArrowBack } from "../../components/ButtonArrrowBack";
import logo from '../../assets/logo.png'

import { style } from "./styles";
import { InputsText } from "../../components/InputText";


export function Login() {

    

    return (

        <View style={style.container}>
            <View style={style.container2}>
                <ButtonArrowBack  name='arrow-back-outline' size={20} color='#1DA1F2'/>
                <Image source={logo} style={style.logo} />
                <TouchableWithoutFeedback>
                    <Text style={style.text2}>Inscreva-se</Text>
                </TouchableWithoutFeedback>
            </View>
            <View>
                <Text style={style.text}>Entrar no Twitter.</Text>
            </View>
            <View style={style.container3}>
                <InputsText title={"Telefone, email ou nome de usuário"}/>
                <InputsText title={"Senha"}/>
            </View>
            <View>
                <TouchableWithoutFeedback >
                    <Text style={style.text2}>Esqueceu sua senha ?</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={style.container4}> 
                
                <TouchableOpacity activeOpacity={1} style={style.button}>
                    <Text style={style.text3}>Entrar</Text>
                </TouchableOpacity>                                  
                              
            </View>       
        </View>





    )

}