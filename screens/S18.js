import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Border, FontFamily, BackHandler } from "react-native";
import * as Animatable from 'react-native-animatable'; // Import the Animatable library

const S18 = ({ navigation }) => {
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
      navigation.navigate('S19'); // Replace 'S8' with the name of the screen you want to navigate to
    }, 2000); // 5000 milliseconds = 5 seconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.androidLarge2}>
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
        <Image
          style={[styles.androidLarge2Item, styles.androidPosition]}
          contentFit="cover"
          source={require("../assets/vector-90600.png")}
        />
        <Image
          style={[styles.androidLarge2Inner, styles.androidPosition]}
          contentFit="cover"
          source={require("../assets/vector-90700.png")}
        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupChildPosition: {
    height: 39,
    width: 326,
    marginLeft: -163,
    left: "50%",
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 56,
  },
  gotItPosition: {
    top: 7,
    left: "50%",
    position: "absolute",
  },
  androidPosition: {
    borderRadius: 5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  androidLarge2Child: {
    // marginTop: -196,
    marginLeft: -180,
    // top: "50%",
    // width: 442,
    // height: 442,
    // left: "50%",
    position: 'absolute',
    justifyContent: 'center',
  },
  groupChild: {
    top: 0,
    backgroundColor: "#f9f9f9",
    height: 39,
    width: 326,
    marginLeft: -163,
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    marginLeft: -157,
    backgroundColor: "#da4949",
    width: 314,
    height: 25,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 56,
  },
  gotIt: {
    marginLeft: -128,
    fontSize: 15,
    fontWeight: "200",
    //fontFamily: FontFamily.poppinsExtraLight,
    color: "rgba(255, 255, 255, 0.5)",
    textAlign: "center",
    width: 256,
    height: 19,
  },
  rectangleParent: {
    top: 64,
  },
  androidLarge2Item: {
    marginTop: -280,
    marginLeft: -170,
    width: 26,
    height: 48,
  },
  androidLarge2Inner: {
    marginTop: -282.63,
    marginLeft: 140,
    width: 19,
    height: 17,
  },
  androidLarge2: {
    backgroundColor: "#292929",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
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

export default S18;
