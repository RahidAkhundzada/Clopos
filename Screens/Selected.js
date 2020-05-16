import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../src/components/Header';

const Selected = ({route}) => {
  const navigation = useNavigation();
  const {data} = route.params;

  let galaxy =
    'https://scontent.fgyd3-1.fna.fbcdn.net/v/t1.0-9/s960x960/87988649_888585111574502_2596708068628627456_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=lzRegWoOAdcAX-ImGWM&_nc_ht=scontent.fgyd3-1.fna&_nc_tp=7&oh=534af8624073f741354af7d9f29b1aba&oe=5EE51789';

  return (
    <View>
      <Header title={data.name} navigation={navigation} />
      <FlatList
        data={data.dishes}
        renderItem={({item}) => (
          <View style={{margin: 10, flexDirection: 'row'}}>
            <View>
              <Image
                source={{
                  uri:
                    'https://menu.galaxylounge.az' + item.image
                      ? 'https://menu.galaxylounge.az' + item.image
                      : galaxy,
                }}
                style={{height: 200, width: 200}}
              />
            </View>
            <View
              style={{
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 25, color: 'tomato', margin: 5}}
                numberOfLines={3}>
                {item.name}
              </Text>
              <Text style={{fontSize: 20, color: 'black', margin: 5}}>
                {item.price}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Selected;

const styles = StyleSheet.create({});
