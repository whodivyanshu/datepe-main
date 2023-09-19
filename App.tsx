// Example: Switch from One Screen to another using React Navigation //
// https://aboutreact.com/react-native-stack-navigation //
import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { Button, View, Text, BackHandler } from 'react-native';

import messaging from '@react-native-firebase/messaging';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert } from 'react-native';

import S1 from './screens/S1';
import S2 from './screens/S2';
import S3 from './screens/S3';
import S4 from './screens/S4';
import S5 from './screens/S5';
import S6 from './screens/S6';
import S7 from './screens/S7';
import S8 from './screens/S8';
import S9 from './screens/S9';
import S10 from './screens/S10';
import S11 from './screens/S11';
import S12 from './screens/S12';
import S13 from './screens/S13';
import S14 from './screens/S14';
import S15 from './screens/S15';
import S16 from './screens/S16';
import S17 from './screens/S17';
import S18 from './screens/S18';
import S19 from './screens/S19';
import S20 from './screens/S20';
import S21 from './screens/S21';
import S22 from './screens/S22';
import S23 from './screens/S23';
import S24 from './screens/S24';
import S25 from './screens/S25';
import S26 from './screens/S26';
import S27 from './screens/S27';
import S28 from './screens/S28';
import S28message from './screens/S28message';
import S29 from './screens/S29';
import S30 from './screens/S30';
import S31 from './screens/S31';
import S32 from './screens/S32';
import S33 from './screens/S33';
import S34 from './screens/S34';
import S35 from './screens/S35';
// import S36 from './screens/S36';
import S37 from './screens/S37';

// import S33 from './screens/S33';


import S52 from './screens/S52';
// import S33 from './screens/S34';
// import S35 from './screens/S35';
import S55 from './screens/S55';

import Details from './screens/Details';


const Stack = createStackNavigator();

function App() {


  useEffect(() => {
    getDeviceToken();

  }, []);
  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    console.log(token);

  };

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });


  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="S1" screenOptions={{ animationEnabled: false }}>
        <Stack.Screen
          name="S1"
          component={S1}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S1', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S2"
          component={S2}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S2', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S3"
          component={S3}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S3', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S4"
          component={S4}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S4', //Set Header Title
            headerStyle: {
              backgroundColor: '#f1b7b7', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S5"
          component={S5}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S5', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S6"
          component={S6}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S6', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S7"
          component={S7}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S7', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S8"
          component={S8}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S8', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S9"
          component={S9}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S9', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S10"
          component={S10}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S10', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S11"
          component={S11}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S11', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S12"
          component={S12}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S12', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S13"
          component={S13}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S13', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S14"
          component={S14}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S14', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S15"
          component={S15}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S15', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S16"
          component={S16}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S16', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S17"
          component={S17}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S17', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S18"
          component={S18}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S18', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S19"
          component={S19}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S19', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S20"
          component={S20}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S20', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S21"
          component={S21}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S21', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S22"
          component={S22}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S22', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S23"
          component={S23}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S23', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S24"
          component={S24}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S24', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S25"
          component={S25}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S25', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S26"
          component={S26}
          options={{
            headerShown: true,
            title: 'S26', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S27"
          component={S27}
          options={{
            headerShown: true,
            title: 'S27', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S28"
          component={S28}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S28', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S28message"
          component={S28message}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S28message', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S29"
          component={S29}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S29', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S30"
          component={S30}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S30', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S31"
          component={S31}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S31', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S32"
          component={S32}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S32', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S33"
          component={S33}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S33', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S34"
          component={S34}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S34', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S35"
          component={S35}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S35', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        {/* <Stack.Screen
          name="S36"
          component={S36}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S36', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        /> */}
        <Stack.Screen
          name="S37"
          component={S37}
          options={{
            headerShown: false,
            animationEnabled: false,
            title: 'S37', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S52"
          component={S52}
          options={{
            headerShown: true,
            title: 'S52', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="S55"
          component={S55}
          options={{
            headerShown: true,
            title: 'S55', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator >
    </NavigationContainer>
  );
}

export default App;


