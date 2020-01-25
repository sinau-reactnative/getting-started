import React, {Fragment} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const Home = () => {
  const Carousel = () => {
    return (
      <Fragment>
        <ScrollView
          style={styles.carouselContainer}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/mountain_1.jpeg')}
            />
            <View style={styles.imageOverlay} />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/mountain_2.jpeg')}
            />
            <View style={styles.imageOverlay} />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/mountain_3.jpeg')}
            />
            <View style={styles.imageOverlay} />
          </View>
        </ScrollView>
      </Fragment>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Carousel />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  carouselContainer: {
    padding: 15,
  },
  imageContainer: {
    marginRight: 10,
    width: SCREEN_WIDTH / 1.2,
    height: SCREEN_HEIGHT / 2.5,
  },
  imageOverlay: {
    backgroundColor: 'rgba(255, 182, 117, 0.3)',
    position: 'absolute',
    zIndex: 1,
    width: SCREEN_WIDTH / 1.2,
    height: SCREEN_HEIGHT / 2.5,
    borderRadius: 10,
  },
  imageStyle: {
    width: SCREEN_WIDTH / 1.2,
    height: SCREEN_HEIGHT / 2.5,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default Home;
