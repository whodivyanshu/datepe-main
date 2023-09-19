import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  ImageBackground,
  Alert,
  BackHandler,
  Linking,
  Platform
} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Geolocation from '@react-native-community/geolocation';
import Footer from './Footer';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';

const S16 = ({ navigation }) => {
  const [Pgranted, setPGranted] = useState();
  const [matches, setMatches] = useState([]);
  const [location, setLocation] = useState(null);
  const [isLoading, setLoading] = useState(false);


  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     navigation.navigate('S24');
  //   }, 20000); // 5000 milliseconds = 5 seconds

  //   // Clear the timeout if the component unmounts
  //   return () => clearTimeout(timeout);
  // }, [navigation]);

  // const handleLocationPress = () => {
  //   setLoading(true);
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       const { latitude, longitude } = position.coords;
  //       setLocation({ latitude, longitude });
  //       sendLocationData(latitude, longitude);
  //     },
  //     error => console.log("something went wrong"),
  //     // { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  // };

  // const handleLocationPress = () => {
  //   setLoading(true);
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       const { latitude, longitude } = position.coords;
  //       setLocation({ latitude, longitude });
  //       sendLocationData(latitude, longitude);
  //     },
  //     error => {
  //       console.log("something went wrong", error);
  //       if (error.code === 1) { // Permission denied
  //         Alert.alert(
  //           "Location Permission Required",
  //           "Please turn on Location Services in your device settings to use this feature.",
  //           [
  //             {
  //               text: "Cancel",
  //               style: "cancel"
  //             },
  //             {
  //               text: "Allow",
  //               onPress: () => Linking.openSettings()
  //             }
  //           ],
  //           { cancelable: false }
  //         );
  //       } else if (error.code === 2) { // Location services disabled
  //         Alert.alert(
  //           "Location Services Disabled",
  //           "Your device's location services are currently turned off. Please turn them on to use this feature.",
  //           [
  //             {
  //               text: "Cancel",
  //               style: "cancel"
  //             },
  //             {
  //               text: "Allow",
  //               onPress: () => Linking.openSettings()
  //             }
  //           ],
  //           { cancelable: false }
  //         );
  //       }
  //       setLoading(false); // Make sure to set loading to false in error cases
  //     },
  //     // { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  // };

  const handleLocationPress = () => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        sendLocationData(latitude, longitude);
      },
      error => {
        console.log("something went wrong", error);
        if (error.code === 1) { // Permission denied
          Alert.alert(
            "Location Permission Required",
            "Please turn on Location Services in your device settings to use this feature.",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              {
                text: "Allow",
                onPress: () => {
                  if (Platform.OS === 'android') {
                    Linking.openSettings();
                  } else {
                    Linking.openURL('app-settings:');
                  }
                }
              }
            ],
            { cancelable: false }
          );
        } else if (error.code === 2) { // Location services disabled
          Alert.alert(
            "Location Services Disabled",
            "Your device's location services are currently turned off. Please turn them on to use this feature.",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              {
                text: "Allow",
                onPress: () => {
                  if (Platform.OS === 'android') {
                    Linking.openSettings();
                  } else {
                    Linking.openURL('app-settings:');
                  }
                }
              }
            ],
            { cancelable: false }
          );
        }
        setLoading(false); // Make sure to set loading to false in error cases
      },
      // { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  // const handleLocationPress = () => {
  //   setLoading(true);
  //   requestLocationPermission().then((response) => {
  //     if (response === 'authorized') {
  //       Geolocation.getCurrentPosition(
  //         position => {
  //           const { latitude, longitude } = position.coords;
  //           setLocation({ latitude, longitude });
  //           sendLocationData(latitude, longitude);
  //         },
  //         error => console.log("something went wrong"),
  //         // { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //       );
  //     } else {
  //       console.log('Location permission not granted')
  //     }
  //   });
  // };
  // const requestLocationPermission = async () => {
  //   const response = await Permissions.request('location');
  //   return response;
  // };

  const sendLocationData = async (latitude, longitude) => {
    const payload = {
      name: "Udaipur",
      latitude: latitude,
      longitude: longitude
    };
    const token = await AsyncStorage.getItem('sessionToken');
    if (!token) {
      navigation.navigate('S2');
      return;
    }
    fetch('https://datepa.brandlyup.com/api/v1/me/current-location', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        // navigation.navigate("S17")
        // if (data.success) {
        if (data.success === true) {
          Alert.alert("Success", data.message, [
            { text: "OK", onPress: () => navigation.navigate("S24") }
          ]);
        } else {
          setLoading(false);
          Alert.alert("Error", data.message);
        }
      })
      .catch(error => console.error(error));
  };



  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <View style={styles.outer}>
          <View style={[styles.inner, { width: '80%' }]}></View>
        </View>
      </View>
      <View style={styles.contain}>
        <Text style={styles.title}>{`Find nearby matches...`}</Text>
        <View>
          <Text style={styles.text1}>
            This is how your name will appear on your profile
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.image}
            source={require('../assets/locationani.png')}>
            <Animatable.View
              style={styles.card}
              delay={0}
              duration={1000}
              animation="slideInDown"
              iterationCount={5}
              iterationDelay={1}
              direction="alternate">
              <Image
                style={styles.carbon}
                source={require('../assets/carbonloc.png')}
              />
            </Animatable.View>
          </ImageBackground>
          <Pressable
            style={styles.press}
            onPress={handleLocationPress}
          >
            <View style={styles.btnn}>
              <Text style={styles.allow}>Allow location access</Text>
            </View>
          </Pressable>
          <Spinner
            visible={isLoading}
            textStyle={styles.spinnerText}
          />
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  press: {
    flexDirection: 'column',
  },
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
    height: '15%',
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
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'column', // This will stack the image and the button vertically
    alignItems: 'center', // Center the items horizontally
    marginTop: 20, // Adjust the spacing as needed
  },
  image: {
    width: 300, // Adjust the image dimensions as needed
    height: 300,
    marginBottom: 15, // Add some spacing between image and button
    marginTop: 70,
  },
  btnn: {
    // backgroundColor: '#F5C348',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 40,
    paddingVertical: 20,
    paddingHorizontal: 35,
    alignItems: 'center',
  },
  allow: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  carbon: {
    position: 'relative',
    left: '25%',
  },
});

export default S16;
