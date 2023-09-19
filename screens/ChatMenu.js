import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, Pressable, View, TextInput, ScrollView, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const ChatMenu = ({handlemenu})=>{
  const navigation = useNavigation();

  const handleUnmatch = () => {
    Alert.alert(
      'Confirm Unmatch',
      'Are you sure?',
      [
        {
          text: 'Not yet',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            // Handle unmatch logic here
            navigation.navigate('S31');
          },
        },
      ],
      { cancelable: false }
    );
  };



  return (
    <View style = {styles.container}>
      <Pressable style={styles.closee} onPress={handlemenu}>
      <Image style =  {styles.close} source={require("../assets/close1.png")}  />
      </Pressable>
      <Pressable onPress={()=> navigation.navigate("S30")}>
      <Text  style = {styles.txt}>Profile</Text>
      </Pressable>
      <Text style = {styles.txt} >Report</Text>
      <Pressable 
      // onPress={()=> navigation.navigate("S31")}
      onPress={handleUnmatch}
      > 
      <Text style = {styles.txt}  >Unmatch</Text>
      </Pressable>


    </View>
  )
}

const styles = StyleSheet.create({
  closee:{
    width: "100%",
  },

  close: {
    marginLeft: "80%",
  },  

  txt: {
    padding: 5,
    fontSize: 20,
    
  },
  txt1: {
    padding: 8,
    margin: 5,
    fontSize: 20,
    backgroundColor: "#E95151",
    borderRadius: 20,


  },

  container:{
    // height: "500px",
    // backgroundColor: "yellow",
    borderRadius: 20,
    position: "absolute",
    backgroundColor: "grey",
    right: "25%",
    width: "50%",
    paddingVertical: 10,
    // justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    zIndex: 20,

  }
})

export default ChatMenu