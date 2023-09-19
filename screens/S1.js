import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  FontSize,
  FontFamily,
  Color,
  Border,
  TouchableOpacity,
  Slider
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Footer from './Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const S1 = ({ navigation }) => {

  useEffect(() => {
    let t5 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6IjU1NTU1NTU1NTUiLCJvdHAiOiJ2aXBHZkQiLCJ1c2VySWQiOiI2NGYxN2U4MzQ2YTAzNmJjMDBjYzczMDIiLCJpYXQiOjE2OTM1NDgxNjMsImV4cCI6MTY5MzU1MTc2M30.NsPQMn0Dtt2GPgqrZ99GdxAUA9YMlbWxwJNbcfwwDbM'
    let t6 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6IjY2NjY2NjY2NjYiLCJvdHAiOiJBUlY3MUEiLCJ1c2VySWQiOiI2NGYxN2VjNzQ2YTAzNmJjMDBjYzczMzciLCJpYXQiOjE2OTM1NDgyMzEsImV4cCI6MTY5MzU1MTgzMX0.e1oYatQn0onxEuqatPRq2zkOaGjje-QXkcw4oizLAy0'
    // AsyncStorage.setItem('sessionToken', t6);
    // AsyncStorage.removeItem('sessionToken');
    // AsyncStorage.setItem('sessionToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo');
    AsyncStorage.getItem('sessionToken')
      .then((token) => {
        if (token) {
          navigation.navigate('S28');
          // navigation.navigate('S28message');
          // fetchData();
        } else {
          const timeout = setTimeout(() => {
            navigation.replace('S2');
          }, 2000);
          // navigation.navigate('S2'); 
        }
      })
      .catch((error) => {
        console.error('Error retrieving session token:', error);
      });
  }, [navigation]);


  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     navigation.replace('S2');
  //   }, 2000);

  //   // return () => clearTimeout(timeout);
  // }, []);

  const handlePress = () => {
    navigation.navigate('S2');
  };

  return (
    <View
      style={styles.s1}
      onPress={() => {
        console.log(navigation);
        navigation.navigate('S2');
      }}>
      <Animatable.Image
        animation="zoomIn" // Specify the animation you want
        duration={2000}
        style={styles.s1Child}
        resizeMode="cover"
        source={require('../assets/vector-1.png')} />
      <Image
        style={styles.s1Item}
        resizeMode="cover"
        source={require('../assets/group-4.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: 0,
    position: 'absolute',
  },
  timeLayout: {
    width: 54,
    position: 'absolute',
  },
  s1Child: {
    marginTop: -25,
    marginLeft: -37,
    width: 74,
    height: 50,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  time: {
    marginTop: -11,
    left: 0,
    fontSize: 12,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    //  fontFamily: FontFamily.cairoBold,
    color: '#f3feff',
    textAlign: 'center',
    top: '50%',
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
    borderColor: '#d9d9d9',
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: 13,
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
    backgroundColor: '#d9d9d9',
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
    left: '50%',
  },
  homeIndicator: {
    marginLeft: -59,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: '#fff',
    width: 134,
    height: 5,
    left: '50%',
    position: 'absolute',
  },
  s1Item: {
    height: '2.94%',
    width: '22%',
    top: '95.25%',
    right: '41.11%',
    bottom: '2.81%',
    left: '40.89%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  s1: {
    backgroundColor: '#292929',
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
  },
});

export default S1;
