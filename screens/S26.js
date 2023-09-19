import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FontFamily, FontSize, Color, Border, Image } from "react-native";

const S26 = ({ navigation }) => {
    useEffect(() => {
        // Simulate a delay using setTimeout
        const timeout = setTimeout(() => {
            // Navigate to the S2 screen
            navigation.navigate('S27');
        }, 2000); // Delay of 3 seconds

        return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
    }, []);
    return (
        <View style={styles.s17Interation}>
            <Image
                style={[styles.s17InterationChild, styles.statusBarLayout]}
                contentFit="cover"
                source={require("../assets/vector-2.png")}
            />
            <View style={[styles.homeIndicator, styles.statusBarPosition]} />
            <Image
                style={styles.s17InterationItem}
                contentFit="cover"
                source={require("../assets/group-4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
                <View style={styles.groupChild} />
                <Text style={[styles.match, styles.homeTypo]}>match</Text>
            </View>
            <Image
                style={[styles.s17InterationInner, styles.rectangleParentLayout]}
                contentFit="cover"
                source={require("../assets/group-500.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    statusBarLayout: {
        width: 428,
        top: 0,
    },
    statusBarPosition: {
        left: "50%",
        position: "absolute",
    },
    rectangleParentLayout: {
        opacity: 0.5,
        width: 326,
        position: "absolute",
    },
    homeTypo: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        // fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        textTransform: "uppercase",
        letterSpacing: 5,
        textAlign: "center",
        lineHeight: 22,
        position: "absolute",
    },
    s17InterationChild: {
        height: 123,
        left: 0,
        position: "absolute",
    },
    time: {
        marginTop: -11,
        top: "50%",
        fontSize: 17,
        fontWeight: "700",
        // fontFamily: FontFamily.cairoBold,
        color: '#f9f9f9',
        textAlign: "center",
        lineHeight: 22,
        width: 54,
        left: 0,
        position: "absolute",
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
        borderColor: "#ededed",
        borderWidth: 1,
        width: 25,
        opacity: 0.35,
        height: 13,
        top: 0,
        position: "absolute",
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
        height: 58,
        width: 428,
        top: 0,
    },
    homeIndicator: {
        marginLeft: -67,
        bottom: 3,
        borderRadius: 100,
        backgroundColor: '#fff',
        width: 134,
        height: 5,
    },
    s17InterationItem: {
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
    groupChild: {
        borderRadius: 26,
        backgroundColor: "#aec48a",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        height: 70,
        width: 326,
        left: 0,
        top: 0,
        position: "absolute",
    },
    match: {
        top: 15,
        left: 76,
        fontSize: 24,
        color: "#f9f9f9",
        width: 162,
        height: 41,
    },
    rectangleParent: {
        top: 687,
        left: 200,
        height: 70,
    },
    s17InterationInner: {
        top: 111,
        height: 540,
        left: 0,
    },
    home: {
        top: 61,
        left: 160,
        fontSize: 20,
        color: '#fff',
        width: 114,
        height: 28,
    },
    s17Interation: {
        backgroundColor: "#292929",
        flex: 1,
        width: "100%",
        height: 926,
        overflow: "hidden",
    },
});

export default S26;
