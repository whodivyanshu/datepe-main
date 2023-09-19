import * as React from "react";
import { StyleSheet, Text, View, Pressable, Image, Border, Color, FontFamily, FontSize } from "react-native";

const S32 = () => {
  return (
    <View style={styles.s20ProfileMatchAnimati}>
      <Image
        style={[styles.s20ProfileMatchAnimatiChild, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-30.png")}
      />
      <Image
        style={styles.s20ProfileMatchAnimatiItem}
        contentFit="cover"
        source={require("../assets/vector-25.png")}
      />
      <View style={[styles.itsAMatchParent, styles.groupParentPosition]}>
        <Text style={styles.itsAMatch}>It’s a Match</Text>
        <Image
          style={[styles.groupChild, styles.groupParentPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-17.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupParentPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={[styles.rectangleView, styles.groupInnerPosition]} />
        <View style={[styles.groupChild1, styles.groupChildLayout2]} />
        <View style={[styles.groupChild2, styles.groupChildLayout2]} />
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <View style={[styles.groupChild4, styles.groupChildPosition]} />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-19.png")}
        />
        <Image
          style={[styles.groupChild5, styles.ellipseIconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-20.png")}
        />
      </View>
      <Image
        style={styles.s20ProfileMatchAnimatiInner}
        contentFit="cover"
        source={require("../assets/vector-29.png")}
      />
      <View style={styles.homeIndicator} />
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={[styles.rectangleParent, styles.groupParentPosition]}>
          <View style={[styles.groupChild6, styles.groupChildLayout1]} />
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-34.png")}
          />
        </View>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.groupWrapper, styles.groupPosition]}>
            <View style={[styles.groupWrapper, styles.groupPosition]}>
              <View style={[styles.rectangleGroup, styles.groupPosition]}>
                <View style={[styles.groupChild7, styles.groupChildLayout1]} />
                <Image
                  style={[styles.groupChild8, styles.groupChildLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-4.png")}
                />
              </View>
              <Image
                style={[styles.vectorIcon, styles.groupParentPosition]}
                contentFit="cover"
                source={require("../assets/vector-24.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.groupChild9, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-20.png")}
          />
        </View>
      </View>
      <View style={styles.groupParent1}>
        <View style={[styles.rectangleContainer, styles.groupChild10Position]}>
          <View style={[styles.groupChild10, styles.groupChild10Position]} />
          <Pressable style={styles.groupParentPosition} onPress={() => { }}>
            <Text style={[styles.reachOut1, styles.textTypo]}>Reach out</Text>
          </Pressable>
        </View>
        <View style={[styles.rectangleParent1, styles.groupChild11Position]}>
          <View style={[styles.groupChild11, styles.groupChild11Position]} />
          <Pressable style={styles.groupParentPosition} onPress={() => { }}>
            <Text style={[styles.text, styles.textTypo]}>
              <Text style={styles.directpeDateTxtContainer}>
                <Text style={styles.directpe}>Directpe</Text>
                <Text style={styles.date}> date</Text>
              </Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    height: 36,
    width: 40,
  },
  groupParentPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupInnerPosition: {
    transform: [
      {
        rotate: "-32.59deg",
      },
    ],
    borderRadius: 2,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChildLayout2: {
    height: 3,
    width: 9,
    backgroundColor: '#fff',
    borderRadius: 2,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: 26,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  ellipseIconPosition: {
    width: 7,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 252,
    width: 182,
  },
  groupLayout: {
    height: 276,
    width: 217,
  },
  groupPosition: {
    marginLeft: -108.66,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 171,
    width: 155,
    borderRadius: 7,
    left: "40%",
    top: "55%",
    position: "absolute",
  },
  groupChild10Position: {
    height: 66,
    marginLeft: -147,
    width: 294,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    height: 41,
    alignItems: "center",
    display: "flex",
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 22,
    fontSize: 24,
    marginTop: -21,
    textAlign: "center",
  },
  groupChild11Position: {
    height: 60,
    marginLeft: -147,
    width: 294,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  s20ProfileMatchAnimatiChild: {
    top: 813,
    left: 37,
    position: "absolute",
  },
  s20ProfileMatchAnimatiItem: {
    top: 631,
    left: 319,
    width: 39,
    height: 39,
    position: "absolute",
  },
  itsAMatch: {
    marginTop: -27.5,
    marginLeft: -163.73,
    fontSize: 40,
    lineHeight: 73,
    fontWeight: "600",
    // fontFamily: FontFamily.poppinsSemiBold,
    color: "#fff",
    width: 326,
    height: 78,
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    marginTop: -25.5,
    marginLeft: 114.27,
    width: 3,
    height: 6,
  },
  groupItem: {
    marginTop: -1.39,
    marginLeft: 123.73,
    width: 8,
    height: 9,
  },
  groupInner: {
    marginTop: -12.55,
    marginLeft: 139.38,
    width: 29,
    height: 7,
    backgroundColor: "#9797cb",
  },
  rectangleView: {
    marginTop: -17.55,
    marginLeft: 129.29,
    width: 15,
    height: 4,
    backgroundColor: "#f493b4",
  },
  groupChild1: {
    marginTop: 22.52,
    marginLeft: 119.03,
  },
  groupChild2: {
    marginTop: 24.57,
    marginLeft: -135.46,
  },
  groupChild3: {
    marginTop: -41.33,
    marginLeft: -131.13,
    width: 31,
    height: 8,
    backgroundColor: "#f493b4",
  },
  groupChild4: {
    marginTop: -38.27,
    marginLeft: -165.36,
    width: 20,
    backgroundColor: "#f5c348",
    height: 4,
  },
  ellipseIcon: {
    marginTop: -50.5,
    marginLeft: -111.73,
    height: 8,
  },
  groupChild5: {
    marginTop: -10.5,
    marginLeft: -136.73,
    height: 7,
  },
  itsAMatchParent: {
    marginTop: -253,
    marginLeft: -166,
    width: 333,
    height: 101,
  },
  s20ProfileMatchAnimatiInner: {
    top: 707,
    left: 0,
    width: 678,
    height: 882,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    width: 134,
    height: 5,
    backgroundColor: "#fff",
    left: "50%",
    position: "absolute",
  },
  groupChild6: {
    marginTop: -135.97,
    marginLeft: -75.29,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    width: 182,
    left: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: "#9797cb",
  },
  rectangleIcon: {
    marginTop: -113.57,
    marginLeft: -72.46,
    width: 151,
    height: 168,
    borderRadius: 7,
    left: "50%",
    top: "50%",
    position: "absolute",
    transform: [
      {
        rotate: "-20.59deg",
      },
    ],
  },
  rectangleParent: {
    marginTop: -81.41,
    marginLeft: -24.28,
    height: 272,
    width: 211,
  },
  groupChild7: {
    marginTop: -126,
    marginLeft: -91,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    width: 182,
    left: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: "#f5c348",
  },
  groupChild8: {
    marginTop: -129.66,
    marginLeft: -64.48,
  },
  rectangleGroup: {
    marginTop: -111.13,
    height: 252,
    width: 182,
  },
  vectorIcon: {
    marginTop: 73,
    marginLeft: -72,
    height: 36,
    width: 40,
  },
  groupWrapper: {
    marginTop: -138.09,
    height: 276,
    width: 217,
  },
  groupChild9: {
    marginTop: -115.19,
    marginLeft: -81.78,
    transform: [
      {
        rotate: "-20.59deg",
      },
    ],
  },
  groupContainer: {
    marginTop: -190.53,
    marginLeft: -186.54,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupParent: {
    marginTop: -145.09,
    marginLeft: -190.66,
    width: 373,
    height: 381,
  },
  groupChild10: {
    marginTop: -33,
    backgroundColor: "#20a090",
    borderRadius: 26,
  },
  reachOut1: {
    marginLeft: -105,
    letterSpacing: 5,
    color: "#d9d9d9",
    justifyContent: "center",
    width: 211,
  },
  rectangleContainer: {
    marginTop: -74.5,
  },
  groupChild11: {
    marginTop: -30,
    borderRadius: 26,
    backgroundColor: "#9797cb",
  },
  directpe: {
    color: "#da4949",
  },
  date: {
    color: "#fdf5f5",
  },
  directpeDateTxtContainer: {
    width: "100%",
  },
  text: {
    marginLeft: -104,
    letterSpacing: 2,
    width: 208,
  },
  rectangleParent1: {
    marginTop: 14.5,
  },
  groupParent1: {
    marginTop: 269,
    marginLeft: -145,
    height: 149,
    width: 294,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  s20ProfileMatchAnimati: {
    backgroundColor: "#f54848",
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default S32;
