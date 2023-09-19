import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const footer = () => {
  return (
    <Image
        style={styles.s1Item}
        resizeMode="contain"
        source={require('../assets/group-4.png')}
      />
  );
};

const styles = StyleSheet.create({
    s1Item: {
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
});

export default footer;