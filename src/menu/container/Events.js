import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Item from '../component/Item'
import { itemList } from '../../../assets/data/item';
export default function Featured() {

  const featured= itemList.filter((ele)=> ele.featured)
  const handleAddEvent=(id)=>{   }
  
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <ScrollView  style={{ margin: 2 }}>

        {
          featured.map((item) => {
            return   <Item details={item} handleAddEvent={handleAddEvent} />
          })
        }
    </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:'black',
   alignItems:'center'
  },
  title :{
    color:'#ffa600', 
    fontSize:20,
    margin:5
  }
});