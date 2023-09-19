import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image, TextInput, Alert, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import Screen from "../src/Screen";
import Footer from './Footer';

const S4 = ({ navigation }) => {
  const [mobileNo, setMobileNo] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // const handleInputChange = text => {
  //   setMobileNo(text);
  // };
  const handleInputChange = (inputValue) => {
    const formattedValue = inputValue.replace(/[^0-9]/g, '');
    setMobileNo(formattedValue);
  }

  const handleEnterPress = text => {
    if (!mobileNo) {
      Alert.alert('Please Enter Mobile Number');
      return;
    }
    if (mobileNo.length < 10) {
      Alert.alert('Please Enter a Valid 10-digit Mobile Number');
      return;
    }

    const data = {
      mobileNo: mobileNo,
    };

    fetch('https://datepa.brandlyup.com/api/v1/register/mobileno', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
        navigation.navigate('S5', { mobileNo });
      })
      .catch(error => {
        Alert.alert('Sorry');
        console.error('Error fetching data:', error);
      });
  };


  return (
    <View style={styles.container}>
      <Image
        style={styles.headimg}
        source={require('../assets/headpink.png')}
      />
      <View style={styles.main}>
        <Text style={styles.txts}>
          <Image style={styles.img} source={require('../assets/star.png')} />
          <Text style={styles.text}>Welcome</Text>
          <Image style={styles.img} source={require('../assets/star.png')} />
        </Text>
      </View>
      <View style={styles.bottom}>
        <Pressable style={styles.pressbtn}>
          <Pressable onPress={handleEnterPress}>
            <Image
              style={styles.arrow}
              source={require('../assets/arrow.png')}
            />
          </Pressable>
          <Text style={styles.plus}>+91</Text>
          <TextInput
            style={styles.enteryournumber}
            maxLength={10}
            placeholder="Enter your number"
            placeholderTextColor="#706344"
            value={mobileNo}
            keyboardType="numeric"
            onChangeText={handleInputChange}
            onSubmitEditing={handleEnterPress}
          />
        </Pressable>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  txts: {
    marginBottom: 50,
  },
  plus: {
    fontSize: 22,
    color: 'white',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#292929',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 34,
    color: 'white',
    paddingBottom: 15,
  },
  main: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headimg: {
    position: 'absolute',
    // left : -140,
    width: '100%',
    top: -20,
    // top: -50,
    // left: -40,
  },
  bottom: {
    position: 'absolute',
    bottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '20%',
  },
  arrow: {
    width: 45,
    marginRight: 10,
    height: 45,
  },
  pressbtn: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: 'row',
    // justifyContent: "center",
    alignItems: 'center',
    borderColor: '#F5C348',
    display: 'flex',
    width: '80%',
  },
  enteryournumber: {
    color: '#F5C348',
    fontSize: 21,
    paddingTop: 10,
    paddingLeft: 10,
  },
});

export default S4;
