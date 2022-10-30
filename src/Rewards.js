import React,{useContext,useEffect,useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { DataContext } from './DataProvider';
import { useIsFocused } from "@react-navigation/core";

const Rewards= () =>  {
    const {state} = useContext(DataContext);
    const[rewards,setRewards]=useState([]);
    const isFocused = useIsFocused();
    useEffect(()=>{
        const rew=state.filter(item => item.to === 'John Doe');
        setRewards(rew);
    },[isFocused]);

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
        data={rewards}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    
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
        height: 40,
        width: 50,
        backgroundColor: 'black',
        right: 10,
        borderRadius: 20,
      },

});

export default Rewards;
