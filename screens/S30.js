import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, Switch, Pressable, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const S30 = ({ navigation }) => {

    const [userData, setUserData] = useState(null);
    const [username, setUsername] = useState('');
    const [dob, setDOB] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [notification, setNotification] = useState(false);

    const toggleNotification = () => {
        setNotification((previousState) => !previousState);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('sessionToken');

                if (!token) {
                    navigation.navigate('S2');
                    return;
                }
                const response = await fetch('https://datepa.brandlyup.com/api/v1/register/user-data', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                    setUsername(data.name);
                    setDOB(data.dob);
                    setEmail(data.email);
                    setMobileNo(data.mobileNo);
                    console.log("res_user", data);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.nav}>
                    <Pressable onPress={() => navigation.navigate("S28")}>
                        <Image style={styles.menu} source={require("../assets/back.png")} />
                    </Pressable>
                    <Text style={styles.home}>SETTINGS</Text>
                    {/* <Image style={styles.chat} /> */}
                </View>
            </View>

            <View style={styles.settings} >
                <Image style={styles.pphoto} source={require("../assets/profilephoto.png")} />
                <View style={styles.sinside}>
                    <Text style={styles.name}>{username}</Text>
                    <Text style={styles.age}>Age : {dob && Math.floor((new Date() - new Date(dob)) / 31557600000)}</Text>
                </View>
            </View>

            <Text style={styles.account}>ACCOUNT SETTINGS</Text>
            <View style={styles.ainner} >
                <View style={styles.amenu} >
                    <Text style={styles.number}>Phone Number</Text>
                    <Text style={styles.no}>+91-{mobileNo}</Text>
                </View>
                <View style={styles.amenu} >
                    <Text style={styles.number}>Privacy</Text>
                </View>
                <View style={styles.amenu} >
                    <Text style={styles.number}>Email</Text>
                    <Text style={styles.no}>{email}</Text>
                </View>
                <View style={styles.amenu} >
                    <Text style={styles.number}>Notifications</Text>
                    {/* <Text style={styles.number}>Notifications</Text> */}
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={notification ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleNotification}
                        value={notification}
                    />
                </View>
            </View>
            <Text style={styles.account}>CONTACT US</Text>

            <Pressable onPress={() => navigation.navigate("S35")}>

                <View style={styles.ainner} >
                    <View style={styles.amenu} >
                        <Text style={styles.number} >Chat</Text>
                    </View>
                </View>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    number: {
        fontSize: 14,
        fontWeight: '500',
        color: "#F9F9F9",
    },
    no: {
        color: "#F9F9F9",
    },
    ainner: {
        backgroundColor: "#aaaaaa20",
        borderRadius: 20,
        padding: 20,
    },
    account: {
        fontSize: 22,
        color: "white",
        paddingVertical: 10,
    },
    amenu: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
    },

    settings: {

        flexDirection: 'row',
        backgroundColor: "#E95151",
        marginBottom: 20,
        // marginHorizontal: "6%",
        padding: 15,
        borderRadius: 30,
    },
    sinside: {
        // width : "100%",
        // height: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    pphoto: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    name: {
        color: "white",
        fontSize: 22,
    },
    age: {
        color: "white",
        fontSize: 15,
    },
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#292929",
        padding: "6%",
    },
    nav: {
        flexDirection: "row",
        // backgroundColor: "yellow",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
        padding: 20,
    },
    top: {
        height: "20%"
    },
    menu: {
        width: 30,
        height: 30,
    },
    home: {
        color: "white",
        fontSize: 22,
    }
});

export default S30;
