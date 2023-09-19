import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FontFamily, FontSize, Color, Border, Image } from "react-native";

const S27 = ({ navigation }) => {
    useEffect(() => {
        // Simulate a delay using setTimeout
        const timeout = setTimeout(() => {
            // Navigate to the S2 screen
            navigation.navigate('S28');
        }, 2000); // Delay of 3 seconds

        return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
    }, []);
    return (
        <View style={styles.s17Interaction}>
            <Image
                style={[styles.s17InteractionChild, styles.statusBarPosition]}
                contentFit="cover"
                source={require("../assets/vector-2.png")}
            />
            <View style={styles.homeIndicator} />
            <Image
                style={styles.s17InteractionItem}
                contentFit="cover"
                source={require("../assets/group-4.png")}
            />
            <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
                <View style={styles.groupChild} />
                <Text style={[styles.match, styles.homeTypo]}>match</Text>
            </View>
            <View style={[styles.menuVerticalParent, styles.homePosition]}>
                <Image
                    style={styles.menuVerticalIcon}
                    contentFit="cover"
                    source={require("../assets/menu-vertical.png")}
                />
                <Image
                    style={styles.messageIcon}
                    contentFit="cover"
                    source={require("../assets/message.png")}
                />
            </View>
            <Image
                style={[styles.s17InteractionInner, styles.rectangleParentLayout]}
                contentFit="cover"
                source={require("../assets/group-500.png")}
            />
            <Text style={[styles.home, styles.homePosition]}>Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    statusBarPosition: {
        width: 428,
        top: 0,
        position: "absolute",
    },
    rectangleParentLayout: {
        opacity: 0.7,
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
    },
    homePosition: {
        top: 61,
        position: "absolute",
    },
    s17InteractionChild: {
        height: 155,
        left: 0,
        width: 428,
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
        borderRadius: 3,
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
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        height: 9,
        width: 21,
        position: "absolute",
    },
    battery: {
        top: 23,
        right: 33,
        height: 13,
        width: 27,
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
    s17InteractionItem: {
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
        position: "absolute",
    },
    rectangleParent: {
        top: 689,
        left: 77,
        height: 70,
    },
    menuVerticalIcon: {
        width: 26,
        height: 26,
    },
    messageIcon: {
        height: 27,
        marginLeft: 310,
        width: 27,
    },
    menuVerticalParent: {
        marginLeft: -181,
        flexDirection: "row",
        left: "50%",
    },
    s17InteractionInner: {
        top: 131,
        left: 2,
        height: 540,
    },
    home: {
        left: 160,
        fontSize: 20,
        color: '#fff',
        width: 114,
        height: 28,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        // fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        textTransform: "uppercase",
        letterSpacing: 5,
        textAlign: "center",
        lineHeight: 22,
    },
    s17Interaction: {
        backgroundColor: "#292929",
        flex: 1,
        width: "100%",
        height: 926,
        overflow: "hidden",
    },
});

export default S27;
