import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TextInput, Button } from 'react-native';

const S53 = () => {
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

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVObyI6Ijk5OTk5OTk5OTkiLCJvdHAiOiJyQzBOemsiLCJ1c2VySWQiOiI2NGNkZjBhNTY4MjE4Y2QxY2M4OThmZjEiLCJpYXQiOjE2OTEyMTg2OTIsImV4cCI6MTY5MTIyMjI5Mn0.F8jVa-3E3lhv4ZafNNYTFTBf3Dc5ZeFU_post87BwDo'; // Replace with your actual token

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
      <View>
        <Text>Account Settings:</Text>
        <Text>Phone Number: {settings.account.phoneNumber}</Text>
        <TextInput
          value={editedPhoneNumber}
          onChangeText={setEditedPhoneNumber}
          placeholder="Edit Phone Number"
        />
        <Text>Email: {settings.account.email}</Text>
        <TextInput
          value={editedEmail}
          onChangeText={setEditedEmail}
          placeholder="Edit Email"
        />
        <Text>
          Notifications: {settings.account.Notification ? 'Enabled' : 'Disabled'}
        </Text>

        <Button title="Save Changes" onPress={updateSettings} />

        <Text>Chat Settings:</Text>
        <Text>
          Read Receipts:{' '}
          <Switch value={settings.chat.controlWhoMsgU.readReceipt} enable />
        </Text>
        <Text>
          Activity Status:{' '}
          <Switch value={settings.chat.controlWhoMsgU.activityStatus} enable />
        </Text>
      </View>
    </Screen>
  );
};


export default S53;
