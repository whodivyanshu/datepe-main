import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Color,
  Border,
  FontFamily,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import Screen from "../src/Screen";
import Footer from './Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';


const S8 = ({ navigation }) => {
  const [backPressCount, setBackPressCount] = useState(0);
  const handlePress = () => {
    navigation.navigate('S9');
  };

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
    // Simulate a delay using setTimeout
    const timeout = setTimeout(() => {
      // Navigate to the S2 screen
      navigation.navigate('S9');
    }, 2000); // Delay of 3 seconds

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
  }, []);
  return (
      <TouchableOpacity style={[styles.s7P2Animation, styles.animationLayout]}
      onPress={handlePress}>
        <View style={styles.s7P2AnimationChild} />
        {/* <Image
          style={[styles.image2Icon, styles.thankYouPosition]}
          contentFit="cover"
          source={require('../assets/image-2.png')}
        /> */}
        <Image
          style={[styles.s7P2AnimationItem, styles.frameIconPosition]}
          contentFit="cover"
          source={require('../assets/rectangle-4.png')}
        />
        <View style={[styles.homeIndicator, styles.frameChildLayout1]} />
        <Image
          style={[styles.s7P2AnimationInner, styles.s7P2AnimationInnerPosition]}
          contentFit="cover"
          source={require('../assets/vector-2.png')}
        />
        <View
          style={[
            styles.youAreNowPartOfSomethingWrapper,
            styles.s7P2AnimationInnerPosition,
          ]}>
          <Text style={[styles.youAreNow, styles.youFlexBox]}>
            You are now part of something much bigger now.
          </Text>
        </View>
        <View style={styles.ellipseParent}>
          <View style={[styles.frameInner, styles.frameInnerLayout]} />
          <View style={[styles.rectangleView, styles.frameInnerLayout]} />
          <View style={[styles.frameChild1, styles.frameChildLayout]} />
          <View style={[styles.frameChild2, styles.frameChildLayout]} />
          <View style={[styles.frameChild3, styles.frameChildLayout]} />
          <Text
            style={[
              styles.youreOnThe,
              styles.youFlexBox,
            ]}>You’re on the wait list </Text>
          <Text
            style={[styles.thankYou, styles.youFlexBox]}>
            Thank you!
          </Text>
        </View>
        <Footer />
        {/* <Image
          style={[styles.frameIcon, styles.frameIconPosition]}
          contentFit="cover"
          source={require('../assets/frame-2608658.png')}
        /> */}
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  animationLayout: {
    overflow: 'hidden',
    height: 926,
  },
  thankYouPosition: {
    left: 0,
    position: 'absolute',
  },
  frameIconPosition: {
    width: 330,
    left: '50%',
    position: 'absolute',
  },
  frameChildLayout1: {
    height: 5,
    position: 'absolute',
  },
  s7P2AnimationInnerPosition: {
    right: 0,
    left: 0,
    position: 'absolute',
  },
  youFlexBox: {
    textAlign: 'center',
    color: 'white',
    //color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  frameInnerLayout: {
    transform: [
      {
        rotate: '-66.55deg',
      },
    ],
    height: 6,
    width: 30,
    borderRadius: 30,
    // borderRadius: Border.br_11xs,
    position: 'absolute',
  },
  frameChildLayout: {
    height: 4,
    width: 14,
    transform: [
      {
        rotate: '-66.55deg',
      },
    ],
    borderRadius: 40,
    // borderRadius: Border.br_11xs,
    position: 'absolute',
  },
  s7P2AnimationChild: {
    marginTop: -429,
    marginLeft: -249,
    borderRadius: 24,
    backgroundColor: '#292929',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 11,
      height: 4,
    },
    shadowRadius: 26,
    elevation: 26,
    shadowOpacity: 1,
    width: 498,
    height: 894,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  image2Icon: {
    width: 428,
    height: 176,
    top: 0,
  },
  s7P2AnimationItem: {
    marginTop: -351,
    marginLeft: 1187,
    borderRadius: 12,
    height: 495,
    top: '50%',
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    width: 134,
    backgroundColor: 'white',
    //backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    left: '50%',
  },
  s7P2AnimationInner: {
    maxWidth: '100%',
    top: 0,
    overflow: 'hidden',
    height: 926,
  },
  youAreNow: {
    fontSize: 15,
    // fontFamily: FontFamily.poppinsLight,
    fontWeight: '300',
    lineHeight: 23,
    color: 'white',
    // color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    flex: 1,
  },
  youAreNowPartOfSomethingWrapper: {
    bottom: 97,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameChild: {
    left: 24,
    width: 4,
    top: 0,
  },
  frameItem: {
    top: 25,
    left: 22,
    width: 8,
    height: 8,
    position: 'absolute',
  },
  frameInner: {
    top: 40,
    left: 294,
    backgroundColor: 'gray',
    //  backgroundColor: Color.slategray,
  },
  rectangleView: {
    top: 49,
    left: 301,
    backgroundColor: '#f5c348',
  },
  frameChild1: {
    top: 5,
    left: 12,
    backgroundColor: 'gray',
    //  backgroundColor: Color.slategray,
  },
  frameChild2: {
    top: 13,
    left: 293,
    backgroundColor: 'white',
    //backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  frameChild3: {
    top: 47,
    left: 27,
    backgroundColor: 'white',
    // backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  youreOnThe: {
    top: 89,
    fontSize: 17,
    width: '100%',
    right: 20,
    //  fontFamily: FontFamily.poppinsLight,
    fontWeight: '300',
    color: 'white',
    // color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    position: 'absolute',
  },
  thankYou: {
    top: 9,
    fontSize: 48,
    lineHeight: 73,
    fontWeight: '700',
    //fontFamily: FontFamily.openSansBold,
    width: 341,
    height: 70,
    left: 0,
    position: 'absolute',
  },
  ellipseParent: {
    height: '12.74%',
    marginLeft: -177,
    top: '31.97%',
    bottom: '55.29%',
    width: 390,
    left: '50%',
    position: 'absolute',
  },
  frameIcon: {
    marginLeft: -142,
    bottom: 1,
    height: 74,
  },
  s7P2Animation: {
    backgroundColor: '#f59b48',
    width: '100%',
    flex: 1,
  },
});

export default S8;
