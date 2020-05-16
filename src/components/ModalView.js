import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Linking,
} from 'react-native';
import {ModalAction} from '../../Redux/Action/ModalAction';
import {connect} from 'react-redux';

const ModalView = props => {
  const onPress = () => {
    props.ModalAction(false);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.Modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={styles.modalText}
              onPress={() => Linking.openURL('http://www.Clopos.com')}>
              Go to Clopos.com
            </Text>
            <Text
              style={styles.modalText}
              onPress={() => {
                Linking.openURL('tel:+994705301040');
              }}>
             Call we +994 50 530 10 40
            </Text>
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
    Modal: state.Modal.info,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ModalAction: value => {
      dispatch(ModalAction(value));
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalView);
