import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import Screen from "../src/Screen";
import Footer from './Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';


const validateBirthdate = (day, month, year) => {
  const numericDay = parseInt(day, 10);
  const numericMonth = parseInt(month, 10);
  const numericYear = parseInt(year, 10);

  if (
    isNaN(numericDay) ||
    isNaN(numericMonth) ||
    isNaN(numericYear) ||
    numericMonth < 1 ||
    numericMonth > 12 ||
    numericDay < 1 ||
    numericDay > 31 ||
    numericYear < 1900 || // You can adjust this range as needed
    numericYear > new Date().getFullYear()
  ) {
    return false;
  }

  const maxDayInMonth = new Date(numericYear, numericMonth, 0).getDate();
  if (numericDay > maxDayInMonth) {
    return false;
  }

  return true;
};


const S10 = ({ navigation }) => {
  const [progress, setProgress] = useState(0.2);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dob, setDob] = useState(null);
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  const setDataValues = (data) => {
    const [receivedYear, receivedMonth, receivedDay] = data.split('-');
    setYear(receivedYear);
    setMonth(receivedMonth);
    setDay(receivedDay);
  };

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
        'https://datepa.brandlyup.com/api/v1/register/user-data/dob',
        {
          method: 'GET',
          headers: {
            Accept: '*/*',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.text();
        setDataValues(data);
        // setName(data);
      } else {
        console.error('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDayChange = (text) => {
    if (/^\d{0,2}$/.test(text) && text <= 31) {
      setDay(text);
    }

    // if (/^\d{0,2}$/.test(text) && parseInt(text, 10) <= 31) {
    //   setDay(text);
    // }
  };

  const handleMonthChange = (text) => {
    if (/^\d{0,2}$/.test(text) && text <= 12) {
      setMonth(text);
    }
  };

  const handleYearChange = (text) => {
    if (/^\d{0,4}$/.test(text)) {
      setYear(text);
    }
  };

  const handleEnterPress = async () => {
    const dob = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

    // const dob = {
    //   day: day || '01', // Default to "01" if day is empty
    //   month: month || '01', // Default to "01" if month is empty
    //   year: year || '2000', // Default to "2000" if year is empty
    // };
    // let t = await getAsyncStorageData(ACCESS_TOKEN);
    const token = await AsyncStorage.getItem('sessionToken');

    if (!day || !month || !year) {
      Alert.alert('Please fill in all date fields!');
      return;
    }

    const isValidDate = validateBirthdate(day, month, year);
    if (!isValidDate) {
      Alert.alert('Invalid birthdate. Please enter a valid date.');
      return;
    }

    fetch('https://datepa.brandlyup.com/api/v1/register/user-data ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ dob }),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // Alert.alert(data?.message);
        navigation.navigate('S11');
      })
      .catch((error) => {
        Alert.alert('Sorry,', 'Error fetching data: ' + error.message);
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <View style={styles.outer}>
          <View style={[styles.inner, { width: '20%' }]}></View>
        </View>
      </View>
      <View style={styles.contain}>
        <Text style={styles.title}>{`When's your\nbirthday?`}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            placeholder="Day"
            placeholderTextColor="grey"
            value={day}
            onChangeText={handleDayChange}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            placeholder="Month"
            placeholderTextColor="grey"
            value={month}
            onChangeText={handleMonthChange}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={4}
            placeholder="Year"
            placeholderTextColor="grey"
            value={year}
            onChangeText={handleYearChange}
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
            This will need to be verified when you set up your credit profile{' '}
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
    flexDirection: 'row', // Set the direction to row
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

export default S10;
