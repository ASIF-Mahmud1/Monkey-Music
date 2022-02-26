import React, { useState, useEffect, Fragment } from 'react';
import { Platform, Alert, Modal, StyleSheet, Text, Pressable, View, TouchableWithoutFeedback, Keyboard, TextInput, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { FontAwesome ,Entypo } from '@expo/vector-icons';

type Props = {
    modalVisible: boolean
    setModalVisible:  (value:boolean)=>void 
    title :string
    status: string

  }

type Status={
  currentStatus: string
}

const StatusList: React.FC<Status>  =({currentStatus })=>{
  const statusList= ["Open", "Working", "Completed"]
  return (
    <Fragment>
    {
      statusList.map((item)=>{
           return  <TouchableOpacity  style={{flexDirection:'row', alignItems:'center',paddingVertical:10}}>
           <Text style={{width:200, fontSize:20,fontStyle:'italic'}}>{item}</Text>
            {
              item.toLowerCase()===currentStatus.toLowerCase() &&  <Entypo style={{ marginLeft: 10,color:'green' }} name="check" size={24} color="black" />
            }
          
         </TouchableOpacity>
      })
    }
    </Fragment>
  )
}
const ModalPage: React.FC<Props> = ({ modalVisible, setModalVisible,title,status })=> {
    return(
        <View>
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)
            }}>
          <View style={styles.container}>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity onPress={ ()=>setModalVisible(!modalVisible)}>
                  <Text>{title}</Text>
              </TouchableOpacity>
              <View>
                <StatusList currentStatus= {status} />
              </View>
              <TouchableOpacity style={styles.confirm} onPress={()=>  setModalVisible(!modalVisible)}>
                <Text style={styles.confirmText}>Confirm</Text>
              </TouchableOpacity>
          </View>
         
        </Modal>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems:'center',
      paddingHorizontal: 40,
      paddingTop: 40
    },
    title:{
      fontSize:25,
      fontStyle:'italic',
      color:'grey'
    },
    confirm:{
      height:50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#301934',
      width: 300,
      marginBottom:20,
      borderRadius:10,
    },
    confirmText:{
      color:"white", 
      fontWeight:"bold",
      fontSize:20
    }

});


export default ModalPage;