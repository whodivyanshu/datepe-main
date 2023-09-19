import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Color, FontFamily, BackHandler } from 'react-native';

const S20 = ({ navigation }) => {
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
      navigation.navigate('S21'); // Replace 'S8' with the name of the screen you want to navigate to
    }, 2000); // 5000 milliseconds = 5 seconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.androidLarge4}>
      <Image
        style={[styles.welcomeAnimationCurve1Icon, styles.welcomePosition]}
        contentFit="cover"
        source={require('../assets/welcomeanimationcurve-1.png')}
      />
      <View style={[styles.homeIndicator, styles.welcomePosition]} />
      <View style={[styles.welcomePosition]}>
        <Text style={[styles.welcomeText]}>WELCOME</Text>
      </View>
      <Image
        style={styles.androidLarge4Child}
        contentFit="cover"
        source={require('../assets/group-4.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomePosition: {
    left: '50%',
    position: 'absolute',
    // backgroundColor: 'blue',
  },
  welcomeText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 350,
    marginLeft: -98,
    // top: '50%',===================================================================================
    fontSize: 32,
    letterSpacing: 6,
    fontWeight: '700',
    //fontFamily: FontFamily.cairoBold,
    color: '#fff',
    textAlign: 'center',
  },
  welcomeAnimationCurve1Icon: {
    marginTop: -400,
    marginLeft: -180,
    width: 366,
    top: '50%',
    left: '50%',
    height: 800,
  },
  homeIndicator: {
    marginLeft: -73,
    bottom: 4,
    borderRadius: 100,
    backgroundColor: '#fff',
    width: 134,
    height: 5,
  },
  welcome: {
    marginTop: -78,
    marginLeft: -134,
    fontSize: 32,
    letterSpacing: 6,
    lineHeight: 22,
    fontWeight: '700',
    // fontFamily: FontFamily.cairoBold,
    color: '#fff',
    textAlign: 'center',
    width: 267,
    height: 162,
    top: '50%',
    left: '50%',
  },
  androidLarge4Child: {
    height: '2.25%',
    width: '21.4%',
    top: '94.38%',
    right: '41.1%',
    bottom: '3.38%',
    left: '37.5%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  androidLarge4: {
    backgroundColor: '#292929',
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: 800,
  },
});

export default S20;
