import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, Pressable, View, ScrollView } from 'react-native';

const S36 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require("../assets/datepe-images/itsa-match-curve.png")}
            />
            <View style={styles.inside}>
                <Image
                    style={styles.inimage}
                    source={require("../assets/match.png")}
                />
                <ScrollView style={styles.photos} horizontal={true}>
                    <View style={[styles.ph, styles.rotatePh1]}>
                        <Image
                            style={styles.phimage}
                            source={require("../assets/proimg.png")}
                        />
                        <Image source={require("../assets/love.png")} />

                    </View>
                    <View style={[styles.ph1, styles.rotatePh]}>
                        <Image
                            style={styles.phimage}
                            source={require("../assets/proimg.png")}
                        />
                        <Image style={styles.love} source={require("../assets/love2.png")} />

                    </View>
                </ScrollView>
            </View>
            <Image style={styles.love2} source={require("../assets/love.png")} />
            <Image style={styles.line} source={require("../assets/line.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        position: "absolute",
        bottom: 190,
    },
    love2: {
        position: "absolute",
        bottom: 200,
    },
    love: {
        marginLeft: 90,
    },
    phimage: {
        borderRadius: 20,
    },
    photos: {
        flexDirection: "row",
    },
    ph: {
        height: 260,
        backgroundColor: "#F5C348",
        paddingHorizontal: 15,
        paddingTop: 15,
        borderRadius: 30,
        marginRight: 10, // Add margin between photos
    },
    ph1: {
        height: 260,
        backgroundColor: "#9797CB",
        paddingHorizontal: 15,
        paddingTop: 15,
        borderRadius: 30,
        marginRight: 10, // Add margin between photos
    },
    inimage: {
        width: "100%",
        height: 100,
        marginTop: 150,
        marginBottom: 50,
    },
    inside: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#292929",
    },
    img: {
        width: "100%",
        position: "absolute",
        height: "70%",
    },
    rotatePh: {
        transform: [{ rotate: '8.56deg' }],
        marginTop: 50,
    },
    rotatePh1: {
        transform: [{ rotate: '-8.56deg' }],
        // marginTop: 100,
    },
});

export default S36;
