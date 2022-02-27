import React, { useState, useEffect, Fragment } from 'react';
import { Platform, Alert, Modal, StyleSheet, Text, Pressable, View, TouchableWithoutFeedback, Keyboard, TextInput, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { FontAwesome ,Entypo } from '@expo/vector-icons';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { updateStatus } from '../../features/taskSlice'
type Task = {
  title: string
  status: string
  id: number
}
type Props = {
    modalVisible: boolean
    setModalVisible:  (value:boolean)=>void 
    title :string
    status: string,
    id:number

  }

type Status={
  currentStatus: string
  handleParentState:  (value:string)=>void 
}

const StatusList: React.FC<Status>  =({currentStatus,handleParentState })=>{
  const statusList= ["Open", "Working", "Completed"]
  return (
    <Fragment>
    {
      statusList.map((item)=>{
           return  <TouchableOpacity key= {item} style={{flexDirection:'row', alignItems:'center',paddingVertical:10}} onPress={()=>{handleParentState(item)}}>
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
const ModalPage: React.FC<Props> = ({ modalVisible, setModalVisible,title,status,id })=> {
    const [taskStatus,setTaskStatus]=useState(status)
    const dispatch = useAppDispatch()

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
              <View>
                <StatusList currentStatus= {taskStatus} handleParentState={(value)=>{setTaskStatus(value)}} />
              </View>
              <TouchableOpacity style={styles.confirm} onPress={()=>{ dispatch(updateStatus({title,status:taskStatus,id})) ;setModalVisible(!modalVisible) ;  }}>
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