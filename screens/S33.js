import * as React from 'react';
import { StyleSheet, View, Text, Image, Color, FontFamily } from 'react-native';

const S33 = () => {
  return (
    <View style={styles.s25connectionErrors}>
      <View style={[styles.homeIndicator, styles.homePosition]} />
      <Image
        style={[styles.homeProfileCurve1Icon, styles.homePosition]}
        contentFit="cover"
        source={require('../assets/homeprofilecurve-1.png')}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.menuVerticalGroup, styles.menuPosition]}>
          <Image
            style={styles.menuVerticalIcon}
            contentFit="cover"
            source={require('../assets/menu-vertical.png')}
          />
          <Image
            style={styles.messageIcon}
            contentFit="cover"
            source={require('../assets/message.png')}
          />
        </View>
        <Text style={[styles.uhOh, styles.uhOhTypo]}>uh oh</Text>
      </View>
      <Text style={[styles.oopsTryLater, styles.uhOhTypo]}>{`OOPs,
Try later`}</Text>
      <Image
        style={[styles.connectivity01Icon, styles.frameParentPosition]}
        contentFit="cover"
        source={require('../assets/connectivity-01.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    left: '50%',
    position: 'absolute',
  },
  menuPosition: {
    flexDirection: 'row',
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  frameParentPosition: {
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  uhOhTypo: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    color: '#fff',
    //fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    textTransform: 'uppercase',
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: '#fff',
    width: 134,
    height: 5,
  },
  s25connectionErrorsChild: {
    height: '1.94%',
    width: '18%',
    top: '95.25%',
    right: '41.11%',
    bottom: '2.81%',
    left: '40.89%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  menuVerticalIcon: {
    width: 26,
    height: 26,
  },
  messageIcon: {
    width: 27,
    height: 27,
    marginLeft: 310,
  },
  menuVerticalParent: {
    marginLeft: -181,
    marginTop: -402,
  },
  homeProfileCurve1Icon: {
    marginLeft: -214,
    top: 0,
    width: 428,
    height: 217,
  },
  menuVerticalGroup: {
    marginLeft: -181.5,
    marginTop: -14,
  },
  uhOh: {
    marginLeft: -73.5,
    fontSize: 20,
    letterSpacing: 5,
    lineHeight: 22,
    width: 147,
    marginTop: -14,
    height: 28,
  },
  frameParent: {
    width: 363,
    height: 28,
    marginLeft: -181,
    marginTop: -402,
  },
  oopsTryLater: {
    marginTop: 81,
    marginLeft: -151,
    fontSize: 24,
    letterSpacing: 3,
    lineHeight: 41,
    width: 303,
    height: 161,
  },
  connectivity01Icon: {
    marginTop: -164,
    marginLeft: -144,
    width: 280,
    height: 280,
    overflow: 'hidden',
  },
  s25connectionErrors: {
    backgroundColor: '#292929',
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
  },
});

export default S33;
