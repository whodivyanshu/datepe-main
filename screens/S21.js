import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Color, FontFamily, Image, BackHandler } from 'react-native';

const S21 = ({ navigation }) => {
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
      navigation.navigate('S22'); // Replace 'S8' with the name of the screen you want to navigate to
    }, 2000); // 5000 milliseconds = 5 seconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.androidLarge5}>
      <Image
        style={styles.welcomeAnimation0021Icon}
        contentFit="cover"
        source={require('../assets/welcomeanimation002-1.png')}
      />
      <View style={styles.homeIndicator} />
      <View style={[styles.welcomePosition]}>
        <Text style={[styles.welcomeText]}>WELCOME</Text>
      </View>
      <Image
        style={styles.androidLarge5Child}
        contentFit="cover"
        source={require('../assets/group-4.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeAnimation0021Icon: {
    top: 0,
    left: 0,
    width: 360,
    height: 580,
    position: 'absolute',
  },
  homeIndicator: {
    marginLeft: -73,
    bottom: 4,
    left: '50%',
    borderRadius: 100,
    backgroundColor: '#fff',
    width: 134,
    height: 5,
    position: 'absolute',
  },
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
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
  },
  androidLarge5Child: {
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
  androidLarge5: {
    backgroundColor: '#292929',
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default S21;
