import React, {useState, useEffect} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const RNModal = ({modalVisible, setModalVisible, state, setState}) => {
  
  const [data, setData] = useState({
    id: state.id,
    img: 'https://p.kindpng.com/picc/s/22-223910_circle-user-png-icon-transparent-png.png',
    to: '',
    amt: '',
    message: '',
    date: 'Oct 28,2022',
  });
  const increment = () => {
    let id = data.id;
    setData({...data, id: id + 1});
  };
  useEffect(() => {
    increment();
  }, []);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <Text style={styles.txtStyle}>Give Reward</Text>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.label}>To</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => {
                setData({...data, to: value});
              }}
              value={data?.to}
            />

            <Text style={[styles.label, {marginTop: 10}]}>Amount</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => {
                setData({...data, amt: value});
              }}
              keyboardType={'numeric'}
              value={data?.amt}
            />

            <Text style={[styles.label, {marginTop: 10}]}>Message</Text>
            <TextInput
              style={[styles.input, {height: 80}]}
              onChangeText={value => {
                setData({...data, message: value});
              }}
              multiline={true}
              value={data?.message}
            />

            <TouchableOpacity
              style={styles.btnStyle}
              onPress={() => {
                setState([...state, {...data}]);
                setModalVisible(false);
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Give</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.floatingMenuButtonStyle}
            onPress={() => setModalVisible(false)}>
            <Image
              style={{width: 25, height: 25}}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCh1-tVuO8dzKUvEIUDMZEE9on6tzEWrHFAlE3ZFfNjCMIrB-SNk3rHmhBejUd_pfBjNA&usqp=CAU',
              }}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
    backgroundColor: '#000',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 50,
  },
  txtStyle: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    paddingVertical: 30,
  },
  label: {
    color: 'grey',
    paddingStart: 42,
    alignSelf: 'flex-start',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    color: 'white',
  },
  btnStyle: {
    height: 45,
    width: '70%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  floatingMenuButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 50,
    backgroundColor: 'black',
    right: 10,
    borderRadius: 20,
  },
});

export default RNModal;
