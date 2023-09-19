import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Pressable, Image } from "react-native";
import { Button } from "react-native-paper";
import Screen from "../src/Screen";
import AsyncStorage from '@react-native-async-storage/async-storage';



const S11 = ({ navigation }) => {
  const [selectedChips, setSelectedChips] = useState([]);
  const [progress, setProgress] = useState(0.5);
  const [selectedChoicesText, setSelectedChoicesText] = useState("");
  // const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [prefPronouns, setPrefPronouns] = useState(null);
  const [myPrefPronouns, setMyPrefPronouns] = useState(null);

  const [chipData, setChipData] = useState([]);

  const ProgressBar = ({ navigation }) => (
    <View style={styles.seekbarView}>
      <View style={styles.whiteFill} />
      <View style={[styles.redFill, { width: `${(progress + 0.2) * 50}%` }]} />
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

  // const handleChipPress = (chip) => {
  //   setSelectedChips([chip]); // Allow only one chip to be selected at a time
  // };
  const handleChipPress = (chipId) => {
    if (selectedChips.includes(chipId)) {
      setSelectedChips(selectedChips.filter(id => id !== chipId));
    } else {
      setSelectedChips([...selectedChips, chipId]);
    }
    handleEnterPress(chipId)
  };


  // const saveDataAndNavigate = async () => {
  //   const t = await getAsyncStorageData(ACCESS_TOKEN);
  //   setToken(t);
  //   const apiUrl = 'https://datepa.brandlyup.com/api/v1/preference/pronouns';

  //   const requestData = {
  //     name: selectedChips.join(','),
  //   };

  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Authorization': `Bearer ${t}`,
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(requestData),
  //     });

  //     if (response.ok) {
  //       navigation.navigate('S12');
  //     } else {
  //       console.error('Error saving data:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //   }
  // };

  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem('sessionToken');
        // if (!token) {
        //   navigation.navigate('S2');
        //   return;
        // }

        // await fetchMeData();
        await fetchPreferenceData();
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    })();
  }, []);

  const fetchMeData = async () => {
    try {
      const token = await AsyncStorage.getItem('sessionToken');
      const response1 = await fetch("https://datepa.brandlyup.com/api/v1/me/pronouns", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response1.ok) {
        const data1 = await response1.json();
        setData(data1);

        const selectedIds = data1.map(item => item.preferenceId);
        setSelectedChips(selectedIds);
      } else {
        Alert.alert("Sorry");
        setData([]);
        console.error("Error fetching data:", response1.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchPreferenceData = async () => {
    try {
      const token = await AsyncStorage.getItem('sessionToken');
      const t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo';
      const response2 = await fetch("https://datepa.brandlyup.com/api/v1/preference/pronouns", {
        headers: {
          Authorization: `Bearer ${t}`,
        },
      });

      if (response2.ok) {
        const data2 = await response2.json();
        console.log("SSS",data2.data);
        setChipData(data2.data);
      } else {
        Alert.alert("Sorry");
        setChipData([]);
        console.error("Error fetching data:", response2.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo';
  //       setToken(t);

  //       const headers = {
  //         Authorization: `Bearer ${t}`,
  //       };

  //       // First fetch
  //       const response1 = await fetch("https://datepa.brandlyup.com/api/v1/me/pronouns", { headers });
  //       if (response1.ok) {
  //         const data1 = await response1.json();
  //         setData(data1);
  //         // setMyPrefPronouns(data1.data.preferenceIds);
  //       } else {
  //         Alert.alert("Sorry");
  //         setMyPrefPronouns([]);
  //         console.error("Error fetching data:", response1.statusText);
  //       }


  //       const getAsyncStorageData = async (key) => {
  //         try {
  //           const value = await AsyncStorag.getItem(key);
  //           if (value !== null) {
  //             return value;
  //           }
  //         } catch (error) {
  //           console.error("Error getting async storage data:", error);
  //         }
  //         return null;
  //       };
  //       // Second fetch
  //       const response2 = await fetch("https://datepa.brandlyup.com/api/v1/preference/pronouns", { headers });
  //       if (response2.ok) {
  //         const data2 = await response2.json();
  //         setChipData(data2);
  //         // setData(data2);
  //         // setPrefPronouns(data2);
  //       } else {
  //         setPrefPronouns([]);
  //         Alert.alert("Sorry");
  //         console.error("Error fetching data:", response2.statusText);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   })();
  // }, []);


  // const handleEnterPress = async (preferenceId) => {
  // const handleEnterPress = async (preferenceId, select) => {
  const handleEnterPress = async (preferenceId) => {

    // const handleEnterPress = async () => {
    try {
      const token = await AsyncStorage.getItem('sessionToken');

      // const select = selectedChips.length > 0;
      let select = !selectedChips.includes(preferenceId);

      const url = 'https://datepa.brandlyup.com/api/v1/me/pronouns';
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
        // return data;
        // navigation.navigate('S12');
        // console.log(responseData);
      } else {
        // Alert.alert('Sorry', 'An error occurred while fetching data.');
        // console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      Alert.alert('Sorry', 'An error occurred while handling the request.');
      console.error('Error:', error);
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <ProgressBar progress={progress} />
        <View style={styles.mainContainer}>
          <View style={styles.headingContainer}>
            <Text style={[styles.heading, { marginTop: "15%" }]}>
              What are your
            </Text>
            <Text style={styles.heading}>preferred</Text>
            <Text style={styles.heading}>pronouns?</Text>
          </View>

          <View style={styles.chipGroup}>
            {chipData.map((chip) => (
              <Chip
                key={chip._id}
                label={chip.name}
                // selected={selectedChips.includes(chip.name)}
                // onPress={() => handleChipPress(chip.name)}
                selected={selectedChips.includes(chip._id)}
                onPress={() => handleChipPress(chip._id)}
              />
            ))}

            {selectedChips.length > 0 && (
              <Pressable
                style={[styles.nextbutton]}
                // onPress={() => navigation.navigate('S12')}
                onPress={() => navigation.navigate('S12')}

              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require('../assets/arrow3.png')}
                />
              </Pressable>
            )}


          </View>

          {/* <Button
            style={[styles.nextbutton]}
            onPress={() => navigation.navigate('S12')}
            mode="contained"
            // onPress={() => {
            //   if (selectedChips.length > 0) {
            //     const selectedChip = chipData.find(chip => chip.name === selectedChips[0]);
            //     if (selectedChip) {
            //       handleEnterPress(selectedChip._id);
            //     }
            //   }
            // }}
            disabled={selectedChips.length === 0} // Disable when no chip is selected
          >
            next
          </Button> */}
          {/* )} */}



          {/* {selectedChips.includes("TEST") && ( // Check if "TEST" chip is selected
  <View style={styles.chipGroup}>
    <Chip
      label="TEST"
      selected={selectedChips.includes("TEST")}
      onPress={() => handleChipPress("TEST")}
    />
  </View>
)} */}

          {/* <View style={styles.chipGroup}>
          <Chip
            label={chip.label} // Assuming chip.label is the desired label
            selected={selectedChips.includes(chip.label)}
            onPress={() => handleChipPress(chip.label)}
          />
        </View> */}
          {/* <View style={styles.chipGroup}>
            <Chip
              label="TEST"
              selected={selectedChips.includes(chip.label)}
              onPress={() => handleChipPress(chip.label)}
            />
        </View> */}
          <Text
            style={[
              styles.helperText,
              { marginBottom: "15%", marginRight: "20%" },
            ]}
          >
            You may pick more than one...
          </Text>
          {/* <View style={styles.footer}> */}
          {/* <Text
            style={[
              styles.helperText,
              { marginBottom: "15%", marginRight: "20%" },
            ]}
          >
            You may pick more than one...
          </Text> */}

          <View style={styles.s1Item}>
            <Image
              style={[styles.footerLogo, { marginBottom: "15%", marginRight: "20%" }]}
              contentFit="contain"
              source={require("../assets/group-4.png")}
            />
          </View>
          {/* <Text style={styles.footerText}>DatePe</Text> */}
          {/* <Button
            style={styles.nextbutton}
            mode="contained"
            onPress={() => {
              navigation.navigate("S12");
            }}
          >
            next
          </Button> */}
          {/* </View> */}
        </View>
      </View>
    </Screen>
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
    backgroundColor: "#DA4949",
    position: "absolute",
    left: 5,
    top: 5,
    bottom: 5,
    right: 5,
    borderRadius: 15,
  },
  chipGroup: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center", // Center-align horizontally
    flexWrap: "wrap",
  },
  chip: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 25,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  selectedChip: {
    backgroundColor: "#487167",
    borderWidth: 0,
    paddingVertical: 11,
  },
  centeredChipGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: "10%", // Adjust the margin as per your preference
  },
  heading: {
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "left",
  },
  inputField: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    color: "white",
    marginTop: 16,
    padding: 12,
    minHeight: 80,
    textAlignVertical: "top",
  },
  wrapper: {
    marginLeft: 70,
  },
  icon: {
    width: 35,
    height: 35,
    marginLeft: 10,
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
    right: '41.11%',
    bottom: 10,
    left: '40.89%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
});

export default S11;
