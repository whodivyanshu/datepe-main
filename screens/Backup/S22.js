import { View, FlatList, Text, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const messages = [
  { id: '1', text: 'Hello there!', sender: 'user' },
  { id: '2', text: 'Hi! How can I help you?', sender: 'agent' },
  // Add more messages here
];

const S22 = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from the API
    const roomId = '64ddc774d2ab7df3e05c6a3d';
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo';

    fetch(`https://datepa.brandlyup.com/api/v1/chats/${roomId}/chats`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const chatMessages = [];
        for (const chat of data.chats) {
          chatMessages.push(chat.message);
        }
        setMessages(chatMessages);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sentBy === 'user' ? styles.userMessage : styles.agentMessage,
      ]}>
      <Text style={styles.messageText}>{item}</Text>
    </View>
  );

  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <Button title="Click Me" onPress={() => {
          navigation.navigate('S21');
        }} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  agentMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E6E6E6',
  },
  messageText: {
    fontSize: 16,
  },
});

export default S22;
