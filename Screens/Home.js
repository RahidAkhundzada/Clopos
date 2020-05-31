import React, {useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Dimensions, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../src/components/Header';
import HomeButton from '../src/components/HomeButton';
import ModalView from '../src/components/ModalView';
import ModalLogin from '../src/components/ModalLogin';
import ModalWish from '../src/components/ModalWish';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = props => {
  const navigation = useNavigation();

  const Modals = () => {
    return (
      <View>
        <ModalView />
        <ModalLogin />
        <ModalWish />
      </View>
    );
  };

  const pic = [
    [
      require('../src/Image/menu.png'),
      require('../src/Image/Lunch.png'),
      require('../src/Image/food.png'),
    ],
    [
      require('../src/Image/wishlist.png'),
      require('../src/Image/admin.png'),
      require('../src/Image/info.png'),
    ],
  ];

  let rows = [];

  for (let i = 0; i < 2; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <HomeButton
          img={pic[i][j]}
          navigation={navigation}
          key={i * j + i + j}
        />,
      );
    }
    rows.push(<View style={styles.row}>{row}</View>);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleStyle}>
        <Header title="Galaxy Lounge" isHome={true} />
      </View>

      <View style={styles.imageStyle}>
        <Image
          source={require('../src/Image/Galaxy.jpg')}
          style={{width: windowWidth, height: windowHeight / 3}}
        />
      </View>

      <View style={styles.ButtonStyle}>{rows}</View>
      <Modals />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    flex: 1,
  },
  imageStyle: {
    flex: 4,
  },
  ButtonStyle: {
    flex: 7,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
