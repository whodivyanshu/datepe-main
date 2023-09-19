import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FontFamily, FontSize, Color, Border, Image } from "react-native";

const S25 = ({ navigation }) => {
    useEffect(() => {
        // Simulate a delay using setTimeout
        const timeout = setTimeout(() => {
          // Navigate to the S2 screen
          navigation.navigate('S26');
        }, 2000); // Delay of 3 seconds
    
        return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
      }, []);
  return (
    <View style={styles.s16LoadingScreen}>
      <Image
        style={styles.s16LoadingScreenChild}
        contentFit="cover"
        source={require("../assets/group-499.png")}
      />
      <View style={styles.homeIndicator} />
      <Image
        style={styles.s16LoadingScreenItem}
        contentFit="conta"
        source={require("../assets/group-4.png")}
      />
      <Text style={[styles.loading, styles.timeTypo]}>loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    // fontFamily: FontFamily.cairoBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: 17,
    position: "absolute",
  },
  s16LoadingScreenChild: {
    top: 212,
    width: 552,
    height: 552,
    opacity: 0.3,
    left: 0,
    position: "absolute",
  },
  time: {
    marginTop: -11,
    top: "50%",
    color: '#f9f9f9',
    width: 54,
    left: 0,
  },
  timeStyle: {
    top: 19,
    left: 43,
    height: 22,
    width: 54,
    position: "absolute",
    overflow: "hidden",
  },
  border: {
    right: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#f9f9f9",
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
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 3,
    backgroundColor: '#f9f9f9',
    height: 9,
    width: 21,
    position: "absolute",
  },
  battery: {
    top: 23,
    right: 33,
    width: 27,
    height: 13,
    position: "absolute",
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
    left: "50%",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: '#fff',
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  s16LoadingScreenItem: {
    height: "1.94%",
    width: "18%",
    top: "95.25%",
    right: "41.11%",
    bottom: "2.81%",
    left: "40.89%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loading: {
    marginLeft: -69,
    top: 488,
    letterSpacing: 7,
    textTransform: "uppercase",
    color: '#fff',
    left: "50%",
  },
  s16LoadingScreen: {
    backgroundColor: "#292929",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default S25;
