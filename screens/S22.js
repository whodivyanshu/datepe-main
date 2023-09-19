import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Color, Image, BackHandler } from 'react-native';

const S22 = ({ navigation }) => {
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
      navigation.navigate('S23'); // Replace 'S8' with the name of the screen you want to navigate to
    }, 2000); // 5000 milliseconds = 5 seconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.androidLarge6}>
      <View style={styles.homeIndicator} />
      <Image
        style={styles.androidLarge6Child}
        contentFit="cover"
        source={require('../assets/group-4.png')}
      />
      <Image
        style={[styles.androidLarge6Item, styles.androidLarge6ItemPosition]}
        contentFit="cover"
        source={require('../assets/group-51100.png')}
      />
      <Image
        style={[
          styles.welcomeAnimation0031Icon,
          styles.androidLarge6ItemPosition,
        ]}
        contentFit="cover"
        source={require('../assets/welcomeanimation003.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  androidLarge6ItemPosition: {
    left: 0,
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
  androidLarge6Child: {
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
  androidLarge6Item: {
    top: 273,
    width: 400,
    height: 400,
  },
  welcomeAnimation0031Icon: {
    top: 0,
    width: 361,
    height: 337,
  },
  androidLarge6: {
    backgroundColor: '#292929',
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});
export default S22;
