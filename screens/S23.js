import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Color, FontFamily, Image, BackHandler } from 'react-native';

const S23 = ({ navigation }) => {
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
      navigation.navigate('S24'); // Replace 'S8' with the name of the screen you want to navigate to
    }, 2000); // 5000 milliseconds = 5 seconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.androidLarge8}>
      <View style={styles.homeIndicator} />
      <Image
        style={styles.androidLarge8Child}
        contentFit="cover"
        source={require('../assets/group-4.png')}
      />
      <Image
        style={[styles.androidLarge8Item]}
        contentFit="cover"
        source={require('../assets/group-515002.png')}
      />
      <Image
        style={[styles.welcomeAnimation32Icon, styles.loadingPosition]}
        contentFit="cover"
        source={require('../assets/welcomeanimation3-100.png')}
      />
      <Text style={[styles.loading, styles.loadingPosition]}>loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingPosition: {
    // top: "50%",
    left: '50%',
    position: 'absolute',
  },
  homeIndicator: {
    bottom: 4,
    borderRadius: 100,
    backgroundColor: '#fff',
    width: 134,
    height: 5,
    left: '50%',
    marginLeft: -73,
    position: 'absolute',
  },
  androidLarge8Child: {
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
  androidLarge8Item: {
    // marginTop: -222,
    width: 400,
    height: 800,
    // marginLeft: -180,
    // top: "50%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeAnimation32Icon: {
    marginTop: -400,
    width: 360,
    height: 132,
    marginLeft: -180,
    top: '50%',
  },
  loading: {
    marginTop: -9,
    fontSize: 17,
    letterSpacing: 7,
    lineHeight: 22,
    textTransform: 'uppercase',
    fontWeight: '700',
    //fontFamily: FontFamily.cairoBold,
    color: '#fff',
    textAlign: 'center',
    width: 144,
    height: 17,
    top: '50%',
    marginLeft: -73,
  },
  androidLarge8: {
    backgroundColor: '#292929',
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default S23;
