import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, StatusBar, Text, FlatList, TouchableOpacity, TextInput, Alert, FontFamily, FontSize, Color, Border,
  Padding,
  Image,
  Pressable,
} from 'react-native';
import { Button } from "react-native-paper";
import Screen from "../src/Screen";
import AsyncStorage from '@react-native-async-storage/async-storage';



const S13 = ({ navigation }) => {
  const [progress, setProgress] = useState(0.8); // Initial progress value (0 to 1)
  // const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [sexOrientation, setSexOrientation] = useState(null);
  const [mySexOrientation, setMySexOrientation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('sessionToken');
        if (!token) {
          navigation.navigate('S2');
          return;
        }

        // Fetch sexual orientation data
        try {
          const response1 = await fetch('https://datepa.brandlyup.com/api/v1/me/sexual-orientation', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response1.ok) {
            const data1 = await response1.json();
            // setMySexOrientation(data1.data.preferenceIds);
            // navigation.navigate('s10');
          } else {
            setMySexOrientation([]);
            Alert.alert('Sorry, error fetching data');
          }
        } catch (error) {
          setMySexOrientation([]);
          Alert.alert('Sorry, error fetching data');
          console.error('Error fetching data:', error);
        }

        // Fetch preference sexual orientation data
        try {
          const response2 = await fetch('https://datepa.brandlyup.com/api/v1/preference/sexual-orientation', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response2.ok) {
            const data2 = await response2.json();
            setData(data2.data);
            setSexOrientation(data2.data);
            // navigation.navigate('s10');
          } else {
            setSexOrientation([]);
            Alert.alert('Sorry, error fetching data');
          }
        } catch (error) {
          setSexOrientation([]);
          Alert.alert('Sorry, error fetching data');
          console.error('Error fetching data:', error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEnterPress = async (preferenceId, select) => {
    try {
      const token = await AsyncStorage.getItem('sessionToken');


      const url = 'https://datepa.brandlyup.com/api/v1/me/sexual-orientation';
      const data = {
        preferenceId: preferenceId,
        set: select,
      };
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        // setData(responseData);
      } else {
        Alert.alert('Sorry', 'An error occurred while fetching data.');
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      Alert.alert('Sorry', 'An error occurred while handling the request.');
      console.error('Error:', error);
    }
  };



  // const sexualOrientationData = [
  //   'Straight',
  //   'Gay',
  //   'Lesbian',
  //   'Bisexual',
  //   'Pansexual',
  //   'Queer',
  //   'Bicurious',
  //   'Aromantic',
  // ];

  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItemSelection = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
      handleEnterPress(item._id, false);
    } else {
      if (selectedItems.length < 3) {
        setSelectedItems([...selectedItems, item]);
        handleEnterPress(item._id, true);
      }
    }

  };
  // const isItemSelected = (item) => {
  //   return selectedItems.includes(item); // Check if the item is in the selectedItems array
  // };


  const isItemSelected = (item) => selectedItems.includes(item);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => toggleItemSelection(item)}
      // onPressIn={() => handleEnterPress(item._id, !isItemSelected(item))}
      style={[
        styles.item,
        {
          backgroundColor: isItemSelected(item) ? 'transparent' : '#292929', // Set the background color to black when not selected
        },
      ]}
    >
      <Text style={{ color: isItemSelected(item) ? 'white' : 'grey', fontWeight: isItemSelected(item) ? 'bold' : '300' }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.seekbarView}>
        <View style={styles.whiteFill} />
        <View style={[styles.redFill, { width: `${(progress + 0.1) * 50}%` }]} />
      </View>
      <Text style={[styles.nameText, { marginTop: '15%' }]}>What's your sexual orientation?</Text>
      <FlatList
        // data={sexualOrientationData}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        // keyExtractor={(item, index) => index.toString()}
        style={styles.listContainer}

      />
      {selectedItems.length > 0 && (
        <Pressable
          style={[styles.nextbutton]}
          onPress={() => navigation.navigate('S14')}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require('../assets/arrow3.png')}
          />
        </Pressable>
      )}

      <View style={[styles.inputContainer]}>
        {/* <TextInput
            style={[styles.inputField, { borderBottomColor: 'grey', borderBottomWidth: 1 }]}
          /> */}
        <Text style={[styles.infoText, { marginBottom: '15%', fontFamily: 'Arial', fontWeight: '300' }]}>
          You can pick up to three
        </Text>
        {/* <Button
          style={[styles.nextbutton]}
          // icon="camera"
          mode="contained"
          onPress={() => {
            {
              navigation.navigate('S14');
            }
          }}
        >
          next
        </Button> */}
      </View>

      {/* <View style={styles.s1Item}>
        <Image
          style={[styles.footerLogo]}
          contentFit="contain"
          source={require("../assets/group-4.png")}
        />
      </View> */}


      {/* <View style={styles.footer}>
        <Text style={styles.footerText}>
          <Image
            style={[styles.footerLogo, { marginBottom: "15%", marginRight: "20%" }]}
            contentFit="contain"
            source={require("../assets/group-4.png")}
          />
        </Text>
      </View> */}
      <View style={styles.footer}>
      <Image
        source={require('../assets/group-4.png')}
        style={styles.logoimage}
      />
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    paddingTop: StatusBar.currentHeight || 20,
    paddingLeft: '12%',
    paddingRight: '12%',
    // padding: '12%',
  },
  seekbarView: {
    height: 30,
    width: '108%',
    backgroundColor: 'white',
    borderRadius: 30,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  whiteFill: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: '50%',
  },
  redFill: {
    height: '70%',
    backgroundColor: '#DA4949',
    position: 'absolute',
    left: 5,
    top: 5,
    bottom: 5,
    right: 5,
    borderRadius: 15,
  },
  nameText: {
    color: 'white',
    fontSize: 30,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  listContainer: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputField: {
    height: 40,
    color: 'white',
    paddingHorizontal: 10,
  },
  infoText: {
    color: 'grey',
    fontSize: 16,
    marginTop: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  // footerLogo: {
  //   width: 90,
  //   height: 20,
  //   // backgroundColor: 'blue',
  // },
  // s1Item: {
  //   height: '2%',
  //   top: '95.25%',
  //   right: '50%',
  //   bottom: '2%',
  //   left: '40.89%',
  //   // backgroundColor: 'blue',
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  //   position: 'absolute',
  // },
  footerLogo: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'blue',
  },
  s1Item: {
    height: '1.94%',
    width: '18%',
    top: '95.25%',
    right: '44%',
    bottom: 1,
    left: '40.89%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  icon: {
    width: 35,
    height: 35,
    marginLeft: '90%',
  },
  footer: {
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    // backgroundColor: '#f0f0f0', // Adjust as needed
    height: 60, // Adjust as needed
  },
  logoimage: {
    width: 70, // Adjust as needed
    height: 16, // Adjust as needed
  },
});

export default S13;
