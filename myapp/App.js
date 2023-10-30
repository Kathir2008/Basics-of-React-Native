import { View, Text } from 'react-native'
import React from 'react'
import SelectList from './Screen/SelectList'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Notification from './Screen/Notification'
import Login from './Screen/Login'


export default function App() {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Notification' component={Notification}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}