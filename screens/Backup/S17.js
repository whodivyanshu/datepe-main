import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Color,
  Border,
  FontFamily,
  Image,
} from 'react-native';
import Screen from "../src/Screen";


const API_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo'; // Replace with your actual API token

const S17 = ({ navigation }) => {
  const [matches, setMatches] = useState([]);

  const handleFetchMatches = async () => {
    try {
      const response = await fetch(
        'https://datepa.brandlyup.com/api/v1/match/nearby-match',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }

      const data = await response.json();
      setMatches(data.matches);

      navigation.navigate('S18', { matches: data.matches }); // Navigate to S18 screen with matches data
    } catch (error) {
      console.error('Error fetching nearby matches:', error);
      Alert.alert('Error', 'An error occurred while fetching nearby matches.');
    }
  };
  return (
    <Screen>
      <View style={styles.s15Location}>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/group-4.png')}
          />
          <View style={styles.homeIndicatorWrapper}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
        <View style={[styles.findNearbyMatchesParent, styles.parentPosition]}>
          <Text style={[styles.findNearbyMatches, styles.weNeedToFlexBox]}>
            Find nearby matches...
          </Text>
          <Text style={[styles.weNeedTo, styles.weNeedToFlexBox]}>
            We need to access your location to find people in your area
          </Text>
        </View>
        <Image
          style={[styles.s15LocationChild, styles.groupContainerPosition]}
          contentFit="cover"
          source={require('../assets/frame-2608591.png')}
        />
        <View style={[styles.groupContainer, styles.groupContainerPosition]}>
          <View style={styles.groupWrapper}>
            <View style={[styles.rectangleWrapper, styles.frameItemPosition]}>
              <View style={[styles.groupChild, styles.frameItemPosition]} />
            </View>
          </View>
          <Text style={styles.allowLocationAccess} onPress={handleFetchMatches}>
            Allow location access
          </Text>
        </View>
        <View style={[styles.rectangleParent, styles.parentPosition]}>
          <View style={[styles.frameItem, styles.frameShadowBox]} />
          <View style={[styles.frameInner, styles.frameShadowBox]} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 31,
    right: 31,
    position: 'absolute',
  },
  weNeedToFlexBox: {
    textAlign: 'left',
    color: 'white',
    //color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    alignSelf: 'stretch',
  },
  groupContainerPosition: {
    left: '50%',
    position: 'absolute',
  },
  frameItemPosition: {
    left: 0,
    right: 0,
    top: 0,
  },
  frameShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    borderRadius: 30,
    // borderRadius: Border.br_7xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    position: 'absolute',
  },
  frameChild: {
    width: 70,
    height: 15,
  },
  homeIndicator: {
    borderRadius: 100,
    backgroundColor: 'white',
    // backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    height: 5,
    alignSelf: 'stretch',
  },
  homeIndicatorWrapper: {
    padding: 10,
    marginTop: 11,
    alignSelf: 'stretch',
  },
  groupParent: {
    right: 104,
    bottom: -7,
    left: 105,
    alignItems: 'center',
    position: 'absolute',
  },
  findNearbyMatches: {
    fontSize: 30,
    height: 107,
    //fontFamily: FontFamily.poppinsRegular,
    textAlign: 'left',
  },
  weNeedTo: {
    fontSize: 15,
    fontWeight: '200',
    // fontFamily: FontFamily.poppinsExtraLight,
    height: 52,
  },
  findNearbyMatchesParent: {
    height: '17.17%',
    top: '15.98%',
    bottom: '66.85%',
    paddingHorizontal: 0,
    paddingVertical: 20,
    justifyContent: 'center',
  },
  s15LocationChild: {
    marginTop: -86,
    marginLeft: -156.5,
    top: '50%',
    width: 313,
    height: 349,
  },
  groupChild: {
    borderRadius: 33,
    borderStyle: 'solid',
    borderColor: '#f9f9f9',
    borderWidth: 2,
    height: 55,
    position: 'absolute',
  },
  rectangleWrapper: {
    height: 55,
    position: 'absolute',
  },
  groupWrapper: {
    shadowRadius: 7,
    elevation: 7,
    zIndex: 0,
    height: 55,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    alignSelf: 'stretch',
  },
  allowLocationAccess: {
    top: '35.38%',
    fontSize: 12,
    textAlign: 'center',
    zIndex: 1,
    color: 'white',
    //  color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    //fontFamily: FontFamily.poppinsRegular,
    left: 31,
    position: 'absolute',
  },
  groupContainer: {
    height: '7.02%',
    marginLeft: -95.5,
    top: '80.56%',
    bottom: '12.42%',
    width: 192,
    justifyContent: 'center',
  },
  frameItem: {
    backgroundColor: '#f9f9f9',
    height: 30,
    left: 0,
    right: 0,
    top: 0,
  },
  frameInner: {
    height: '63.33%',
    top: '20%',
    right: 51,
    bottom: '16.67%',
    left: 6,
    backgroundColor: '#da4949',
  },
  rectangleParent: {
    top: 34,
    height: 30,
  },
  s15Location: {
    backgroundColor: '#292929',
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
  },
});

export default S17;
