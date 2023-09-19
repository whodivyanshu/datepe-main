import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Color, FontFamily, BackHandler } from 'react-native';

const S19 = ({ navigation }) => {
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
      navigation.navigate('S20'); // Replace 'S8' with the name of the screen you want to navigate to
    }, 2000); // 5000 milliseconds = 5 seconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.s154}>
      <View style={[styles.homeIndicator, styles.welcomePosition]} />
      <View style={[styles.welcomePosition]}>
        <Text style={[styles.welcomeText]}>WELCOME</Text>
      </View>
      <Image
        style={styles.s154Child}
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
    marginTop: -13,
    marginLeft: -98,
    // top: '50%',===================================================================================
    fontSize: 32,
    letterSpacing: 6,
    fontWeight: '700',
    //fontFamily: FontFamily.cairoBold,
    color: '#fff',
    textAlign: 'center',
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: '#fff',
    width: 134,
    height: 5,
  },
  s154Child: {
    // top: '95.25%',
    // right: '41.11%',
    bottom: '2.81%',
    maxWidth: '60%',
    maxHeight: '60%',
    position: 'absolute',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  s154: {
    backgroundColor: '#cc3e3e',
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default S19;
