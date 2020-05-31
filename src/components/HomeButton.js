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
import {
  ModalAction,
  ModalAction1,
  ModalAction2,
} from '../../Redux/Action/ModalAction';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeButton = ({
  img,
  ModalAction,
  ModalAction1,
  ModalAction2,
  DataAction,
  navigation,
  key,
}) => {
  const onPress = () => {
    if (img === require('../Image/info.png')) {
      ModalAction(true);
    } else if (img === require('../Image/admin.png')) {
      ModalAction1(true);
    } else if (img === require('../Image/wishlist.png')) {
      ModalAction2(true);
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
    ModalAction1: value => {
      dispatch(ModalAction1(value));
    },
    ModalAction2: value => {
      dispatch(ModalAction2(value));
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
    height: windowWidth / 3.5,
    width: windowWidth / 3.5,
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(HomeButton);
