import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, Pressable, View, TextInput, TouchableOpacity } from 'react-native';
import Footer from './Footer';

const S31 = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('S28')
        }, 2000)
    })
    const handlePress = () => {
        navigation.navigate('S28'); // Navigate to the screen named 'S28'
    };

    return (
        <TouchableOpacity style={styles.container}
            onPress={handlePress}
        >
            <View style={styles.mid} >
                <Text>{`You are no longer\nconnected`}</Text>

                <View style={styles.tick} >
                    <Image style={styles.tickk} source={require("../assets/tick.png")} />
                </View>
            </View>
            <Footer />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // tick: {
    //   borderRadius: "50%",
    //   backgroundColor: "yellow",
    // },
    mid: {
        // width: "40%",
        // textAlign: "center",
        marginHorizontal: "25%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        padding: 10,
        // justifyContent: "center",
        backgroundColor: "grey",
        width: "60%",
    },
    container: {
        backgroundColor: "#E95151",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        height: "100%",
    },
})

export default S31