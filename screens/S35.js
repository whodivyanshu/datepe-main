import React, { useState } from 'react';
import { Image, StyleSheet, Switch, Text, Pressable, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const S35 = ({ navigation }) => {
  const [readReceipt, setReadReceipt] = useState(false);
  const [activityStatus, setActivityStatus] = useState(false);

  const toggleReadReceipt = () => {
    setReadReceipt((previousState) => !previousState);
  };

  const toggleActivityStatus = () => {
    setActivityStatus((previousState) => !previousState);
  };


  return (
    <View style={styles.container} >
      <View style={styles.top}>
        <View style={styles.nav}>
          <Pressable onPress={() => navigation.navigate("S30")}>
            <Image style={styles.menu} source={require("../assets/back.png")} />
          </Pressable>
          <Text style={styles.home}>SETTINGS</Text>
          <Image style={styles.chat} />
        </View>
      </View>

      <Pressable onPress={() => navigation.navigate("S30")}>
        <Text style={styles.done} >DONE</Text>
      </Pressable>
      <View style={styles.menuu} >
        <View style={styles.toogle}>
          <Text style={styles.txt} >Control who Message you</Text>
        </View>
        <View style={styles.toogle}>
          <Text style={styles.txt}>Read receipt</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={readReceipt ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleReadReceipt}
            value={readReceipt}
          />
        </View>
        <View style={styles.toogle}>
          <Text style={styles.txt}>Activity Status</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={activityStatus ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleActivityStatus}
            value={activityStatus}
          />
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    marginVertical: 5,
    marginHorizontal: 20,
    color: "white",
  },

  done: {
    justifyContent: "end",
    color: "red",
    alignItems: "flex-end",
    textAlign: 'right',
    padding: 25
  },

  menuu: {
    backgroundColor: "#aaaaaa20",
    width: "90%",
    paddingTop: 27,
    height: "20%",
    // opacity: "0.84",
    marginHorizontal: "5%",
    borderRadius: 20,
  },

  toogle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#292929"
  },
  nav: {
    flexDirection: "row",
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
})

export default S35