import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList } from 'react-native';


const S29 = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [chatData, setChatData] = useState([]);

  const authorizationToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo';

  const userId = '64d4bd0751fa28884081a0c3';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://datepa.brandlyup.com/api/v1/chats/chat-list?byUsers=${userId}`;
        const headers = {
          'accept': '*/*',
          'Authorization': authorizationToken,
        };

        const response = await fetch(url, {
          method: 'GET',
          headers: headers,
        });

        const data = await response.json();
        const test = data[0]['chats']
        console.log("test",test);
        setMessages(data)
        // console.log("res", data);
        setChatData(data);

      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [userId]);

  // const renderItem = ({ item }) => (
  //   <View style={[styles.messageContainer, item.sender === 'owner' ? styles.ownerMessage : styles.userMessage]}>
  //      {/* <View style={[styles.messageContainer, styles.ownerMessage]}> */}
  //     <Text style={styles.messageText}>{item.chats[0].message}</Text>
  //   </View>
  // );
  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sentBy === '64cdf0a568218cd1cc898ff1' // Replace with the owner's ID
          ? styles.ownerMessage
          : styles.userMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.chats[0].message}</Text>
    </View>
  );

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'owner', // Assuming the sender is the owner (you can customize this)
      timestamp: new Date().getTime(),
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.topimg} source={require("../assets/datepe-images/chat-screen-curve.png")} />
      <View style={styles.top}>
        <View style={styles.nav}>
          <Pressable onPress={() => navigation.navigate("S28message")}>
            <Image style={styles.menu} source={require("../assets/back.png")} />
          </Pressable>
          <View style={styles.chatt} >
            <View style={styles.pphoto}>
              <Image style={styles.profile} source={require("../assets/profilephoto.png")} />
            </View>
            <View style={styles.pdetails}>
              <Text style={styles.pname}>John Abraham</Text>
              <Text style={styles.pstatus}>Active Now</Text>
            </View>
          </View>
          <Image style={styles.chat} source={require("../assets/filter.png")} />
        </View>
      </View>



      <FlatList
  data={messages[0].chats} // Assuming you want to display messages from the first room only
  renderItem={renderItem}
  keyExtractor={(item) => item._id}
/>

      {/* <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'owner' ? styles.ownerMessage : styles.userMessage,
            ]}
          >
            <Text style={styles.messageText}>Hello msg</Text>
          </View>
        )}
      /> */}

      {/* <FlatList
        // inverted
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'owner' ? styles.ownerMessage : styles.userMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      /> */}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
        />
        <Pressable style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: "20%",
  },

  chatt: {
    flexDirection: 'row',

    marginRight: 70,
  },
  pname: {
    fontSize: 18,
    color: "white",
  },
  pstatus: {
    fontSize: 13,
    color: "white",
  },
  profile: {
    width: 45,
    height: 45,
    marginRight: 10,
  },

  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#292929"
  },
  topimg: {
    position: "absolute",
    top: -80,
    width: "100%",
    height: "40%",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    padding: 20,
  },
  menu: {
    width: 28,
    height: 28,
  },
  chatContainer: {
    flex: 1,
    paddingTop: 20,
  },
  messageContainer: {
    // paddingTop: 50,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  ownerMessage: {
    backgroundColor: 'lightblue', // Adjust the color for owner's messages
    color: "white",
    backgroundColor: "#E95151",
    alignSelf: 'flex-end', // Align to the right for owner's messages
  },
  userMessage: {
    backgroundColor: 'lightgray', // Adjust the color for user's messages
    color: "black",
    backgroundColor: "#F2F7FB",
    alignSelf: 'flex-start', // Align to the left for user's messages
  },
  messageText: {
    fontSize: 16,
  },
  messageTimestamp: {
    fontSize: 12,
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F2F7FB',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default S29;
