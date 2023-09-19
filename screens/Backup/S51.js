import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo';

const S18 = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userId = '64d4bd0751fa28884081a0c3'; // Hardcoded userId

  const defaultUserData = {
    name: 'Default User',
    dob: 'N/A',
    email: 'N/A',
    mobileNo: 'N/A',
    // Add more default fields as needed
  };

  const requestUrl = `https://datepa.brandlyup.com/api/v1/match/matches/${userId}`;

  useEffect(() => {
    fetch(requestUrl, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.error(
            'Network response not ok:',
            response.status,
            response.statusText
          );
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        // navigation.navigate('S19'); // Consider whether you really want to navigate here
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setUserData(defaultUserData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // Removed 'navigation' from the dependency array since it's not needed

  return (
    <Screen>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : userData ? (
          <View>
            <Text>Name: {userData.name}</Text>
            <Text>Age: {userData.dob}</Text>
            <Text>Email: {userData.email}</Text>
            <Text>Mobile No: {userData.mobileNo}</Text>
          </View>
        ) : (
          <Text>No user data available.</Text>
        )}
      </View>
    </Screen>
  );
};

export default S18;
