/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Image,
    Pressable,
    SafeAreaView,
    Dimensions,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Screen({ children }) {
    const isDarkMode = useColorScheme() === 'dark';
    const screenHeight = Dimensions.get('window').height;


    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={[backgroundStyle, styles.container]}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={[backgroundStyle, styles.scrollView]}>
                {/* <Header /> */}
                <View
                    style={[{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }, { height: screenHeight, width: '100%', backgroundColor: 'red' }]}>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#292929',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    scrollView: {
        flex: 1,
        width: '100%', // Set width to 100% to take full width
        height: '100%', // Set height to 100% to take full height
    },
});

export default Screen;
