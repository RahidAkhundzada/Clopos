import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
const Wwidth = Dimensions.get('window').width;
const Wheight = Dimensions.get('window').height;

const Menu = props => {
  const navigation = useNavigation();
  let data1 = props.data.category;
  let galaxy =
    'https://scontent.fgyd3-1.fna.fbcdn.net/v/t1.0-9/s960x960/87988649_888585111574502_2596708068628627456_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=lzRegWoOAdcAX-ImGWM&_nc_ht=scontent.fgyd3-1.fna&_nc_tp=7&oh=534af8624073f741354af7d9f29b1aba&oe=5EE51789';

  const numColumns = 2;

  function imageView(par) {
    if (par) {
      return {uri: 'https://menu.galaxylounge.az' + par};
    } else {
      return {uri: galaxy};
    }
  }

  return (
    <View>
      <FlatList
        data={data1}
        numColumns={numColumns}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', margin: 20}}>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => navigation.navigate('Selected', {data: item})}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'red',
                  margin: 3,
                }}>
                {item.name}
              </Text>
              <Image
                source={imageView(item.image)}
                style={{height: Wwidth * 0.4, width: Wwidth * 0.4}}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}

      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    data: state.Data.data,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Menu);

const styles = StyleSheet.create({});
