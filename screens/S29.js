import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, FlatList, Button } from 'react-native';
import ChatMenu from "./ChatMenu"
import AsyncStorage from '@react-native-async-storage/async-storage';


const S29 = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [chatData, setChatData] = useState([]);
  const [name, setName] = useState([]);
  const [showmenu, setShowMenu] = useState(false);

  const flatListRef = useRef(null);
  const [visibleMessages, setVisibleMessages] = useState(20);
  const messagesToLoad = 10; // You can adjust this number as needed


  useEffect(() => {
    fetchData();
    // setTimeout(()=>{
    //   if (flatListRef.current) {
    //     flatListRef.current.scrollToEnd({ animated: true });
    //   }
    // },1000)
  }, []);


  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages])

  // useEffect(() => {
  //   flatListRef.current.scrollToEnd({ animated: true });
  // }, []);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem('sessionToken');
      const userId = '64cdf0a568218cd1cc898ff1';
      if (!token) {
        navigation.navigate('S2');
        return;
      }


      const url = `https://datepa.brandlyup.com/api/v1/chats/chat-list?byUsers=${userId}`;
      const headers = {
        'accept': '*/*',
        'Authorization': `Bearer ${token}`,
      };

      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });

      const data = await response.json();
      setMessages(data[0]['chats'])
      setName(data[0]['users'][0]['name'])
      // const test = data[0]['chats']
      // console.log("test",test);
      // console.log("res", data[0]['users'][0]['name']);
      setChatData(data);
      

    } catch (error) {
      console.error('Error:', error);
    }
  };


  // const handleSendMessage = () => {
  //   if (inputText.trim() === '') return;

  //   const newMessage = {
  //     id: messages.length + 1,
  //     text: inputText,
  //     sender: 'owner', // Assuming the sender is the owner (you can customize this)
  //     timestamp: new Date().getTime(),
  //   };

  //   setMessages([...messages, newMessage]);
  //   setInputText('');
  // };

  const handleSendMessage = () => {
    if (inputText.trim() === '') {
      return;
    }
    onSendMessage(inputText);
    setInputText('');
  };

  const onSendMessage = async (text) => {
    if (text.trim() === '') {
      return; // Don't send empty messages
    }

    const url = 'https://datepa.brandlyup.com/api/v1/chats/64ddc774d2ab7df3e05c6a3d';
    const token = await AsyncStorage.getItem('sessionToken');
    const headers = {
      'accept': '*/*',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
    const body = {
      message: text,
    };

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        fetchData();
        // Assuming your server returns the newly created message object
        setMessages([...messages, data]);
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });

    // Clear the input field after sending
    setInputText('');
  };

  const handlemenu = () => {
    setShowMenu(!showmenu);
  }


  return (
    <View style={styles.container}>
      <Image style={styles.topimg} source={require("../assets/datepe-images/chat-screen-curve.png")} />
      <View style={styles.top}>
        <View style={styles.nav}>
          <Pressable onPress={() => navigation.navigate("S28message")}>
            <Image style={styles.menu} source={require("../assets/back.png")} />
          </Pressable>
          <View style={styles.chatt}>
            <View style={styles.pphoto}>
              <Image style={styles.profile} source={require("../assets/profilephoto.png")} />
            </View>
            <View style={styles.pdetails}>
              <Text style={styles.pname}>John Abraham</Text>
              <Text style={styles.pstatus}>Active Now</Text>
            </View>
          </View>
          <Pressable onPress={handlemenu}>
            <Image style={styles.chat} source={require("../assets/filter.png")} />
          </Pressable>
        </View>
      </View>
      {showmenu && <ChatMenu handlemenu={handlemenu} />}

      <FlatList
        ref={flatListRef}
        // inverted 
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sentBy == '64cdf0a568218cd1cc898ff1'
                ? styles.ownerMessage
                : styles.userMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.message}</Text>

          </View>
        )}
        initialNumToRender={20}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          // setVisibleMessages(prevVisibleMessages => prevVisibleMessages + messagesToLoad);
        }}
        onContentSizeChange={() => {
          // This will be triggered when the content size changes (new messages)
          // Scroll to the end here if you want
          if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
          }
        }}
      />


      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSendMessage}
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
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,

    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  ownerMessage: {
    
    borderRadius: 12,
    borderTopRightRadius: 0,
    backgroundColor: "#E95151",
    color: "white",
    alignSelf: 'flex-end', 
  },
  userMessage: {
    color: "white",
    borderRadius: 12,
    borderTopLeftRadius: 0,

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
