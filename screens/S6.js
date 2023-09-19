import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  Border,
  Color,
  FontSize,
  FontFamily,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  ActivityIndicator,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePickerIOS from 'react-native';
import Footer from './Footer';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { red100 } from 'react-native-paper/lib/typescript/src/styles/colors';



const S6 = ({ navigation }) => {
  const [isNameFocused, setNameFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isDOBFocused, setDOBFocused] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  // const [token, setToken] = useState('');
  const [buttonText, setButtonText] = useState("Let's go!");

  const handleNameFocus = () => setNameFocused(true);
  const handleNameBlur = () => setNameFocused(false);
  const handleEmailFocus = () => setEmailFocused(true);
  const handleEmailBlur = () => setEmailFocused(false);
  const handleDOBFocus = () => setDOBFocused(true);
  const handleDOBBlur = () => setDOBFocused(false);
  const [emailError, setEmailError] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [isLoading, setLoading] = useState(false);

  // const handleNameChange = (text) => {
  //   setNameInput(text);
  //   setButtonText(text.trim() === '' ? "Let's go!" : `Let's go!`);
  // };
  const handleNameChange = (inputValue) => {
    const formattedValue = inputValue.replace(/[^a-zA-Z\s]/g, '');

    // setButtonText(inputValue.trim() === '' ? "Let's go!" : `Let's go!`);
    setNameInput(formattedValue);
  }

  const handleEmailChange = (text) => {
    setEmail(text);
    // Check if email is valid every time it changes
    const isValid = validateEmail(text);
    setEmailError(isValid ? '' : 'Please enter a valid email.');
  };
  // const validateEmail = (email) => {
  //   // Email validation regular expression
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const handleOpen = () => {
    setShowPicker(true);
  };

  const onDateChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios' ? true : false);
    const currentDate = new Date();

    if (selectedDate && selectedDate <= currentDate) {
      setDate(selectedDate);
      const year = selectedDate.getFullYear();
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const day = selectedDate.getDate().toString().padStart(2, '0');
      const formattedDate = year + "-" + month + "-" + day;
      setDOB(formattedDate);
    } else {
      Alert.alert("Invalid Date", "Please select a valid date that is not in the future.");
    }
  };


  const handleDOBChange = (text) => {
    if (text.length <= 10) {
      // Remove non-numeric characters
      const numericText = text.replace(/\D/g, '');

      // Format the date as dd mm yyyy
      let formattedDOB = '';
      for (let i = 0; i < numericText.length; i++) {
        if (i === 2 || i === 4) {
          formattedDOB += ` ${numericText[i]}`;
        } else {
          formattedDOB += numericText[i];
        }
      }

      setDOB(formattedDOB);
    }
  };

  const handleEnterPress = async () => {
    const token = await AsyncStorage.getItem('sessionToken');

    if (!token) {
      navigation.navigate('S2');
      return;
    }
    // const t = await getAsyncStorageData(ACCESS_TOKEN);
    // const t ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo';
    const t5 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6IjU1NTU1NTU1NTUiLCJvdHAiOiJ2aXBHZkQiLCJ1c2VySWQiOiI2NGYxN2U4MzQ2YTAzNmJjMDBjYzczMDIiLCJpYXQiOjE2OTM1NDgxNjMsImV4cCI6MTY5MzU1MTc2M30.NsPQMn0Dtt2GPgqrZ99GdxAUA9YMlbWxwJNbcfwwDbM';
    const t6 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6IjY2NjY2NjY2NjYiLCJvdHAiOiJBUlY3MUEiLCJ1c2VySWQiOiI2NGYxN2VjNzQ2YTAzNmJjMDBjYzczMzciLCJpYXQiOjE2OTM1NDgyMzEsImV4cCI6MTY5MzU1MTgzMX0.e1oYatQn0onxEuqatPRq2zkOaGjje-QXkcw4oizLAy0';
    // setToken(t5);

    if (!nameInput || !email || !dob) {
      Alert.alert('Please fill in the form!');
      return;
    }
    if (!validateName(nameInput)) {
      Alert.alert('Please enter a valid name.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Please enter a valid email address.');
      return;
    }
    setLoading(true);


    fetch('https://datepa.brandlyup.com/api/v1/register/user-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: nameInput,
        email,
        dob,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("ressss", data);
        if (data.success == true) {
          setLoading(false);
          Alert.alert("Success", data.message, [
            { text: "OK", onPress: () => navigation.navigate("S7") }
          ]);

          // Alert.alert(data?.message);
          // navigation.navigate('S7');
        }
        setLoading(false);
        // setData(data); // Assuming you have a 'setData' function

      })
      .catch((error) => {
        setLoading(false);
        Alert.alert('Sorry, something went wrong');
        console.error('Error fetching data:', error);
      });
  };

  const validateName = (name) => {
    // Implement your name validation logic here
    // Example: Check if the name contains only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };
  const validateEmail = (email) => {
    // Implement your email validation logic here
    // Example: Use a regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.headimg} source={require('../assets/vector3.png')} />
      <View style={styles.main}>
        <View style={styles.pressbtn}>
          <TextInput
            style={[styles.enteryournumber]}
            placeholder="Name"
            placeholderTextColor="#636363"
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            onChangeText={handleNameChange}
            value={nameInput}
            onSubmitEditing={handleEnterPress}
          />
        </View>
        <View style={styles.pressbtn}>
          <TextInput
            style={[styles.enteryournumber]}
            placeholder="Email"
            placeholderTextColor="#636363"
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            // onChangeText={setEmail}
            onChangeText={handleEmailChange}
            value={email}
            onSubmitEditing={handleEnterPress}
          />
        </View>
        <Pressable
          style={styles.pressbtn}
          onPress={handleOpen}
        >
          <TextInput
            style={[styles.enteryournumber]}
            placeholder="DOB"
            placeholderTextColor="#636363"
            value={dob}
            editable={false} />
        </Pressable>
        {showPicker && Platform.OS === 'ios' ? (
          <DatePickerIOS
            date={date}
            onDateChange={onDateChange}
            mode="date"
          />
        ) : (
          showPicker && (
            <DateTimePicker
              style={{ color: 'black', backgroundColor: 'red' }}
              mode="date"
              value={date}
              display="spinner"
              onChange={onDateChange}
            />
          )
        )}
        <Pressable style={styles.almostbtn} onPress={handleEnterPress} disabled={isLoading}>
          <Text style={styles.almosttext}>Lets go!</Text>
        </Pressable>

        <Spinner
          visible={isLoading}
          textStyle={styles.spinnerText}
        />


      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  almostbtn: {
    width: '60%',
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  almosttext: {
    color: '#636363',
    fontSize: 17,
  },

  headimg: {
    position: 'absolute',
    // left : -140,
    width: '100%',
    // height: "68%",
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
    backgroundColor: 'transparent',
    marginVertical: 10,
    width: '80%',
    borderRadius: 30,
  },
  enteryournumber: {
    borderRadius: 23,
    fontSize: 20,
    padding: 15,
    borderWidth: 0.6,
    paddingLeft: 20,
    borderBlockEndColor: '#FFFFFF',
    // placeholderTextColor: "#FF0000",
    // borderRadius: 20,
  },
  container: {
    width: '100%',
    height: '100%',
    // paddingTop: 50,
    backgroundColor: '#292929',
    paddingTop: 50,
  },
  datepicker: {
    width: '100%',
  },
});

export default S6;
