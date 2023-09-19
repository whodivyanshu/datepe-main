import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, Pressable, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const S28menu = ({ handlemenuclose }) => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo'; // Replace with the actual access token

    try {
      const response = await fetch('https://datepa.brandlyup.com/api/v1/register/logout', {
        method: 'POST',
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();
      if (responseData.success) {
        console.log('Logout successful');
        AsyncStorage.removeItem('sessionToken');
        navigation.navigate('S3');
        // Perform any additional actions after successful logout
      } else {
        console.log('Logout failed');
        // Handle logout failure
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle other errors that may occur during the request
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <View style={styles.top}>
          <View style={styles.nav}>
            <Pressable onPress={() => navigation.navigate('S30')}>
              <Image
                style={styles.topicon}
                source={require('../assets/profileicon.png')}
              />
            </Pressable>
          </View>
          <View style={styles.menuoptions}>
            <Pressable>
              <Text
                style={styles.txt}
                onPress={() => navigation.navigate('S28message')}
              >
                Messages
              </Text>
              <Text style={styles.txt}
              onPress={() => navigation.navigate('S34')}
              >
                DirectPe</Text>
              <Text style={styles.txt}
                onPress={() => navigation.navigate('S30')}
              >
                Settings
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.logout} onPress={handleLogout}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logout: {
    backgroundColor: '#E95151',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
  },
  txt: {
    padding: 20,
    // backgroundColor: "yellow",
    marginVertical: 5,
    fontSize: 17,
    color: 'white',
  },
  bottom: {
    height: '10%',
    width: '100%',
  },

  topicon: {
    width: 30,
    height: 30,
  },
  menuoptions: {
    paddingVertical: 30,
    // height: "50%",
    justifyContent: 'center',
  },
  nav: {
    flexDirection: 'row',
    // padding: 14,
    justifyContent: 'space-between',
  },
  top: {
    width: '100%',
    height: '90%',
  },
  container: {
    flex: 1, // Make the container take up the whole screen
    backgroundColor: '#292929aa',
    padding: 15,
    paddingVertical: 30,
    borderRadius: 30,
    marginLeft: '5%',
    position: 'absolute',
    width: '50%',
    height: '80%',
    marginTop: '10%',
    zIndex: 4
  },
  contain: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

export default S28menu;
