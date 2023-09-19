// import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  Alert,
  BackHandler,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Screen from "../src/Screen";
import Footer from './Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';


const S9 = ({ navigation }) => {
  const [name, setName] = useState(null);
  // const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  const [progress, setProgress] = useState(0.2); // Initial progress value (0 to 1)
  const [backPressCount, setBackPressCount] = useState(0);

  const handleBackPress = () => {
    if (navigation.isFocused()) {
      setBackPressCount((prevCount) => prevCount + 1);

      if (backPressCount === 1) {
        BackHandler.exitApp(); // Exit the app when back is pressed twice
      } else {
        setTimeout(() => {
          setBackPressCount(0); // Reset backPressCount after a certain delay
        }, 2000); // 2 seconds delay
      }

      return true;
    }
    return false;
  };

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', handleBackPress);

  //   return () => {
  //     BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  //   };
  // }, [backPressCount]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem('sessionToken');
      if (!token) {
        navigation.navigate('S2');
        return;
      }
      const response = await fetch(
        'https://datepa.brandlyup.com/api/v1/register/user-data/name',
        {
          method: 'GET',
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`
          },
        }
      );

      if (response.ok) {
        const data = await response.text();
        setName(data);
      } else {
        console.error('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEnterPress = async (text) => {
    const token = await AsyncStorage.getItem('sessionToken');
    if (!name) {
      Alert.alert('Please fill in the form!');
    }

    fetch('https://datepa.brandlyup.com/api/v1/register/user-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Alert.alert(data?.message);
        navigation.navigate('S10');
      })
      .catch((error) => {
        Alert.alert('Sorry, something went wrong');
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <View style={styles.outer}>
          <View style={[styles.inner, { width: '10%' }]}></View>
        </View>
      </View>
      <View style={styles.contain}>
        <Text style={styles.title}>{`What's your\nname?`}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(n) => setName(n)}
            placeholderTextColor="white"
            onSubmitEditing={handleEnterPress}
          />
          <Pressable onPress={handleEnterPress}>
            <Image
              style={styles.arrowIcon}
              source={require('../assets/arrow3.png')}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        <View>
          <Text style={styles.text1}>
            This is how your name will appear on your profile
          </Text>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292929',
    width: '100%',
    height: '100%',
  },
  outer: {
    width: '90%',
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  inner: {
    backgroundColor: '#DA4949',
    borderRadius: 20,
    paddingVertical: 10,
  },
  progress: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contain: {
    padding: 20,
  },
  text1: {
    marginTop: 15,
    fontSize: 16,
    color: 'white',
    opacity: 0.6,
    fontWeight: '100',
  },
  title: {
    fontSize: 36,
    fontWeight: '500',
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#F5C348',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    fontSize: 20,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: 'white',
  },
  arrowIcon: {
    width: 35,
    height: 35,
    marginLeft: 10,
  },

});

export default S9;
