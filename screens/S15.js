import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  Alert,
  Button,
  Platform,
  TouchableOpacity
} from "react-native";
import { Chip } from "react-native-paper";
// import ImagePicker from 'react-native-image-picker';
import Screen from "../src/Screen";
import Footer from './Footer';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';


const API_URL = 'https://datepa.brandlyup.com/api/v1/me/photos';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo';


const S15 = ({ navigation }) => {
  // const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [myPhoto1, setMyPhoto1] = useState(null);
  const [myPhoto2, setMyPhoto2] = useState(null);
  const [myPhoto3, setMyPhoto3] = useState(null);
  const [myPhoto4, setMyPhoto4] = useState(null);
  const [myPhoto5, setMyPhoto5] = useState(null);
  const [imageUri, setImageUri] = useState(null);


  const [selectedImage, setSelectedImage] = useState(null);
  const [thumbnailStates, setThumbnailStates] = useState(
    new Array(4).fill(null) // Assuming you want 4 thumbnails
  );
  const [isLoading, setLoading] = useState(false);



  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const token = await AsyncStorage.getItem('sessionToken');
  //       if (!token) {
  //         navigation.navigate('S2');
  //         return;
  //       }

  //       const response = await fetch("https://datepa.brandlyup.com/api/v1/me/photos", {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       const responseData = await response.text();
  //       // console.log("getRes",responseData);
  //       setData(responseData);
  //       if (responseData.data?.photo1) {
  //         setMyPhoto1(responseData.data.photo1);
  //       }
  //       if (responseData.data?.photo2) {
  //         setMyPhoto2(responseData.data.photo2);
  //       }
  //       if (responseData.data?.photo3) {
  //         setMyPhoto3(responseData.data.photo3);
  //       }
  //       if (responseData.data?.photo4) {
  //         setMyPhoto4(responseData.data.photo4);
  //       }
  //       // navigation.navigate('s10');
  //     } catch (error) {
  //       console.error('Error uploading images:', error);
  //     }
  //   })();
  // }, []);

  const handleEnterPress = async (preferenceId, select) => {
    // Similar fetch logic for handleEnterPress
  };


  // const pickImage = async (setImage) => {
  //   console.log("dfdfdfsdf");
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
  //       quality: 1,
  //       multiple: true
  //     });

  //     if (!result.canceled) {
  //       setImage(result.assets[0]);
  //       setMyPhoto5(result.assets[0]);
  //     }
  //   } catch (error) {
  //     console.error("Error picking image:", error);
  //   }
  // };

  // const handleUploadImage = async (selectedImage, setImage) => {
  const handleUploadImages = async () => {
    // setLoading(true);
    // const imageArray = [myPhoto1, myPhoto2, myPhoto3, myPhoto4, myPhoto5].filter(image => image);
    const imageArray = thumbnailStates.filter(image => image);
    // imageArray.push(imageArray[1]);


    try {
      const token = await AsyncStorage.getItem('sessionToken');
        if (!token) {
          navigation.navigate('S2');
          return;
        }

      const apiUrl = 'https://datepa.brandlyup.com/api/v1/me/photos';

      if (imageArray.length !== 4) {
        // setLoading(false);
        Alert.alert('Error', 'Please select exactly four images');
        return; // Exit the function if not exactly five images are selected
      }
      else{
        navigation.navigate('S16');
      }

      // const formData = new FormData();
      // for (const image of imageArray) {
      //   formData.append('images', {
      //     uri: image.uri,
      //     type: 'image/jpeg',
      //     name: 'image.jpg',
      //   });
      // }


      // const response = await fetch(apiUrl, {
      //   method: 'POST',
      //   headers: {
      //     accept: '*/*',
      //     Authorization: `Bearer ${token}`,
      //     'Content-Type': 'multipart/form-data',
      //   },
      //   body: formData,
      // });

      // const responseData = await response.json();
      // if (response.ok) {
      //   setLoading(false);
      //   Alert.alert('Images uploaded successfully', '', [
      //     {
      //       text: 'OK',
      //       onPress: () => navigation.navigate('S16'), // Navigate on OK press
      //     },
      //   ]);
      // }
      // else {
      //   setLoading(false);
      //   console.error('Images upload failed:', responseData);
      // }
    } 
    catch (error) {
      setLoading(false);
      // Alert.alert('please');
      console.error('Error uploading images:', error);

    }
  };

  const openCamera = thumbnailIndex => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      // launchCamera(options, response => {
      if (response.didCancel) {
        // console.log('User canceled');
      } else if (response.error) {
        // console.log('Error:', response.error);
      } else if (response.customButton) {
        // console.log('Custom button tapped');
      } else {
        const source = { uri: 'data:image/jpeg;base64,' + response.assets[0].base64 };
        const updatedThumbnailStates = [...thumbnailStates];
        updatedThumbnailStates[thumbnailIndex] = source;
        setThumbnailStates(updatedThumbnailStates);
      }
    });
  };

  const openGallery = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        // console.log("user  canceled");
      }
      else if (response.error) {
        // console.log("user  error");
      }
      else if (response.customButton) {
        // console.log("user  canceled");
      }
      else {
        const source = { uri: 'data:image/jpeg;base64,' + response.base64 }
        setImageUri(source);
        // console.log("  base6444");
      }
    })
  };

  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <View style={styles.outer}>
          <View style={[styles.inner, { width: '70%' }]}></View>
        </View>
      </View>
      <View style={styles.contain}>
        <Text style={styles.title}>{`Say cheese...`}</Text>
        <View style={styles.inputContainer}>
          {thumbnailStates.map((thumbnailUri, index) => (
            <TouchableOpacity key={index} onPress={() => openCamera(index)}>
              <Image
                source={thumbnailUri}
                style={styles.photo}
              />
              <View style={styles.plusContainer}>
                <Text style={styles.plus}>+</Text>
              </View>
            </TouchableOpacity>
          ))}
          {/* <TouchableOpacity
            onPress={openCamera}
          >
            <Image
              source={imageUri}
              style={styles.photo}
            />
            <View style={styles.plusContainer}>
                <Text style={styles.plus}>+</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openCamera}
          >
            <Image
              source={imageUri}
              style={styles.photo}
            />
            <View style={styles.plusContainer}>
                <Text style={styles.plus}>+</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openCamera}
          >
            <Image
              source={imageUri}
              style={styles.photo}
            />
            <View style={styles.plusContainer}>
                <Text style={styles.plus}>+</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openCamera}
          >
            <Image
              source={imageUri}
              style={styles.photo}
            />
            <View style={styles.plusContainer}>
                <Text style={styles.plus}>+</Text>
              </View>
          </TouchableOpacity> */}

          {/* <View style={styles.photo}>
            <View style={styles.plusContainer}>
              <Text style={styles.plus}>+</Text>
            </View>
          </View>

          <View style={styles.photo}>
            <View style={styles.plusContainer}>
              <Text style={styles.plus}>+</Text>
            </View>
          </View>

          <View style={styles.photo}>
            <View style={styles.plusContainer}>
              <Text style={styles.plus}>+</Text>
            </View>
          </View> */}
        </View>
        <View>
          <Text style={styles.text1}>
            Show us how authentic you are
            <Pressable
              // onPress={() => navigation.navigate('S16')}
              onPress={handleUploadImages}
            >
              <Image
                style={styles.arrowIcon}
                source={require('../assets/arrow3.png')}
                resizeMode="contain"
              />
              <Spinner
            visible={isLoading}
            textStyle={styles.spinnerText}
          />
            </Pressable>
          </Text>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  arrowIcon: {
    width: 35,
    height: 35,
    marginLeft: 50,
    // paddingTop: 10,
  },
  plusContainer: {
    position: 'absolute',
    bottom: -4,
    // paddingHorizontal: 5,
    right: 10,
    backgroundColor: '#DA4949',
    borderRadius: 5,
    padding: 5,
  },
  plus: {
    color: 'white',
    paddingHorizontal: 5,
    fontSize: 14,
  },
  photo: {
    width: 125,
    height: 125,
    margin: 10,
    borderRadius: 10,
    position: 'relative',
    backgroundColor: 'grey',
  },
  container: {
    backgroundColor: '#292929',
    width: '100%',
    height: '100%',
  },
  outer: {
    width: '90%',
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  inner: {
    backgroundColor: '#DA4949',
    borderRadius: 20,
    paddingVertical: 10,
  },
  progress: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contain: {
    padding: 20,
  },
  text1: {
    marginTop: 15,
    fontSize: 16,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
    fontWeight: '100',
  },
  title: {
    fontSize: 36,
    fontWeight: '500',
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    // borderBottomColor: '#F5C348',
    justifyContent: 'center',
    // borderBottomWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    fontSize: 20,
  },
});

export default S15;
