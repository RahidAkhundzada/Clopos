import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {ModalAction1} from '../../Redux/Action/ModalAction';
import {connect} from 'react-redux';
import {PHeight, PWidth} from './const';

const ModalLogin = props => {
  const onPress = () => {
    props.ModalAction1(false);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.Modal}
        overFullScreen="fullScreen">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Welcome Chef</Text>
            <Image source={require('../Image/chef.png')} />
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
              <TextInput style={styles.Input1} placeholder="Chef Name" />

              <TextInput
                style={styles.Input2}
                placeholder="Password"
                secureTextEntry
              />
            </KeyboardAvoidingView>
            <View style={styles.Login}>
              <TouchableOpacity style={styles.Login1}>
                <Text>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Login1}>
                <Text>Forget Password</Text>
              </TouchableOpacity>
            </View>

            <TouchableHighlight
              style={{...styles.openButton1, backgroundColor: '#2196F3'}}
              onPress={() => onPress()}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    Modal: state.Modal.admin,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ModalAction1: value => {
      dispatch(ModalAction1(value));
    },
  };
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: '80%',
    width: '90%',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  openButton1: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'blue',
  },
  Input1: {
    borderBottomWidth: 0.2,
    width: '70%',
  },
  Input2: {
    borderBottomWidth: 0.2,
    width: '70%',
  },
  Login: {
    flexDirection: 'row',
  },
  Login1: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalLogin);
