import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, Pressable, View, Alert, BackHandler, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import S28menu from './S28menu';
import Footer from './Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Details from "./Details"
import Carousel from 'react-native-snap-carousel';
import Swiper from 'react-native-deck-swiper';
import S2 from './S2';

const cards = [
  { id: 1, text: 'Card 1' },
  { id: 2, text: 'Card 2' },
  { id: 3, text: 'Card 3' },
  // Add more cards as needed
];

const S28 = ({ navigation }) => {
  const [nearByData, setNearByData] = useState(null);
  const [userId, setUserId] = useState(null);
  const [meUserId, setMeUserId] = useState(null);
  const [name, setName] = useState(null);
  const [dob, setDOB] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [backPressCount, setBackPressCount] = useState(0);
  const [details, setDetails] = useState(false);

  const handleBackPress = () => {
    if (navigation.isFocused()) {
      setBackPressCount((prevCount) => prevCount + 1);

      if (backPressCount === 1) {
        BackHandler.exitApp(); // Exit the app when back is pressed twice
      } else {
        setTimeout(() => {
          setBackPressCount(0); // Reset backPressCount after a certain delay
        }, 2000); // 2 seconds delay
      }

      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [backPressCount]);

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', handleBackPress);

  //   return () => {
  //     BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  //   };
  // }, [backPressCount]);


  useEffect(() => {
    fetchUserData()
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('sessionToken');

        if (!token) {
          navigation.navigate('S2');
          return;
        }

        const response = await fetch(
          'https://datepa.brandlyup.com/api/v1/match/nearby-match?maxDistance=10000',
          {
            headers: {
              accept: '*/*',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("response",response);
        if (!response.ok) {
          // Handle non-successful responses, e.g., show an error message
          console.error('API request failed:', response.statusText);
          return;
        }

        const { message, data } = await response.json();


        const idToRemove = meUserId;

        // const filteredData = nearByData.filter(item => item._id !== idToRemove);
        setNearByData(data);
        if (data && data.length >= 1) {
          // Update state with data from the API response
          setName(data[0].name);
          setDOB(data[0].dob);
          setUserId(data[0]._id);
        } else {
          // Handle the case where the API response does not contain expected data
          console.error('API response format is unexpected:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(); // Fetch data immediately when the component mounts
  }, [navigation, setName, setDOB, setUserId]);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://datepa.brandlyup.com/api/v1/register/user-data', {
        method: 'GET',
        headers: {
          Accept: '*/*',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6IjU1NTU1NTU1NTUiLCJvdHAiOiJ2aXBHZkQiLCJ1c2VySWQiOiI2NGYxN2U4MzQ2YTAzNmJjMDBjYzczMDIiLCJpYXQiOjE2OTM1NDgxNjMsImV4cCI6MTY5MzU1MTc2M30.NsPQMn0Dtt2GPgqrZ99GdxAUA9YMlbWxwJNbcfwwDbM',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setMeUserId(data._id)
      return data;
    } catch (error) {
      throw new Error('Error fetching data: ' + error.message);
    }
  }


  const rightSwipe = async (userId) => {
    try {
      const response = await fetch('https://datepe.brandlyup.com/api/v1/match/wish/'+ userId, {
        method: 'POST',
        headers: {
          Accept: '*/*',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiIxMTU5NzgiLCJ1c2VySWQiOiI2NGQ0YmQwNzUxZmEyODg4NDA4MWEwYzMiLCJpYXQiOjE2OTQwNzc4NTcsImV4cCI6MTY5NDA4MTQ1N30.MkebqSN7FXvy4-TPgrSzgLVD6lffUZiEVrQIJB0aPnM',
        },
      });

      console.log('response', response);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if(data && data.isMatched) {
        navigation.navigate('S29');
      }
      console.log('data', data, response);
      return data;
    } catch (error) {
      throw new Error('Error fetching data: ' + error.message);
    }
  }

  // fetchData();
  // }, []);

  const [menu, setmenu] = useState(false);

  const handlemenu = () => {
    setmenu(true);
  };
  const handlemenuclose = () => {
    setmenu(false);
  };
  const handleDetail = () => {
    setmenu(false);
    setDetails(!details);
  }


  renderCard = (card) => {
    console.log(card);
    return (
      <View style={styles.profile}>
       
       
        <Pressable style={styles.hello}
          onPress={handleDetail}
        >
          <Image style={styles.pimage}
            source={photo ? { uri: photo } : require('../assets/pimage.png')}
          />
        </Pressable>
        
        {/* <Image
          style={styles.pimage}
          source={photo ? { uri: photo } : require('../assets/pimage.png')}
          // source={require("../assets/pimage.png")} resizeMode="cover"
        /> */}
        <View style={styles.details}>
          <Text style={styles.name}>
            {card.name},{' '}
            {card.dob && Math.floor((new Date() - new Date(dob)) / 31557600000)}
          </Text>
          <Text style={styles.disc}>I need a break</Text>
          <View style={styles.tags}>
            <Text style={styles.tag}>Anime</Text>
            <Text style={styles.tag}>Kdramas</Text>
          </View>
        </View>
      </View>
    );
  };

  onSwipedRight = (index) => {
    // Handle right swipe action here
    rightSwipe('64f17e8346a036bc00cc7302').then((data) => {
      console.log('ttttttttttt', data)
      navigation.navigate('S28message')
    })
    console.log(`Swiped right on card at index ${index}`);
  };

  onSwipedLeft = (index) => {
    // Handle left swipe action here
    console.log(`Swiped left on card at index ${index}`);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.topimg}
        source={require('../assets/datepe-images/home-animation-curve.png')}
      />
      <View style={styles.nav}>
        <Pressable onPress={handlemenu}>
          <Image style={styles.menu} source={require('../assets/menu.png')} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('S37')}>
          <Image
            style={styles.topicon}
            source={require('../assets/back.png')}
          />
        </Pressable>
        <Text style={styles.home}>HOME</Text>
        <Pressable onPress={() => navigation.navigate('S28message')}>
          <Image style={styles.chat} source={require('../assets/chat.png')} />
        </Pressable>
      </View>

      {nearByData && (<Swiper
        cards={nearByData}
        backgroundColor={'#fff0'}
        cardHorizontalMargin={40}
        marginBottom={70}
        renderCard={this.renderCard}
        onSwipedRight={this.onSwipedRight}
        onSwipedLeft={this.onSwipedLeft}
        stackSize={3} // Number of cards to stack at once
        cardVerticalMargin={120} // Vertical margin between cards
        stackSeparation={10} // Separation between stacked cards
      />)}
      
      <Pressable style={styles.btn}
      onPress={() => navigation.navigate('S37')}
      >
        <Text style={styles.match}>MATCH</Text>
      </Pressable>

      {menu && <S28menu handlemenuclose={handlemenuclose} />}
      {details && <Details handleclose={handleDetail} />}
    </View>
  );

  // return <Swiper
  //   cards={cards}
  //   renderCard={this.renderCard}
  //   onSwipedRight={this.onSwipedRight}
  //   onSwipedLeft={this.onSwipedLeft}
  //   stackSize={3} // Number of cards to stack at once
  //   cardVerticalMargin={20} // Vertical margin between cards
  //   stackSeparation={15} // Separation between stacked cards
  // />
}

const styles = StyleSheet.create({
  topicon: {
    width: 20,
    height: 20,
    position: 'absolute',
    // borderRadius: 50,
    // backgroundColor: 'white',
    right: -210,
    // width: '80%',
    top: 70,
  },
  hello: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  details: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  disc: {
    color: 'white',
    fontSize: 17,
  },
  tags: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: 'white',
    marginRight: 8,
    marginVertical: 3,
    borderRadius: 10,
    padding: 2,
  },

  match: {
    backgroundColor: '#AEC48A',
    fontSize: 20,
    marginHorizontal: '10%',
    textAlign: 'center',
    color: 'white',
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,

    width: '80%',
  },
  name: {
    fontSize: 20,
    color: 'white',
  },

  btn: {
    position: 'absolute',
    // borderRadius: 50,
    left: 0,
    right: 0,
    // width: '80%',
    // top: 0,
    bottom: 110
  },

  profile: {
    // width: '80%',
    // height: '60%',
    backgroundColor: 'yellow',
    // marginHorizontal: '10%',
    borderRadius: 20,
    // overflow: 'hidden',
    // justifyContent: "center",
    position: 'relative',
    // alignItems: "center",
  },
  home: {
    color: 'white',
    fontSize: 25,
  },
  topimg: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#292929',
    flex: 1,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    padding: 20,
    zIndex: 3,
  },
  menu: {
    width: 30,
    height: 30,
  },
  chat: {
    width: 30,
    height: 30,
  },
  pimage: {
    width: '100%',
    height: '100%',
  },
});

export default S28;
