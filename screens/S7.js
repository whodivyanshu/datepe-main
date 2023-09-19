import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Border,
  Padding,
  Color,
  FontFamily,
  Image,
  TouchableOpacity
} from 'react-native';
import Footer from './Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';


const S7 = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('S8');
  };

  useEffect(() => {
    // Simulate a delay using setTimeout
    const timeout = setTimeout(() => {
      // Navigate to the S2 screen
      navigation.navigate('S8');
    }, 2000); // Delay of 3 seconds

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
  }, []);
  return (
    <TouchableOpacity style={[styles.s7FinalScreen, styles.frameChildFlexBox]}
    onPress={handlePress}>
      <View style={[styles.s7FinalScreenChild, styles.finalPosition]} />
      <Image
        style={[styles.image2Icon, styles.thankYouPosition]}
        contentFit="cover"
        source={require('../assets/image-2.png')}
      />
      <Image
        style={[styles.s7FinalScreenItem, styles.finalPosition]}
        contentFit="cover"
        source={require('../assets/rectangle-4.png')}
      />
      <View style={styles.s7FinalScreenInner}>
        <Image
          style={[styles.frameChild, styles.frameChildFlexBox]}
          contentFit="cover"
          source={require('../assets/vector-red-2.png')}
        />
      </View>
      {/* <View style={styles.groupParent}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require('../assets/group-4.png')}
        />
        <View style={styles.homeIndicatorWrapper}>
          <View style={styles.homeIndicator} />
        </View>
      </View> */}
      <View style={[styles.ellipseParent, styles.thankYouLayout]}>
        <View style={[styles.rectangleView, styles.frameChild1Layout]} />
        <View style={[styles.frameChild1, styles.frameChild1Layout]} />
        <View style={[styles.frameChild2, styles.frameChildLayout]} />
        <View style={[styles.frameChild3, styles.frameChildLayout]} />
        <View style={[styles.frameChild4, styles.frameChildLayout]} />
        <Text
          style={[styles.thankYou, styles.thankYouLayout]}>
          Thank you!
        </Text>
      </View>
      <Footer />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292929',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameChildFlexBox: {
    overflow: 'hidden',
    flex: 1,
  },
  finalPosition: {
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  thankYouPosition: {
    left: 0,
    top: 0,
  },
  thankYouLayout: {
    width: 341,
    position: 'absolute',
  },
  frameChild1Layout: {
    transform: [
      {
        rotate: '-28.74deg',
      },
    ],
    height: 4,
    width: 19,
    borderRadius: 20,
    // borderRadius: Border.br_11xs,
    left: 276,
    position: 'absolute',
  },
  frameChildLayout: {
    width: 9,
    transform: [
      {
        rotate: '-28.74deg',
      },
    ],
    borderRadius: 30,
    //borderRadius: Border.br_11xs,
    height: 3,
    position: 'absolute',
  },
  s7FinalScreenChild: {
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
  },
  image2Icon: {
    width: 428,
    height: 176,
    position: 'absolute',
  },
  s7FinalScreenItem: {
    marginTop: -351,
    marginLeft: 1187,
    borderRadius: 12,
    width: 330,
    height: 495,
    left: '50%',
  },
  frameChild: {
    maxWidth: '100%',
    height: 725,
  },
  s7FinalScreenInner: {
    height: '82.29%',
    top: '-8.64%',
    right: -179,
    bottom: '26.35%',
    left: -92,
    flexDirection: 'row',
    padding: 20,
    // padding: Padding.p_3xs,
    position: 'absolute',
  },
  frameItem: {
    width: 77,
    height: 18,
  },
  homeIndicator: {
    alignSelf: 'stretch',
    borderRadius: 100,
    height: 5,
    backgroundColor: 'white',
    //backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  homeIndicatorWrapper: {
    width: 154,
    marginTop: 8,
    padding: 20,
    //padding: Padding.p_3xs,
  },
  groupParent: {
    right: 137,
    bottom: -8,
    left: 137,
    alignItems: 'center',
    position: 'absolute',
  },
  frameInner: {
    top: 19,
    left: 61,
    width: 3,
    height: 3,
    position: 'absolute',
  },
  ellipseIcon: {
    top: 35,
    left: 60,
    width: 5,
    height: 5,
    position: 'absolute',
  },
  rectangleView: {
    top: 31,
    backgroundColor: 'gray',
    // backgroundColor: Color.slategray,
  },
  frameChild1: {
    top: 38,
    backgroundColor: '#f5c348',
  },
  frameChild2: {
    top: 22,
    left: 54,
    backgroundColor: '#f5c348',
    //backgroundColor: Color.slategray,
  },
  frameChild3: {
    top: 17,
    left: 286,
    backgroundColor: 'white',
    // backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  frameChild4: {
    top: 49,
    left: 63,
    backgroundColor: 'white',
    // backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  thankYou: {
    fontSize: 36,
    lineHeight: 73,
    fontWeight: '700',
    //  fontFamily: FontFamily.openSansBold,
    color: 'white',
    //  color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    textAlign: 'center',
    height: 70,
    left: 0,
    top: 0,
  },
  ellipseParent: {
    height: '7.56%',
    marginLeft: -171,
    top: '34.77%',
    bottom: '57.67%',
    left: '50%',
  },
  s7FinalScreen: {
    backgroundColor: '#f59b48',
    width: '100%',
    height: 926,
  },
});

export default S7;
