import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, Border, Color, FontFamily, FontSize, BackHandler } from "react-native";
import Screen from "../src/Screen";
import * as Animatable from 'react-native-animatable'; // Import the Animatable library


// import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const S17 = ({ navigation }) => {
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
      navigation.navigate('S18');
    }, 2000); // Delay of 3 seconds

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
  }, []);
  return (
    <View style={styles.container}>

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
      </Animatable.View>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.groupItem, styles.gotItPosition]} />
        <Text style={[styles.gotIt, styles.gotItPosition]}>got it</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParent: {
    top: 64,
  },
  groupChildPosition: {
    height: 39,
    width: 326,
    marginLeft: -163,
    left: '50%',
    position: 'absolute',
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 56,
  },
  groupItem: {
    marginLeft: -157,
    backgroundColor: '#da4949',
    width: 314,
    height: 25,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 56,
  },
  gotItPosition: {
    top: 7,
    left: '50%',
    position: 'absolute',
  },
  gotIt: {
    marginLeft: -128,
    fontSize: 15,
    fontWeight: '200',
    // fontFamily: FontFamily.poppinsExtraLight,
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
    width: 256,
    height: 19,
  },
  gotItPosition: {
    top: 7,
    left: '50%',
    position: 'absolute',
  },
  groupChild: {
    top: 0,
    backgroundColor: '#f9f9f9',
    height: 39,
    width: 326,
    marginLeft: -163,
    left: '50%',
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: '#292929',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: '250%',
    aspectRatio: 1,
    borderRadius: 500,
    backgroundColor: 'rgba(218, 73, 73, 0.2)',
    opacity: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // innerCircle: {
  //   width: '150%',
  //   aspectRatio: 1,
  //   borderRadius: 300,
  //   backgroundColor: 'rgba(255, 255, 255, 0.2)',
  //   opacity: 8,
  // },
  smallCircle: {
    width: '200%',
    aspectRatio: 1,
    borderRadius: 400,
    backgroundColor: 'rgba(218, 73, 73, 0.5)',
    opacity: 8,
    position: 'absolute',
  },
  small2Circle: {
    width: '150%',
    aspectRatio: 1,
    borderRadius: 400,
    backgroundColor: 'rgba(218, 73, 73, 0.5)',
    // opacity: 8,
    position: 'absolute',
  },
});

export default S17;
