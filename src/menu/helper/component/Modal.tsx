import React, { useState, useEffect } from 'react';
import { Platform, Alert, Modal, StyleSheet, Text, Pressable, View, TouchableWithoutFeedback, Keyboard, TextInput, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type Props = {
    modalVisible: boolean
    setModalVisible:  (value:boolean)=>void 

  }

const ModalPage: React.FC<Props> = ({ modalVisible, setModalVisible })=> {
    return(
        <View  style={styles.centeredView} >
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
         
                setModalVisible(!modalVisible)
            }}>
          <View style={styles.editLayout}>
              <Text>My Modal</Text>
              <TouchableOpacity onPress={ ()=>setModalVisible(!modalVisible)}>
                  <Text>Toggle</Text>
              </TouchableOpacity>
          </View>
        </Modal>
    </View>
    )
}

const styles = StyleSheet.create({
    queryFormContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
     
      },
    editLayout:{
        display:'flex',
        flexDirection:'row',  
         marginHorizontal: 25,
         marginTop:40,
         marginBottom:40,
         paddingTop:10
      },
    closeModal:{
        marginLeft:'auto'
      },
    title :{
      fontSize: 22,
      paddingTop:10
   
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      //  backgroundColor: 'rgba(0,0,0,0.5)',
    },
});



export default ModalPage;