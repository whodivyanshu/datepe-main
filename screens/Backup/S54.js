import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const S54 = () => {
  const [matchedData, setMatchedData] = useState(null);
  const userId = '64cdf0a568218cd1cc898ff1'; // Hardcoded userId

  const handleUnmatch = async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo'; // Replace with your actual token

    try {
      const response = await fetch(
        `https://datepa.brandlyup.com/api/v1/match/unmatch/${userId}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMatchedData(data);
        console.log('Matched data:', data);
      } else {
        console.error('Failed to fetch matched data');
        // Implement error handling logic if needed
      }
    } catch (error) {
      console.error('Error fetching matched data:', error);
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Unmatched User</Text>
        <Text style={styles.userId}>User ID: {userId}</Text>
        <Button title="Fetch Matched Data" onPress={handleUnmatch} />

        {matchedData && <Text>Matched Data: {JSON.stringify(matchedData)}</Text>}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userId: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default S54;
