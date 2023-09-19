import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Border,
  FontSize,
  FontFamily,
  Color,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import Screen from "../src/Screen";
import Footer from './Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';



const S5 = ({ route, navigation }) => {
  const [otp, setOtp] = useState(null);
  const [data, setData] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [sessionToken, setSessionToken] = useState(null);

  useEffect(() => {
    setMobileNo(route?.params?.mobileNo);
  }, []);

  // const handleInputChange = (text) => {
  //   setOtp(text);
  // };
  const handleInputChange = (inputValue) => {
    const formattedValue = inputValue.replace(/[^0-9]/g, '');
    setOtp(formattedValue);
  }

  const handleEnterPress = (text) => {
    if (!otp) {
      Alert.alert('Please Enter OTP');
      return;
    }
    if (otp.length < 6) {
      Alert.alert('Please Enter a Valid 6-digit OTP');
      return;
    }
    const data = {
      otp: otp,
      mobileNo: mobileNo,
    };

    fetch('https://datepa.brandlyup.com/api/v1/register/verify-otp', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
      .then(async (response) => {
        // setSessionToken(response.data.sessionToken);
        // await AsyncStorage.setItem('sessionToken',response.data.token);
        await AsyncStorage.setItem('sessionToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6IjU1NTU1NTU1NTUiLCJvdHAiOiI0MzEzMjYiLCJ1c2VySWQiOiI2NGYxN2U4MzQ2YTAzNmJjMDBjYzczMDIiLCJpYXQiOjE2OTQwNzgyNTksImV4cCI6MTY5NDA4MTg1OX0.46Phd8nNOeDP25vdR1IzNC4uyOjfMn3QDuKuUHvNNzo');
        setUserIsLoggedIn(true);
        // retrive
        // AsyncStorage.getItem('sessionToken')
        //   .then((token) => {
        //     if (token) {
        //       console.log('Session Token:', token);
        //     } else {
        //       console.log('No session token found.');
        //     }
        //   })
        navigation.replace('S6');
        // console.log("response", response);
        // const data = await response.json();
        // setData(data);
        // await setAsyncStorageData(ACCESS_TOKEN, data?.data?.token);
        // Alert.alert(data?.message);
        // setTimeout(() => {
        //   navigation.navigate("s6");
        // }, 300);
      })
      .catch((error) => {
        Alert.alert('Sorry');
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      <Image style={styles.headimg} source={require('../assets/head1.png')} />
      <View style={styles.main}>
        <Pressable style={styles.pressbtn}>
          <TextInput
            style={styles.enteryournumber}
            placeholderTextColor="#00000"
            keyboardType="numeric"
            placeholder="Enter OTP"
            maxLength={6}
            value={otp}
            onSubmitEditing={handleEnterPress}
            onChangeText={handleInputChange}
          />
        </Pressable>
        <Text style={styles.resend}> <Text style={styles.resendI}>Resend</Text> otp</Text>
        <Pressable
          style={styles.almostbtn}
          onPress={handleEnterPress}>
          <Text style={styles.almosttext}>Almost There...</Text>
        </Pressable>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  almostbtn: {
    width: '60%',
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
  },
  resend: {
    marginVertical: 20,
    color: "#4C4C4C",
    fontWeight: 'bold',
  },
  resendI: {
    color: "#487167"
  },

  almosttext: {
    color: '#00000',
    fontWeight: 'bold',
  },

  headimg: {
    position: 'absolute',
    // left : -140,
    width: '100%',
    // height: "100%",
    top: -50,
    // top: -50,
    // left: -40,
  },
  main: {
    width: '100%',
    height: '66%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressbtn: {
    backgroundColor: 'none',
    width: '80%',
    borderRadius: 40,
  },
  enteryournumber: {
    borderRadius: 30,
    fontSize: 25,
    padding: 20,
    borderWidth: 0.5,
    // borderRadius: 20,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#292929',
  },
});

export default S5;
