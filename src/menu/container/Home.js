import React,{useState} from 'react';
import { StyleSheet, Text, View , TextInput,TouchableOpacity } from 'react-native';

import CustomAlertComponent from './CustomAlert';
export default function Home() {
  const [showAlert,setAlert]= useState(false)
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.title}>Book{"\n"}your seat right away! </Text>
          <Text style={styles.subTitle}>To Confirm your seat click the button</Text>
      </View>
    
   
      <TouchableOpacity  style={[styles.continue]}>
         <Text style={[styles.btnText]} onPress={()=>setAlert(true)}>   Continue </Text>  
      </TouchableOpacity>     
      <CustomAlertComponent 
            displayAlert ={showAlert}  displayPositiveButton={true} displayNegativeButton={true} 
            negativeButtonText={"Cancel"}  positiveButtonText ={"Yes"} 
            onPressNegativeButton={()=>{setAlert(false);}} onPressPositiveButton ={()=>{setAlert(false); }}
            alertTitleText={'Book My Seat '}  alertMessageText={'Do you want to Confirm your Seat ?' }
          />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
   backgroundColor: 'black',
    paddingHorizontal:40,
    paddingTop:20
  },
  title:{
    color:'white',
    fontSize:25
  },
  subTitle:{
    color:'white',
    fontSize:15,
    opacity:0.6
  },
  input:{
    borderColor:'#ffa600',
    borderWidth:2,
    borderRadius:20,
    marginTop:15,
    paddingHorizontal:15,
    paddingVertical:6,
    color:'white',
    fontSize:15


  },
  continue:{
    backgroundColor:'#ffa600',
    borderRadius:20,
    marginVertical:20,
    paddingHorizontal:15,
    paddingVertical:10,

  },
  btnText:{
    textAlign:'center',
    color:'black', 
    fontSize:15
  }
  ,
  socialGoogle:{
    backgroundColor:'red',
    borderRadius:1000,
    marginVertical:1,
    marginBottom:10,
    paddingHorizontal:10,
    paddingTop:8,
    paddingBottom:8,
  // marginBottom:15,
    marginLeft:30
  },
  socialFB:{
    backgroundColor:'white',
    borderRadius:1000,
    marginBottom:12,
  }
});