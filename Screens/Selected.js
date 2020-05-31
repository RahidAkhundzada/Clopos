import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../src/components/Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Selected = ({route}) => {
  const navigation = useNavigation();
  const {data} = route.params;
  

  let galaxy =
    'https://scontent.fgyd3-1.fna.fbcdn.net/v/t1.0-9/s960x960/87988649_888585111574502_2596708068628627456_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=lzRegWoOAdcAX-ImGWM&_nc_ht=scontent.fgyd3-1.fna&_nc_tp=7&oh=534af8624073f741354af7d9f29b1aba&oe=5EE51789';

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });

  return (
    <SafeAreaView>
      <Header title={data.name} navigation={navigation} />
      <AnimatedFlatList
        data={data.dishes}
        scrollEventThrottle={16}
        renderItem={({item}) => (
          <View style={{margin: 10, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Image
                source={{
                  uri:
                    'https://menu.galaxylounge.az' + item.image
                      ? 'https://menu.galaxylounge.az' + item.image
                      : galaxy,
                }}
                style={{height: windowWidth * 0.4, width: windowWidth * 0.4}}
              />
            </View>

            <View
              style={{
                margin: 5,

                flex: 1,
              }}>
              <Text
                style={{fontSize: windowWidth / 15, color: 'tomato', margin: 5}}
                numberOfLines={3}>
                {item.name}
              </Text>
              <Text
                style={{fontSize: windowWidth / 15, color: 'black', margin: 5}}>
                {item.price}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        {...{onScroll}}
      />
    </SafeAreaView>
  );
};

export default Selected;

const styles = StyleSheet.create({});
