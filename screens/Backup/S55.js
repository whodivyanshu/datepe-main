import * as React from "react";
import { Image, StyleSheet, View, Text, olor, FontFamily } from "react-native";

const S55 = ({ navigation }) => {
    return (
        <View style={styles.s26DirectPe}>
            <Image
                style={styles.s26DirectPeChild}
                resizeMode="cover"
                source={require("../assets/direct-pay-curve.png")}
            />
            <View style={styles.groupParent}>
                <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={require("../assets/group-4.png")}
                />
                <View style={styles.homeIndicatorWrapper}>
                    <View style={styles.homeIndicator} />
                </View>
            </View>
            <View style={styles.menuVerticalParent}>
                <Image
                    style={styles.menuVerticalIcon}
                    resizeMode="cover"
                    source={require("../assets/menu-vertical.png")}
                />
                <Image
                    style={styles.messageIcon}
                    resizeMode="cover"
                    source={require("../assets/message.png")}
                />
            </View>
            <Text style={[styles.directpe, styles.directpeTypo]}>DIRECTPE</Text>
            <Text style={[styles.comingSoon, styles.directpeTypo]}>Coming soon</Text>
            <View style={[styles.theBandShowWrapper, styles.thePosition]}>
                <Image
                    style={[styles.theBandShow, styles.thePosition]}
                    resizeMode="cover"
                    source={require("../assets/the-band-show.png")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    directpeTypo: {
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        color: 'white',
        //color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
        //fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        textTransform: "uppercase",
        left: "50%",
        alignItems: "center",
        position: "absolute",
    },
    thePosition: {
        marginLeft: 40,
        width: 250,
        height: 200,
        left: 0,
        right: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: 'yellow',
    },
    s26DirectPeChild: {
        right: 0,
        left: 0,
        maxWidth: "100%",
        height: 192,
        top: 0,
        position: "absolute",
        overflow: "hidden",
    },
    frameChild: {
        width: 77,
        height: 18,
    },
    homeIndicator: {
        borderRadius: 100,
        backgroundColor: 'white',
        // backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
        height: 5,
        alignSelf: "stretch",
    },
    homeIndicatorWrapper: {
        padding: 10,
        marginTop: 5,
        alignSelf: "stretch",
    },
    groupParent: {
        right: 137,
        bottom: -7,
        left: 137,
        alignItems: "center",
        position: "absolute",
    },
    menuVerticalIcon: {
        width: 26,
        height: 26,
    },
    messageIcon: {
        width: 27,
        height: 27,
        marginLeft: 200,
    },
    menuVerticalParent: {
        marginLeft: -126,
        flexDirection: "row",
        left: "50%",
        top: 61,
        position: "absolute",
    },
    directpe: {
        marginLeft: -73,
        fontSize: 20,
        letterSpacing: 5,
        lineHeight: 22,
        width: 147,
        height: 28,
        top: 61,
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        color: 'blue',
        // color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
        // fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        textTransform: "uppercase",
    },
    comingSoon: {
        marginLeft: -147,
        top: 393,
        fontSize: 24,
        letterSpacing: 3,
        lineHeight: 60,
        width: 303,
        height: 144,
    },
    theBandShow: {
        bottom: 0,
        maxHeight: "50%",
        top: 20,
        alignItems: "center",
        justifyContentL: "center",
  },
    theBandShowWrapper: {
        marginLeft: -99,
        top: 184,
        bottom: 574,
    },
    s26DirectPe: {
        backgroundColor: "#292929",
        flex: 1,
        width: "100%",
        height: 926,
        overflow: "hidden",
    },
});

export default S55;
