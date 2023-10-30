import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import notifee from "@notifee/react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Notification() {
    const [name, setName ] = useState("");

    useEffect(()=>{
        GetData();
    },[])
  const handleNameInput = (text) => {
    setName(text);
  };
  const GetData=()=>{
    try {
    AsyncStorage.getItem("UserData").then(value=>{
        let user = JSON.parse(value)
        setName(user.UserName)
    })
    } catch (error) {
        
    }
  }
    const handleClick = async()=>{
        
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Hey ! Welcome Mr : ' + name,
      body: '',
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
    }
  return (
    <View style={styles.container}>
      <Text>Hey!Enter Your Name and Click the Below button </Text>
      
      <TextInput
        placeholder="Enter your name"
        onChangeText={handleNameInput}
        value={name}
        style={{ borderWidth: 1, padding: 10, margin: 10 ,borderRadius:10}}
      />
      <Button title='Click Me!' color={"orange"} onPress={()=>handleClick()}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        fontSize:50,
    }
})