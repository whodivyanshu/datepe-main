import * as React from "react";
import { StyleSheet, View, Text, Color, FontFamily, Image,TouchableOpacity } from "react-native";

const S34 = ({navigation}) => {
  const handleImagePress = () => {
    navigation.navigate('S37');
  }

  return (
    <View style={styles.s26DirectPe}>
      <View style={[styles.homeIndicator, styles.homePosition]} />
      <Image
        style={styles.s26DirectPeChild}
        contentFit="cover"
        source={require("../assets/group-4.png")}  
      />
      <View style={[styles.homeProfileCurve2Parent, styles.homePosition]}>
        <Image
          style={[styles.homeProfileCurve2Parent, styles.homePosition]}
          contentFit="cover"
          source={require("../assets/homeprofilecurve-1.png")}
        />
        <View style={[styles.menuVerticalParent, styles.directpePosition]}>
          <Image
            style={styles.menuVerticalIcon}
            contentFit="cover"
            // source={require("../assets/menu-vertical.png")}
          />
          <Image
            style={styles.messageIcon}
            contentFit="cover"
            // source={require("../assets/message.png")}
          />
        </View>
        <View style={[styles.menuVerticalParent, styles.directpePosition]}>
        <TouchableOpacity 
        onPress={handleImagePress}>
          <Image
            style={styles.menuVerticalIcon}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
          </TouchableOpacity>
          <Image
            style={styles.messageIcon}
            contentFit="cover"
            // source={require("../assets/message.png")}
          />
        </View>
        <Text style={[styles.directpe, styles.directpeTypo]}>DIRECTPE</Text>
      </View>
      <Text style={[styles.comingSoon, styles.comingSoonPosition]}>
        Coming soon
      </Text>
      <Image
        style={[styles.theBandShow, styles.comingSoonPosition]}
        contentFit="cover"
        source={require("../assets/the-band-show.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    left: "50%",
    position: "absolute",
  },
  directpePosition: {
    top: 61,
    left: "50%",
    position: "absolute",
  },
  directpeTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: "#fff",
    //fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  comingSoonPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: "#fff",
    width: 134,
    height: 5,
  },
  s26DirectPeChild: {
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
  homeProfileCurve2Parent: {
    marginLeft: -214,
    top: 0,
    width: 428,
    height: 217,
  },
  menuVerticalIcon: {
    width: 26,
    height: 26,
  },
  messageIcon: {
    width: 27,
    height: 27,
    marginLeft: 310,
  },
  menuVerticalParent: {
    marginLeft: -181,
    flexDirection: "row",
  },
  directpe: {
    marginLeft: -73,
    fontSize: 20,
    letterSpacing: 5,
    lineHeight: 22,
    width: 147,
    height: 28,
    top: 61,
    left: "50%",
    position: "absolute",
  },
  comingSoon: {
    marginTop: 114,
    marginLeft: -156,
    fontSize: 24,
    letterSpacing: 3,
    lineHeight: 60,
    width: 303,
    height: 161,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: "#fff",
    //fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  theBandShow: {
    marginTop: -128,
    marginLeft: -182,
    width: 345,
    height: 256,
  },
  s26DirectPe: {
    backgroundColor: "#292929",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default S34;
