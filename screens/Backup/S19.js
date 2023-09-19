import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Border,
  Color,
  FontFamily,
} from 'react-native';

const S19 = ({ navigation }) => {

  return (
    <Screen>
      <View style={styles.s201stHalf}>
        <Image
          style={[styles.s201stHalfChild, styles.s201stLayout]}
          contentFit="cover"
          source={require('../assets/vector-2.png')}
        />
        <Image
          style={[styles.s201stHalfItem, styles.s201stLayout]}
          //contentFit="cover"
          source={require('../assets/vector-30.png')}
        />
        <View style={[styles.itsAMatchParent, styles.itsPosition]}>
          <Text style={[styles.itsAMatch, styles.itsPosition]} onPress={() => navigation.navigate('S20')} >It’s a Match</Text>
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
          <View style={[styles.frameInner, styles.frameInnerLayout]} />
          <View style={[styles.rectangleView, styles.frameInnerLayout]} />
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
          style={[styles.s201stHalfInner, styles.s201stLayout]}
          contentFit="cover"
          source={require('../assets/vector-29.png')}
        />
        <View style={styles.homeIndicator} />
        <View style={[styles.frameView, styles.itsPosition]}>
          <View style={styles.frameParent}>
            <View style={styles.groupParent}>
              <View style={[styles.rectangleWrapper, styles.groupChildLayout]}>
                <View style={[styles.groupChild, styles.childShadowBox]} />
              </View>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require('../assets/vector-24.png')}
              />
              <Image
                style={styles.rectangleIcon}
                contentFit="cover"
                source={require('../assets/rectangle-20.png')}
              />
            </View>
            <View style={styles.rectangleParent}>
              <View style={[styles.frameChild6, styles.frameChildPosition]} />
              <Image
                style={[styles.frameChild7, styles.frameChildPosition]}
                contentFit="cover"
                source={require('../assets/rectangle-34.png')}
              />
              <Image
                style={[styles.frameChild8, styles.frameChildPosition]}
                //contentFit="cover"
                source={require('../assets/vector-25.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  s201stLayout: {
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  itsPosition: {
    left: '50%',
    position: 'absolute',
  },
  frameInnerLayout: {
    borderRadius: 30,
    //borderRadius: Border.br_11xs,
    transform: [
      {
        rotate: '-32.59deg',
      },
    ],
    position: 'absolute',
  },
  frameChildLayout1: {
    height: 3,
    width: 9,
    backgroundColor: 'white',
    // backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
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
    // borderRadius: Border.br_7xs,
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
  groupChildLayout: {
    height: 189,
    width: 137,
    left: 0,
    position: 'absolute',
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 30,
    // borderRadius: Border.br_mini,
    transform: [
      {
        rotate: '-32.59deg',
      },
    ],
  },
  frameChildPosition: {
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  s201stHalfChild: {
    right: 0,
    height: 395,
    left: 0,
    maxWidth: '100%',
    top: 0,
  },
  s201stHalfItem: {
    width: '2.8%',
    right: '88.55%',
    bottom: 98,
    left: '8.64%',
    height: 15,
  },
  itsAMatch: {
    marginLeft: -163.73,
    top: 23,
    fontSize: 40,
    lineHeight: 73,
    fontWeight: '600',
    // fontFamily: FontFamily.poppinsSemiBold,
    color: 'white',
    // color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    textAlign: 'center',
    width: 326,
    height: 78,
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
    transform: [
      {
        rotate: '-32.59deg',
      },
    ],
    height: 7,
    backgroundColor: '#9797CB',
    // backgroundColor: Color.a3,
  },
  rectangleView: {
    top: 33,
    left: 296,
    width: 15,
    height: 4,
    backgroundColor: '#F493B4',
    //backgroundColor: Color.a1,
    transform: [
      {
        rotate: '-32.59deg',
      },
    ],
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
    width: 20,
    backgroundColor: '#F5C348',
    //backgroundColor: Color.goldenrod,
    height: 4,
  },
  ellipseIcon: {
    left: 55,
    height: 8,
    top: 0,
  },
  frameChild5: {
    top: 40,
    left: 30,
    height: 7,
  },
  itsAMatchParent: {
    marginLeft: -167,
    top: 57,
    bottom: 768,
    width: 333,
  },
  s201stHalfInner: {
    width: '158.41%',
    right: '-58.41%',
    bottom: -674,
    left: '0%',
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
  groupChild: {
    height: 189,
    width: 137,
    left: 0,
    position: 'absolute',
    //backgroundColor: Color.goldenrod,
    backgroundColor: '#F5C348',
    top: 0,
  },
  rectangleWrapper: {
    top: 20,
    transform: [
      {
        rotate: '-32.59deg',
      },
    ],
  },
  vectorIcon: {
    top: 158,
    left: 37,
    width: 30,
    height: 27,
    position: 'absolute',
  },
  rectangleIcon: {
    top: 17,
    left: 20,
    width: 116,
    height: 128,
    borderRadius: 30,
    //borderRadius: Border.br_6xs,
    position: 'absolute',
  },
  groupParent: {
    height: 203,
    flex: 1,
  },
  frameChild6: {
    marginTop: -88.49,
    marginLeft: -55.33,
    width: 125,
    height: 164,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 30,
    //borderRadius: Border.br_mini,
    transform: [
      {
        rotate: '-32.59deg',
      },
    ],
    backgroundColor: '#9797CB',
    //backgroundColor: Color.a3,
  },
  frameChild7: {
    marginTop: -73.68,
    marginLeft: -50.09,
    width: 104,
    height: 109,
    borderRadius: 30,
    // borderRadius: Border.br_6xs,
  },
  frameChild8: {
    marginTop: 44.5,
    marginLeft: 15.87,
    width: 27,
    height: 25,
  },
  rectangleParent: {
    height: 177,
    flex: 1,
  },
  frameParent: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    height: 203,
  },
  frameView: {
    marginLeft: -158,
    top: 252,
    bottom: 451,
    width: 324,
    padding: 10,
  },
  s201stHalf: {
    backgroundColor: '#292929',
    width: '100%',
    height: 926,
    overflow: 'hidden',
    flex: 1,
  },
});

export default S19;
