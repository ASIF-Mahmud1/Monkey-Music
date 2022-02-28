import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';
export default function Item({details, handleAddEvent}) {
  const {imageUrl, name, date,address ,id} =details
 
  const pressOnCart=()=>{
    handleAddEvent(id)
  }
  
  return (
    <View style={[styles.container,]}>

      <TouchableOpacity  onPress={pressOnCart}>
        <Image source={{ uri: imageUrl }} style={styles.itemImg} />
        <Text style={styles.title}> {name}</Text>
        <Text  style={styles.title}> {date}</Text>
        <Text  style={styles.title}> {address}</Text>
     
       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom:60,
    borderRadius:10,
    marginHorizontal:15
  },
  cart: {
    backgroundColor:'#50C878',
    //opacity:0.8

  },
  btn:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red',
    width: 300,
    marginBottom:10,
    color:'red',
    borderRadius:10
  },
  text :
  {
    color:'white',
   fontSize:15,
   fontWeight:'bold',
   fontStyle:"italic",
   marginRight:5
  },
  trashImg:{
    marginRight:0,
    width: 30, 
    height: 25 ,
    borderRadius:20
  },

  cartImg:{
    marginRight:0,
    width: 25,
    height: 22 ,
    borderRadius:30
  },

  itemImg:{
    width: 300, 
    height: 250 ,
    borderRadius:10
  },
  title:{
    color:'#ffa600', 
  }
});