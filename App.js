import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import MyTabs from './src/MyTabbs';

const App= () =>  {

  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.row}>
          <Image
            style={styles.profileImg}
            source={{
              uri: 'https://p.kindpng.com/picc/s/22-223910_circle-user-png-icon-transparent-png.png',
            }}
            resizeMode={"cover"}
          />
          <View style={styles.colStyle}>
            
              <Text style={styles.txtStyle}>Jane Doe</Text>
              <View style={{flexDirection:"row"}}>
              <Text style={styles.txtLeft}>
                Given <Text style={styles.txtRight}>$100</Text> 
              </Text>

              <Text style={styles.txtLeft}>
               {" / Recieved"} <Text style={styles.txtRight}>$250</Text> 
              </Text>
              </View>
          </View>
          
      </View>
      <MyTabs/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    constainer:{
      flex:1
    },
    row:{
      flexDirection:"row",
      backgroundColor:"#F5F5F5",
      paddingVertical:30,
      paddingHorizontal:15
    },
    profileImg:{
      height:70,
      width:70,
      borderRadius:70/2
    },
    txtStyle:{
      fontSize:16,
      fontWeight:"bold",
      color:"#000"
    },
    colStyle:{
      justifyContent:"center",
      paddingStart:10
    },
    txtLeft:{
      fontSize:13,
    },
    txtRight:{
      fontSize:13,
      fontWeight:"bold",
      color:"#000"
    }
});

export default App;
