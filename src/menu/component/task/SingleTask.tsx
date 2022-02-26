import React,{Fragment,useState} from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome ,Entypo } from '@expo/vector-icons';
import ModalPage from '../../helper/component/Modal';
export type Props = {

    title?: string;
    status?:string
};

const SingleTask: React.FC<Props> = ({
    title = "",
    status=""

}) => {
    const [visible, setVisible]=useState(false)
    return (
      <Fragment>
          <View style={styles.container}>
            <View style={{borderColor:'grey',borderWidth:1, borderRadius:10}}>
                <Text style={[styles.text]}>{title}  </Text>
                <Text style={[styles.status]}>{status}  </Text>
            </View>    
            <TouchableOpacity style={styles.edit} onPress={()=>{ setVisible((state)=> !state  ) }} >
                <Entypo style={{ marginLeft: 10 }} name="sound-mix" size={24} color="black" />
                <Text style={{ marginLeft: 10,color:'grey' }}>{'Edit'}</Text>
            </TouchableOpacity>
          </View>
        <ModalPage modalVisible={visible}  setModalVisible={(value)=>{setVisible(value)}}  title={title} status={status} />
      </Fragment>

    );
};

const styles = StyleSheet.create({
    container: {
        display:'flex', 
        flexDirection:'row',
        marginTop:20
    },
    text:{
        borderRadius:20,
        paddingHorizontal:15,
        fontSize:20,
        marginRight:10,
        width:250
      },
      status:{
        paddingHorizontal:15,
        color:'grey',  
        fontSize:15,
        marginRight:10,
        width:250
      },
      edit:{
        fontSize:20,
        alignSelf:'center'
      }

});

export default SingleTask;