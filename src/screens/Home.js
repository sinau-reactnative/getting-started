import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
