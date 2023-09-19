import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Border,
  Color,
  FontFamily,
  FontSize,
  Image,
} from 'react-native';

const S20 = ({ navigation }) => {
  const [settings, setSettings] = useState(null);
  const [editedPhoneNumber, setEditedPhoneNumber] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo';

    fetch('https://datepa.brandlyup.com/api/v1/me/settings', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSettings(data);
      })
      .catch((error) => {
        console.error('Error fetching settings:', error);
      });
  }, []);

  const updateSettings = async () => {
    const updateData = {
      email: 'newemail@example.com',
      notification: true,
      readReceipt: true,
      activityStatus: true,
    };

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo'; // Replace with your actual token

    try {
      const response = await fetch(
        'https://datepa.brandlyup.com/api/v1/me/settings',
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateData),
        }
      );

      const updatedSettings = await response.json();
      setSettings(updatedSettings);
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  if (!settings) {
    return <Text>Loading...</Text>;
  }

  return (
    <Screen>
      <View style={styles.s20ProfileMatchAnimati}>
        <Image
          style={[styles.s20ProfileMatchAnimatiChild, styles.s20Position]}
          contentFit="cover"
          source={require('../assets/vector-2.png')}
        />
        <View style={styles.itsAMatchParent}>
          <Text style={styles.itsAMatch}>It’s a Match</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require('../assets/ellipse-17.png')}
          />
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require('../assets/ellipse-18.png')}
          />
          <View style={[styles.frameInner, styles.frameInnerTransform]} />
          <View style={[styles.rectangleView, styles.frameInnerTransform]} />
          <View style={[styles.frameChild1, styles.frameChildLayout1]} />
          <View style={[styles.frameChild2, styles.frameChildLayout1]} />
          <View style={[styles.frameChild3, styles.frameChildLayout]} />
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require('../assets/ellipse-19.png')}
          />
          <Image
            style={[styles.frameChild5, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require('../assets/ellipse-20.png')}
          />
        </View>
        <Image
          style={[styles.s20ProfileMatchAnimatiItem, styles.s20Position]}
          contentFit="cover"
          source={require('../assets/frame-2608669.png')}
        />
        <View style={styles.homeIndicator} />
        <Image
          style={styles.s20ProfileMatchAnimatiInner}
          contentFit="cover"
        //source={require("../assets/frame-2608666.png")}
        />
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.frameChild6, styles.frameChildPosition]} />
          <Text
            style={[styles.reachOut, styles.reachOutTypo]}
            onPress={() => navigation.navigate('S21')}>
            Reach out
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.frameChild7, styles.frameChildPosition]} />
          <Text style={[styles.directpeDate, styles.reachOutTypo]}>
            <Text style={styles.directpeDateTxtContainer}>
              <Text style={styles.directpe}>Directpe</Text>
              <Text style={styles.date}> date</Text>
            </Text>
          </Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  s20Position: {
    maxWidth: '100%',
    left: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  frameInnerTransform: {
    transform: [
      {
        rotate: '-32.59deg',
      },
    ],
    borderRadius: 20,
    // borderRadius: Border.br_11xs,
    position: 'absolute',
  },
  frameChildLayout1: {
    height: 3,
    width: 9,
    backgroundColor: 'white',
    //  backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    transform: [
      {
        rotate: '-32.59deg',
      },
    ],
    borderRadius: 30,
    // borderRadius: Border.br_11xs,
    position: 'absolute',
  },
  frameChildLayout: {
    borderRadius: 30,
    //borderRadius: Border.br_7xs,
    transform: [
      {
        rotate: '-32.59deg',
      },
    ],
    position: 'absolute',
  },
  ellipseIconLayout: {
    width: 7,
    position: 'absolute',
  },
  rectanglePosition: {
    left: 19,
    right: 20,
    position: 'absolute',
  },
  frameChildPosition: {
    borderRadius: 30,
    // borderRadius: Border.br_7xl,
    left: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  reachOutTypo: {
    height: 41,
    alignItems: 'center',
    display: 'flex',
    //fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    textTransform: 'uppercase',
    lineHeight: 22,
    fontSize: 20,
    //fontSize: FontSize.size_xl,
    textAlign: 'center',
    position: 'absolute',
  },
  s20ProfileMatchAnimatiChild: {
    right: 0,
    left: 0,
    top: 0,
    height: 926,
  },
  itsAMatch: {
    marginTop: -27.5,
    left: 3,
    fontSize: 40,
    lineHeight: 73,
    fontWeight: '600',
    // fontFamily: FontFamily.poppinsSemiBold,
    color: 'white',
    //color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 326,
    height: 78,
    textAlign: 'center',
    top: '50%',
    position: 'absolute',
  },
  frameChild: {
    top: 25,
    left: 281,
    width: 3,
    height: 6,
    position: 'absolute',
  },
  frameItem: {
    top: 49,
    left: 290,
    width: 8,
    height: 9,
    position: 'absolute',
  },
  frameInner: {
    top: 38,
    left: 306,
    width: 29,
    height: 7,
    backgroundColor: '#9797CB',
    //backgroundColor: Color.a3,
  },
  rectangleView: {
    top: 33,
    left: 296,
    width: 15,
    height: 4,
    backgroundColor: '#F493B4',
    // backgroundColor: Color.a1,
  },
  frameChild1: {
    top: 73,
    left: 286,
  },
  frameChild2: {
    top: 75,
    left: 31,
  },
  frameChild3: {
    top: 9,
    left: 36,
    width: 31,
    height: 8,
    backgroundColor: '#F493B4',
    //backgroundColor: Color.a1,
  },
  frameChild4: {
    top: 12,
    left: 1,
    backgroundColor: '#f5c348',
    width: 20,
    height: 4,
  },
  ellipseIcon: {
    left: 55,
    height: 8,
    top: 0,
    width: 7,
  },
  frameChild5: {
    top: 40,
    left: 30,
    height: 7,
  },
  itsAMatchParent: {
    height: '10.91%',
    marginLeft: -162.34,
    top: '7.45%',
    bottom: '81.64%',
    width: 333,
    left: '50%',
    position: 'absolute',
  },
  s20ProfileMatchAnimatiItem: {
    top: 707,
    right: -250,
    height: 882,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    width: 134,
    height: 5,
    // backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    backgroundColor: 'white',
    left: '50%',
    position: 'absolute',
  },
  s20ProfileMatchAnimatiInner: {
    marginTop: -221,
    marginLeft: -195,
    width: 331,
    height: 294,
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  frameChild6: {
    backgroundColor: '#20a090',
    height: 66,
  },
  reachOut: {
    alignItems: 'center',
    letterSpacing: 5,
    paddingTop: 20,
    color: '#d9d9d9',
    justifyContent: 'center',
    width: 306,
  },
  rectangleParent: {
    bottom: 128,
    height: 66,
  },
  frameChild7: {
    height: 64,
    backgroundColor: '#9797CB',
    //backgroundColor: Color.a3,
  },
  directpe: {
    color: '#da4949',
  },
  date: {
    color: '#fdf5f5',
  },
  directpeDateTxtContainer: {
    lineBreak: 'anywhere',
    width: '100%',
  },
  directpeDate: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    letterSpacing: 2,
    width: 349,
  },
  rectangleGroup: {
    bottom: 45,
    height: 68,
  },
  s20ProfileMatchAnimati: {
    backgroundColor: '#292929',
    flex: 1,
    overflow: 'hidden',
    height: 926,
    width: '100%',
  },
});

export default S20;
