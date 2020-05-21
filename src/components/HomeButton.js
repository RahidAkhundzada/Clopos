import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {DataAction} from '../../Redux/Action/DataAction';
import {ModalAction} from '../../Redux/Action/ModalAction';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeButton = ({img, ModalAction, DataAction, navigation, key}) => {
  const onPress = () => {
    if (img === require('../Image/info.png')) {
      ModalAction(true);
    } else if (img === require('../Image/menu.png')) {
      setTimeout(() => {
        navigation.navigate('Galaxy E-menu');
      }, 2000);
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={img} style={styles.imageStyle} />
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    ModalAction: value => {
      dispatch(ModalAction(value));
    },
    DataAction: value => {
      dispatch(DataAction(value));
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  imageStyle: {
    resizeMode: 'contain',
    height:windowWidth/3.5,
    width:windowWidth/3.5
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(HomeButton);
