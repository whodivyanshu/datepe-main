import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, Pressable, View } from 'react-native';
import { useFonts } from 'expo-font';


const Details = ({ handleclose }) => {

    const [name, setName] = useState(null);
    const [dob, setDOB] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [photo1, setPhoto1] = useState(null);
    const [photo2, setPhoto2] = useState(null);
    const [photo3, setPhoto3] = useState(null);
    const [photo4, setPhoto4] = useState(null);


    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://datepa.brandlyup.com/api/v1/register/profile/9999999999', {
                    method: 'GET',
                    headers: {
                        Accept: '*/*',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE8Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const baseUrl = "https://datepa.brandlyup.com/api/v1/me/images/";
                const data = await response.json();
                console.log(data.data.photo1,"images");
                const photo1Name1 = data.data.photo1.split('/').pop();
                const photo1Name2 = data.data.photo2.split('/').pop();
                const photo1Name3 = data.data.photo3.split('/').pop();
                const photo1Name4 = data.data.photo4.split('/').pop();
                console.log("dddddd",baseUrl + photo1Name1);
                // https://datepa.brandlyup.com/api/v1/me/images/1693629910429-930768002.jpg

                if (data) {
                    setPhoto1(baseUrl + photo1Name1);
                    setPhoto2(baseUrl + photo1Name2);
                    setPhoto3(baseUrl + photo1Name3);
                    setPhoto4(baseUrl + photo1Name4);
                  } else {
                    console.error("Response data is empty or does not contain photos");
                  }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(
    //                 'https://datepa.brandlyup.com/api/v1/match/nearby-match',
    //                 {
    //                     headers: {
    //                         accept: '*/*',
    //                         Authorization:
    //                             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo',
    //                     },
    //                 }
    //             );
    //             const { message, data } = await response.json();
    //             // console.log('res', data[0]._id);
    //             // Alert.alert(message);
    //             setName(data[0].name);
    //             setDOB(data[0].dob);
    //             // setUserId(data[0]._id);
    //             // setPhoto(data[0].photo);
    //             // setData(json.data[0]);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);


    return (
        <View style={styles.container}>
            <View style={styles.close} >
                <Pressable onPress={handleclose}>
                    <Image source={require("../assets/close1.png")} />
                </Pressable>
            </View>
            <View style={styles.image} >
                <Image style={styles.images} source={{ uri: photo1 }} />
                <Image style={styles.images} source={{ uri: photo2 }} />
                <Image style={styles.images} source={{ uri: photo3 }} />
                <Image style={styles.images} source={{ uri: photo4 }} />
                {/* <Image style={styles.images} source={require("../assets/rectangle.png")} />
                <Image style={styles.images} source={require("../assets/image-3.png")} />
                <Image style={styles.images} source={require("../assets/image-4.png")} />
                <Image style={styles.images} source={require("../assets/image-1.png")} /> */}

            </View>
            <View style={styles.btm}>
                <Text style={styles.name}>
                    {/* {name},{' '}
                    {dob && Math.floor((new Date() - new Date(dob)) / 31557600000)} */}

                    test,15
                </Text>
                {/* <Text style={styles.txt}>{photo1}</Text> */}
                <Text style={styles.also}>She also likes</Text>
                <View style={styles.likes} >
                    <Text style={styles.like}>Artist</Text>
                    <Text style={styles.like1}>Anime</Text>
                    <Text style={styles.like2}>Design</Text>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    like: {
        padding: 5,
        backgroundColor: "yellow",
        margin: 5,
        borderRadius: 10,
    },
    like1: {
        padding: 5,
        backgroundColor: "#9797CB",
        margin: 5,
        borderRadius: 10,
    },
    like2: {
        padding: 5,
        backgroundColor: "#F54848",
        margin: 5,
        borderRadius: 10,
    },
    likes: {
        color: "white",
        flexDirection: 'row',
    },
    also: {
        paddingTop: 20,
        fontSize: 16,
        fontWeight: '500',
        color: "white",
    },
    txt: {
        color: "white",
        fontStyle: "italic",
        marginTop: 15
    },
    btm: {
        paddingHorizontal: 20,
    },
    name: {
        fontSize: 21,
        // paddingHorizontal: 20,
        fontWeight: '500',
        color: "white",
    },
    close: {
        alignSelf: "flex-end",
        paddingTop: 15,
        paddingRight: 20,

    },
    images: {
        height: "45%",
        margin: "2%",
        borderRadius: 20,
        width: "45%",
    },
    container: {
        position: "absolute",
        width: "90%",
        margin: "5%",
        borderRadius: 25,
        height: "85%",
        backgroundColor: "#292929",
        opacity: 0.97,
        zIndex: 5,
    },
    image: {
        width: "90%",
        flexDirection: 'row',
        flexWrap: "wrap",
        height: "60%",
        marginHorizontal: "5%",
        marginVertical: "5%",
        borderRadius: 20,
    },

})
export default Details