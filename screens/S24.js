import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, BackHandler } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const AnimatedScreen = () => {
  const [locationFetched, setLocationFetched] = useState(false);
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();

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

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [backPressCount]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('S28'); // Replace 'S8' with the name of the screen you want to navigate to
    }, 4000); // 5000 milliseconds = 5 seconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);

  // useEffect(() => {
  //   // Check for geolocation support
  //   if ('geolocation' in navigator) {
  //     // Request location data
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const fetchedLocation = {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         };

  //         // Set locationFetched to true and store the location when data is fetched
  //         setLocationFetched(true);
  //         setLocation(fetchedLocation);
  //       },
  //       (error) => {
  //         console.error(error);
  //         // Handle location fetching error here
  //       }
  //     );
  //   } else {
  //     console.error('Geolocation is not supported on this device.');
  //     // Handle geolocation not supported error here
  //   }
  // }, []);

  return (
    <View style={styles.container}>
      {locationFetched ? (
        <View>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </View>
      ) : null}

      <Animatable.View
        animation="zoomIn"
        iterationCount="infinite"
        direction="alternate"
        style={styles.circle}></Animatable.View>
      <Animatable.View
        animation="zoomIn"
        iterationCount="infinite"
        direction="alternate"
        style={styles.smallCircle}></Animatable.View>
      <Animatable.View
        animation="zoomIn"
        iterationCount="infinite"
        direction="alternate"
        style={styles.small2Circle}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: '200%',
    aspectRatio: 1,
    borderRadius: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    opacity: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallCircle: {
    width: '150%',
    aspectRatio: 1,
    borderRadius: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    opacity: 0.8,
    position: 'absolute',
  },
  small2Circle: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    opacity: 0.8,
    position: 'absolute',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: 'white',
    fontSize: 17,
    letterSpacing: 4,
  },
});

const S24 = () => {
  return (
    <View style={{ flex: 1 }}>
      <AnimatedScreen />
    </View>
  );
}

export default S24;
