import React, {Fragment} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions} from 'react-native';

import Carousel from '../components/Home/Carousel';
import Search from '../components/Home/Search';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const Home = () => {
  const Title = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Focrito.</Text>
        <Text style={styles.subtitle}>
          Journey to the <Text style={{color: '#3faba4'}}>middle earth</Text>
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Title />
      <Carousel />
      <Search />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontFamily: 'OpenSansCondensed-LightItalic',
    color: '#104f7a',
  },
  subtitle: {
    fontSize: 10,
    color: '#0f4c75',
  },
});

export default Home;
