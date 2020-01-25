import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Personal = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Personal</Text>
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

export default Personal;
