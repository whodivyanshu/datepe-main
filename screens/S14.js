import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
  Image,
  FontFamily, FontSize, Color, Border, Padding
} from "react-native";
import { Button } from "react-native-paper";
// import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import Screen from "../src/Screen";
import AsyncStorage from '@react-native-async-storage/async-storage';



const S14 = ({ navigation }) => {
  const [selectedChip, setSelectedChip] = useState(null);
  const [progress, setProgress] = useState(0.3);
  const [textInputValue, setTextInputValue] = useState("");
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [prefPronouns, setPrefPronouns] = useState(null);
  const [myPrefPronouns, setMyPrefPronouns] = useState(null);
  

  const ProgressBar = ({ progress }) => (
    <View style={styles.seekbarView}>
      <View style={styles.whiteFill} />
      <View style={[styles.redFill, { width: `${(progress + 1) * 50}%` }]} />
    </View>
  );

  const Chip = ({ label, selected, onPress }) => (
    <TouchableOpacity
      style={[styles.chip, selected && styles.selectedChip]}
      onPress={onPress}
    >
      <Text style={[styles.label, selected && styles.selectedLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem('sessionToken');
        if (!token) {
          navigation.navigate('S2');
          return;
        }

        // Fetch pronouns data
        fetch("https://datepa.brandlyup.com/api/v1/me/looking-for", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const preferenceIdsArray = [];
            // data.forEach((item) => {
            //   preferenceIdsArray.push(...item.preferenceIds);
            // });
            // setMyPrefPronouns(preferenceIdsArray);
          })
          .catch((error) => {
            Alert.alert("Sorry, ");
            setMyPrefPronouns([]);
            console.error("Error fetching data:", error);
          });

        // Fetch looking-for data
        fetch("https://datepa.brandlyup.com/api/v1/preference/looking-for", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const filteredData = data.data.filter(item => item.name !== null);
            setData(filteredData);
            // setData(data);
            // setPrefPronouns(data.data);
            // navigation.navigate('s10');
          })
          .catch((error) => {
            setPrefPronouns([]);
            Alert.alert("Sorry, ");
            console.error("Error fetching data:", error);
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  const handleEnterPress = async (preferenceId, select) => {
    try {
      const token = await AsyncStorage.getItem('sessionToken');

      const url = "https://datepa.brandlyup.com/api/v1/me/looking-for";
      const data = {
        preferenceId: preferenceId,
        set: select,
      };
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        // setData(responseData);
      } else {
        Alert.alert("Sorry", "An error occurred while fetching data.");
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      Alert.alert("Sorry", "An error occurred while handling the request.");
      console.error("Error:", error);
    }
  };

  const handleChipPress = (chip) => {
    const newSelectedChip = chip.name === selectedChip ? null : chip.name;
    setSelectedChip(newSelectedChip);
    setTextInputValue("");

    handleEnterPress(chip._id, newSelectedChip !== null);
  };

  // const handleEnterPress = async () => {
  //   const t =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo";
  //   setToken(t);

  //   const payload = {
  //     name: textInputValue || selectedChip
  //   };

  //   fetch("https://datepa.brandlyup.com/api/v1/register/user-data", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${t}`,
  //     },
  //     body: JSON.stringify(payload)
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       Alert.alert(data?.message);
  //       navigation.navigate("S10");
  //     })
  //     .catch((error) => {
  //       Alert.alert("Sorry, something went wrong");
  //       console.error("Error fetching data:", error);
  //     });
  // };

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Text style={[styles.heading, { marginTop: "15%" }]}>
            What are you
          </Text>
          <Text style={styles.heading}>looking for?</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.input}
          onChangeText={(text) => setTextInputValue(text)}
          value={textInputValue || selectedChip}
          placeholderTextColor="white"
          editable={false}
          />
          {/* {selectedChip.length > 0 && ( */}
          <Pressable onPress={() => navigation.navigate('S15')}>
            <Image
              style={styles.arrowIcon}
              source={require('../assets/arrow3.png')}
              resizeMode="contain"
            />
          </Pressable>
          {/* )} */}
        </View>

        {/* <TextInput
          style={styles.textInput}
          onChangeText={(text) => setTextInputValue(text)}
          value={textInputValue || selectedChip}
          placeholderTextColor="white"
          editable={false}
        /> */}

        <Text
          style={[
            styles.helperText,
            { marginBottom: "15%", marginRight: "20%" },
          ]}
        >
          There are no rules, find your own community
        </Text>

        <View
          style={styles.chipGroup}
          onPress={() => {
            {
              navigation.navigate("S15");
            }
          }}
        >
          {data &&
            data.map((chip) => (
              <Chip
                key={chip._id}
                label={chip.name}
                // selected={setMyPrefPronouns.includes(chip.name)}
                // selected={myPrefPronouns && myPrefPronouns.includes(chip._id)}
                selected={selectedChip === chip.name}
                onPress={() => handleChipPress(chip)}
              />
            ))}
          {/* {data.map((chip) => (
            <Chip
              key={chip.id}
              label={chip.name}
              selected={selectedChip === chip.name}
              onPress={() => handleChipPress(chip.id)}
            />
          ))} */}
        </View>
        {/* <Button
          style={[styles.nextbutton]}
          //icon="camera"
          mode="contained"
          onPress={() => {
            {
              navigation.navigate("S15");
            }
          }}
        >
          next
        </Button> */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>DatePe</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    justifyContent: "center",
    padding: "12%",
  },
  mainContainer: {
    flex: 1,
  },
  seekbarView: {
    height: 30,
    width: "108%",
    backgroundColor: "white",
    borderRadius: 30,
    overflow: "hidden",
    alignSelf: "center",
  },
  whiteFill: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: "50%",
  },
  redFill: {
    height: "70%",
    backgroundColor: "#F54848",
    position: "absolute",
    left: 5,
    top: 5,
    bottom: 5,
    right: 5,
    borderRadius: 15,
  },
  chipGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  chip: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  selectedChip: {
    backgroundColor: "#487167",
    borderWidth: 0,
  },
  label: {
    color: "white",
  },
  selectedLabel: {
    color: "white",
  },
  helperText: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 15,
    textAlign: "left",
    marginLeft: 8,
    paddingTop: "5%",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    marginBottom: 20,
  },
  footerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  headingContainer: {
    alignItems: "flex-start",
    marginBottom: "10%",
  },
  heading: {
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "left",
  },
  textInput: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 8,
    marginBottom: 16,
    color: "white",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#F5C348',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 5,
    fontSize: 20,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: 'white',
  },
  arrowIcon: {
    width: 35,
    height: 35,
    marginLeft: 5,
  },
});

export default S14;
