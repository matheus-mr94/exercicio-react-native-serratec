import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
        logo:{
            width:27,
            height:22,
        },
        container:{
            flex:1
        },
        container2:{
            flexDirection:'row',            
            justifyContent:'space-between',
            marginHorizontal:15,
            marginTop:15
        },
        container3:{
            justifyContent: 'center',
            marginHorizontal:15        
            
        },
        container4:{
            flex:1,
            justifyContent:'flex-end',
            alignItems: 'flex-end',
            marginHorizontal: 15,
            marginVertical: 15,
            
        },        
        text:{
            marginVertical:15,
            marginHorizontal:15,
            fontSize:25,
            fontWeight:'bold'
        },
        text2:{
            textAlign:'center',
            fontSize: 16,            
            fontWeight:'700',
           
        },
        text3:{        
            color: '#fff',
            fontSize: 20,
            textShadowColor: '#000',
            fontWeight:'600',
            textShadowOffset: ({width:0.5 , height:0.5}),
            textShadowRadius: 10,           
                    
        },
        button:{
            
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor:'#1DA1F2',
            width: 80,
            height: 40,
            borderRadius: 50
        }
        
})