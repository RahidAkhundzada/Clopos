/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useEffect} from 'react';
import {Animated, Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {DataAction} from '../Redux/Action/DataAction';

const Opening = ({DataAction}) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getData();
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }, 0);
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }, 2000);
    setTimeout(() => {
      navigation.navigate('Home');
    }, 4000);
  }, [fadeAnim, getData, navigation]);

  const getData = async () => {
    const response = await fetch('https://menu.galaxylounge.az/data.json');
    const data = await response.json();
    DataAction(data);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim, // Bind opacity to animated value
          },
        ]}>
        <Image
          source={require('../src/Image/Clopos.png')}
          style={{height: 200, width: 200}}
        />
        <Text style={styles.fadingText}>Clopos</Text>
      </Animated.View>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    DataAction: value => {
      dispatch(DataAction(value));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Opening);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  fadingText: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: 'navy',
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});
