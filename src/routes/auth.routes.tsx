import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

const Stack= createStackNavigator();


export function AuthRoutes(){
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen
                name='Home'
                component={Home}
                options={{headerShown:false}}
                />
              <Stack.Screen
                name='Login'
                component={Login}
                options={{headerShown:false}}
                />
          </Stack.Navigator>
      </NavigationContainer>
    )
}
