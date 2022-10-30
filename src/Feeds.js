import React, {useState,useContext} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { DataContext } from './DataProvider';
import RNModal from './RNModal';

const Feeds = () => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const {state,setState} = useContext(DataContext);
  const renderItem = ({item}) => (
    <View style={styles.row}>
      <Image style={styles.profileImg} source={{uri:item.img}}/>
      <View style={styles.colStyle}>
        <Text style={styles.txtStyle}>{item.message}</Text>
        <Text style={styles.txtLeft}>{item.to}</Text>
        <Text style={styles.txtLeft}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    
   
    <SafeAreaView style={styles.constainer}>
      <FlatList
        data={state}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity
        style={styles.floatingMenuButtonStyle}
        onPress={() => setModalVisible(true)}>
        <Image
          style={{width: 25, height: 25}}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEUAAAD///+5ubnBwcGrq6uurq58fHyBgYG9vb3FxcXr6+vo6Oju7u4R85AJAAABZklEQVR4nO3dgXHCMBREQQcsY5P0X29aYLAY3w37Krgt4EvLMrttrO83HtP3zG//OdNx9fwXup0S3q+e/0KEhPkREuZHSJgfIWF+hIT5ERLmR0iYHyFhfoSE+RES5kdImB8hYX6EhPkREuZHSJgfIWF+hIT5ERLmR0iYHyFhfoSE+RES5kdImB8hYX6EhPkREk5v229z+z0lfE5es2/LODUov7GsV0/4cCthfYT9EfZH2B9hf4T9EfZH2B9hf4T9EfZH2B9hf4T9EfZH2B9hf4T9EfZH2B9hf4T9EfZH2B9hf4T9EfZH2B9hf+sX3D09jvvcnqcG/U1ec3zgO/q4+8PpERLmR0iYHyFhfoSE+RES5kdImB8hYX6EhPkREuZHSJgfIWF+hIT5ERLmR0iYHyFhfoSE+RES5kdImB8hYX6EhPkREuZHSJgfIWF+hIT5ERLmR0iY335KeFw9/4W2sb7fmP9gzj+qpWZliUWWIQAAAABJRU5ErkJggg==',
          }}
        />
      </TouchableOpacity>
      <RNModal modalVisible={modalVisible} setModalVisible={setModalVisible} state={state} setState={setState}/>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
  },
  txtStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    flexShrink: 1,
  },
  colStyle: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  txtLeft: {
    fontSize: 10,
  },
  floatingMenuButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 35,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 60,
    backgroundColor: 'black',
    right: 10,
    borderRadius: 25,
  },
});

export default Feeds;
