import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Hiking = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Hiking</Text>
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

export default Hiking;
