import * as React from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Color,
  Border,
  FontSize,
  FontFamily,
  Padding,
  Image,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const S33 = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <View style={styles.s17FinalProfileSwipeOr}>
        <Image
          style={styles.s17FinalProfileSwipeOrChild}
          contentFit="cover"
          source={require('../assets/vector-2.png')}
        />
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
        <Pressable
          style={[styles.menuVertical, styles.spotifyIconPosition]}
          onPress={() => { }}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require('../assets/menu-vertical.png')}
          />
        </Pressable>
        <Pressable
          style={[styles.message, styles.messagePosition]}
          onPress={() => { }}>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require('../assets/message.png')}
          />
        </Pressable>
        <Pressable
          style={[styles.s17FinalProfileSwipeOrInner, styles.frameItemPosition]}
          onPress={() => { }}>
          <View style={styles.matchWrapper}>
            <Text style={styles.match} onPress={() => navigation.navigate('S19')}>match</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.groupContainer, styles.groupPosition]}
          onPress={() => { }}>
          <View style={styles.rectangleWrapper}>
            <Image
              style={[styles.groupChild, styles.groupPosition]}
              contentFit="cover"
              source={require('../assets/rectangle-20.png')}
            />
          </View>
          <Text style={styles.sarah19}>Sarah, 19</Text>
          <Text style={styles.iNeedA}>I need a break</Text>
          <View style={[styles.rectangleParent, styles.groupItemLayout]}>
            <View style={[styles.groupItem, styles.groupBg]} />
            <Text style={[styles.anime, styles.animeTypo]}>anime</Text>
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Text style={[styles.kdramas, styles.animeTypo]}>kdramas</Text>
          </View>
          <View style={[styles.instagramParent, styles.frameItemPosition]}>
            <Image
              style={[styles.instagramIcon, styles.messagePosition]}
              contentFit="cover"
              source={require('../assets/instagram.png')}
            />
            <Image
              style={[styles.spotifyIcon, styles.spotifyIconPosition]}
              contentFit="cover"
              source={require('../assets/spotify.png')}
            />
          </View>
          <Image
            style={[styles.frameItem, styles.frameItemPosition]}
            contentFit="cover"
            source={require('../assets/group-12.png')}
          />
        </Pressable>
        <Text style={styles.home}>Home</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  spotifyIconPosition: {
    width: 19,
    left: '50%',
    position: 'absolute',
  },
  iconLayout: {
    height: '100%',
    width: '100%',
  },
  messagePosition: {
    width: 20,
    left: '50%',
    position: 'absolute',
  },
  frameItemPosition: {
    left: '50%',
    position: 'absolute',
  },
  groupPosition: {
    width: 282,
    left: '50%',
    position: 'absolute',
  },
  groupItemLayout: {
    height: 15,
    width: 63,
    left: '50%',
    position: 'absolute',
  },
  groupBg: {
    backgroundColor: 'white',
    //backgroundColor: Color.gainsboro,
    borderRadius: 50,
    //borderRadius: Border.br_lg,
    top: 0,
  },
  animeTypo: {
    height: 20,
    //color: Color.black,
    color: 'black',
    fontSize: 12,
    //fontSize: FontSize.size_3xs,
    top: 2,
    display: 'flex',
    //fontFamily: FontFamily.poppinsExtraLight,
    fontWeight: '200',
    textAlign: 'center',
    lineHeight: 22,
    justifyContent: 'center',
    left: '50%',
    alignItems: 'center',
    position: 'absolute',
  },
  groupLayout: {
    width: 66,
    height: 20,
    left: '50%',
    position: 'absolute',
  },
  s17FinalProfileSwipeOrChild: {
    right: 0,
    left: 0,
    maxWidth: '100%',
    height: 217,
    top: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  frameChild: {
    width: 85,
    height: 18,
  },
  homeIndicator: {
    borderRadius: 100,
    backgroundColor: 'white',
    // backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    height: 5,
    alignSelf: 'stretch',
  },
  homeIndicatorWrapper: {
    marginTop: 8,
    padding: 10,
    // padding: Padding.p_3xs,
    alignSelf: 'stretch',
  },
  groupParent: {
    right: 148,
    bottom: -7,
    left: 147,
    alignItems: 'center',
    position: 'absolute',
  },
  icon: {
    marginLeft: -127.5,
  },
  menuVertical: {
    height: 26,
    top: 63,
  },
  icon1: {
    marginLeft: 114.5,
  },
  message: {
    height: 27,
    top: 63,
  },
  match: {
    color: '#f9f9f9',
    textAlign: 'center',
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    textTransform: 'uppercase',
    lineHeight: 22,
    letterSpacing: 5,
    fontSize: 20,
    // fontSize: FontSize.size_xl,
  },
  matchWrapper: {
    backgroundColor: '#aec48a',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 287,
    height: 50,
    paddingHorizontal: 63,
    paddingVertical: 4,
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    //borderRadius: Border.br_7xl,
    alignItems: 'center',
    overflow: 'hidden',
  },
  s17FinalProfileSwipeOrInner: {
    marginLeft: -149.5,
    top: 463,
    bottom: 382,
    padding: 10,
    //padding: Padding.p_3xs,
  },
  groupChild: {
    marginLeft: -140.89,
    top: '0%',
    bottom: '0%',
    maxHeight: '100%',
    width: 282,
    borderRadius: 30,
    //borderRadius: Border.br_7xl,
    height: '100%',
  },
  rectangleWrapper: {
    height: 315,
    zIndex: 0,
    flex: 1,
  },
  sarah19: {
    top: 221,
    // fontFamily: FontFamily.poppinsRegular,
    height: 21,
    zIndex: 1,
    width: 170,
    textAlign: 'left',
    color: 'white',
    //color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontSize: 20,
    // fontSize: FontSize.size_smi,
    marginLeft: -129.89,
    lineHeight: 22,
    left: '50%',
    position: 'absolute',
  },
  iNeedA: {
    top: 247,
    height: 17,
    zIndex: 2,
    // fontFamily: FontFamily.poppinsExtraLight,
    fontWeight: '200',
    width: 170,
    textAlign: 'left',
    color: 'white',
    // color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontSize: 12,
    //fontSize: FontSize.size_smi,
    marginLeft: -129.89,
    lineHeight: 22,
    left: '50%',
    position: 'absolute',
  },
  groupItem: {
    marginLeft: -31.57,
    height: 20,
    width: 63,
    left: '50%',
    position: 'absolute',
  },
  anime: {
    marginLeft: -21.57,
    width: 46,
  },
  rectangleParent: {
    zIndex: 3,
    top: 275,
    marginLeft: -129.89,
    width: 63,
    height: 25,
  },
  groupInner: {
    marginLeft: -33.23,
    backgroundColor: 'white',
    // backgroundColor: Color.gainsboro,
    borderRadius: 30,
    height: 55,
    //  borderRadius: Border.br_lg,
  },
  kdramas: {
    marginLeft: -27.68,
    width: 58,
    height: 25,
  },
  rectangleGroup: {
    marginLeft: -56.58,
    zIndex: 4,
    top: 275,
    height: 25,
  },
  instagramIcon: {
    marginLeft: -19.96,
    height: 18,
    top: 0,
  },
  spotifyIcon: {
    marginLeft: 1.39,
    top: 1,
    height: 16,
  },
  instagramParent: {
    marginLeft: 90.19,
    top: 272,
    width: 40,
    zIndex: 5,
    height: 18,
  },
  frameItem: {
    marginLeft: 88.12,
    top: 12,
    width: 27,
    height: 23,
    zIndex: 6,
  },
  groupContainer: {
    marginLeft: -136.69,
    top: 120,
    bottom: 491,
    flexDirection: 'row',
    width: 282,
  },
  home: {
    marginLeft: -38.5,
    width: 86,
    height: 28,
    display: 'flex',
    color: 'white',
    // color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    textAlign: 'center',
    //fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    textTransform: 'uppercase',
    lineHeight: 22,
    letterSpacing: 5,
    fontSize: 20,
    //fontSize: FontSize.size_xl,
    justifyContent: 'center',
    top: 63,
    left: '50%',
    alignItems: 'center',
    position: 'absolute',
  },
  s17FinalProfileSwipeOr: {
    backgroundColor: '#292929',
    height: 926,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
  },
});

export default S33;
