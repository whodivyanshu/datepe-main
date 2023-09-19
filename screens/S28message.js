import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, Pressable, View, TextInput, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';

const chatData = [
  { sender: 'Jane Smith', date: '16/06/23' },
  { sender: 'John Doe', date: '16/06/23' },
  { sender: 'Alice Johnson', date: '17/06/23' },
  { sender: 'Bob Thompson', date: '18/06/23' },
  { sender: 'Emily White', date: '18/06/23' },
  { sender: 'David Miller', date: '19/06/23' },
  { sender: 'Olivia Brown', date: '20/06/23' },
  { sender: 'William Wilson', date: '21/06/23' },
  { sender: 'Sophia Clark', date: '21/06/23' },
  { sender: 'Michael Davis', date: '22/06/23' },
];

const S28message = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('sessionToken');

        if (!token) {
          navigation.navigate('S2');
          return;
        }

        const response = await fetch(
          'https://datepa.brandlyup.com/api/v1/chats/chat-list?byUsers=64d4bd0751fa28884081a0c3',
          {
            headers: {
              accept: '*/*',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.error('API request failed:', response.statusText);
          return;
        }

        const data = await response.json();
        const users = data[0].users;
        setUsersData(users)
        if (data && data.length >= 1) {
          // Update state with data from the API response
          // setName(data[0].name);
          // setDOB(data[0].dob);
          // setUserId(data[0]._id);
        } else {
          console.error('API response format is unexpected:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.topimg} source={require("../assets/datepe-images/message-screen-curve.png")} />
      <View style={styles.top}>
        <View style={styles.nav}>
          <Pressable onPress={() => navigation.navigate("S28")}>
            <Image style={styles.menu} source={require("../assets/back.png")} />
          </Pressable>
          <Text style={styles.home}>MESSAGES</Text>
          <Image style={styles.chat} source={require("../assets/filter.png")} />
        </View>
        <View style={styles.search}>
          <TextInput style={styles.searchbox} placeholder="Search" placeholderTextColor="white" />
        </View>
      </View>
      <ScrollView style={styles.chatSection}>
      {usersData.map((chat, index) => (
        <Pressable
          key={index}
          onPress={() => navigation.navigate("S29", { userId: chat._id })} // Pass userId as a parameter
        >
          <View style={styles.chatMessage}>
            <View style={styles.name}>
              <Image source={require("../assets/profilephoto.png")} />
              <Text style={styles.sender}>{chat.name}</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.datee}>{chat.dob}</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
      {/* <ScrollView style={styles.chatSection}>
        {usersData.map((chat, index) => (
          <Pressable key={index} onPress={() => navigation.navigate("S29")}>
            <View style={styles.chatMessage}>
              <View style={styles.name}>
                <Image source={require("../assets/profilephoto.png")} />
                <Text style={styles.sender}>{chat.name}</Text>
              </View>
              <View style={styles.date}>
                <Text style={styles.datee}>{chat.dob}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  datee: {
    paddingVertical: 8,
    color: "grey",
  },
  name: {
    flexDirection: 'row',
    // justifyContent: "center",
    width: "75%"
  },
  top: {
    height: "29%",
  },
  chatSection: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },

  chatMessage: {
    marginBottom: 20,
    flexDirection: "row",
  },

  sender: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },


  searchbox: {
    backgroundColor: "transparent",
    color: "white",

    width: "80%",
    marginHorizontal: "10%",
    borderColor: "white",
    borderWidth: 0.5,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    padding: 20,
  },
  menu: {
    width: 30,
    height: 30,
  },
  chat: {
    width: 30,
    height: 30,
  },
  home: {
    color: "white",
    fontSize: 22,
  },

  topimg: {
    position: "absolute",
    top: -50,
    width: "100%",
    height: "40%",
  },

  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#292929"
  }
})

export default S28message;