// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Pressable, Button, FontSize, FontFamily, Color, ScrollView, BackHandler } from 'react-native';
import Screen from "../src/Screen";
import Footer from './Footer';

const S2 = ({ navigation }) => {
  // useEffect(() => {
  //   const backAction = () => {
  //     // Navigate to the dashboard when the back button is pressed
  //     navigation.navigate('S2'); // Replace 'Dashboard' with the actual dashboard screen name
  //     return true; // Return true to prevent default back button behavior
  //   };

  //   const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

  //   return () => backHandler.remove(); // Clean up the event listener on component unmount
  // }, []);
  // const [backPressCount, setBackPressCount] = useState(0);

  // const handleBackPress = () => {
  //   if (navigation.isFocussed()) {
  //     setBackPressCount((prevCount) => prevCount + 1);

  //     if (backPressCount === 1) {
  //       BackHandler.exitApp(); // Exit the app when back is pressed twice
  //     } else {
  //       setTimeout(() => {
  //         setBackPressCount(0); // Reset backPressCount after a certain delay
  //       }, 2000); // 2 seconds delay
  //     }

  //     return true; 
  //   }
  //   return false;
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', handleBackPress);

  //   return () => {
  //     BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  //   };
  // }, [backPressCount]);


  return (
    <View style={styles.container}>
      <Image
        style={[styles.s2Child]}
        resizeMode="contain"
        source={require('../assets/group-3.png')}
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => {
          navigation.navigate('S3');
        }}
      >
        <Text style={styles.buttonText}
        >LOGIN</Text>
      </Pressable>
      <Footer />
      <Image
        style={styles.s1Item}
        resizeMode="contain"
        source={require('../assets/group-4.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292929',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#F9F9F9',
    fontSize: 17,
  },
  buttonPressed: {
    // backgroundColor: '#e96a37',
  },
  s2ChildLayout: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    position: 'absolute',
    // backgroundColor: 'red'
  },
  statusBarPosition: {
    left: '50%',
    position: 'absolute',
  },
  timeLayout: {
    width: 54,
    position: 'absolute',
  },
  timeTypo: {
    textAlign: 'center',
    lineHeight: 22,
    //fontSize: FontSize.size_mid,
    fontSize: 20,
  },
  s2Child: {
    //flex: 1,
    height: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // backgroundColor: 'yellow'
  },
  time: {
    marginTop: -11,
    top: '50%',
    left: 0,
    fontWeight: '700',
    //fontFamily: FontFamily.cairoBold,
    //color: Color.coral,
    color: 'red',
    width: 54,
    position: 'absolute',
  },
  timeStyle: {
    top: 19,
    left: 43,
    height: 22,
    overflow: 'hidden',
  },
  border: {
    right: 2,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: '#e96a37',
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: 13,
    top: 0,
    position: 'absolute',
  },
  capIcon: {
    top: 5,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: 'absolute',
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 3,
    //backgroundColor: Color.coral,
    backgroundColor: 'red',
    height: 9,
    width: 21,
    position: 'absolute',
  },
  battery: {
    top: 23,
    right: 33,
    width: 27,
    height: 13,
    position: 'absolute',
  },
  wifiIcon: {
    width: 19,
    height: 13,
  },
  cellularConnectionIcon: {
    width: 21,
    height: 13,
  },
  statusBar: {
    marginLeft: -214,
    width: 428,
    height: 58,
    top: 0,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    //backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    backgroundColor: 'blue',
    width: 134,
    height: 5,
  },
  button: {
    flex: 1,
    margin: 20,
    backgroundColor: '#aec48a',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 60,
    // alignContent: 'center',
    // position: 'absolute',
    borderRadius: 26,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 63,
    width: '80%',
    position: 'absolute',
  },
  loginButton: {
    margin: 50,
  },
  login1: {
    //fontFamily: FontFamily.poppinsRegular,
    color: '#f9f9f9',
    width: 300,
    height: 18,
  },
  login: {
    left: 102,
    top: 700,
    position: 'absolute',
  },
  s2Inner: {
    height: '1.94%',
    width: '18%',
    top: '95.25%',
    right: '41.11%',
    bottom: '2.81%',
    left: '40.89%',
  },
  s2: {
    flex: 1,
    height: '100%',
    width: '100%',
    height: 926,
    overflow: 'hidden',
  },
  s1Item: {
    height: '1.94%',
    width: '18%',
    top: '95.25%',
    right: '41.11%',
    bottom: '2.81%',
    left: '40.89%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
});

export default S2;
