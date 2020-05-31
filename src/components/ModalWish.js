import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {ModalAction2} from '../../Redux/Action/ModalAction';
import {connect} from 'react-redux';
import {PHeight, PWidth} from './const';

const ModalLogin = props => {
  const onPress = () => {
    props.ModalAction2(false);
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
            <Text style={styles.modalText}>Welcome</Text>
            <Text>Write us offer or complaint</Text>

            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
              <TextInput
                style={styles.Input1}
                placeholder="Name"
                textContentType="name"
                keyboardType="twitter"
              />

              <TextInput
                style={styles.Input2}
                placeholder="Number"
                textContentType="telephoneNumber"
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.Input3}
                placeholder="Note"
                textContentType="none"
                keyboardType="default"
              />
            </KeyboardAvoidingView>
            <View style={styles.Login}>
              <TouchableOpacity style={styles.openButton1}>
                <Text>Send</Text>
              </TouchableOpacity>
              <TouchableHighlight
                style={{...styles.openButton1, backgroundColor: '#2196F3'}}
                onPress={() => onPress()}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    Modal: state.Modal.wish,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ModalAction2: value => {
      dispatch(ModalAction2(value));
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
    marginTop: 10,
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
    width: PWidth * 0.7,
  },
  Input2: {
    borderBottomWidth: 0.2,
    width: PWidth * 0.7,
  },
  Input3: {
    borderBottomWidth: 0.2,
    width: PWidth * 0.7,
    height: PHeight * 0.3,
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
