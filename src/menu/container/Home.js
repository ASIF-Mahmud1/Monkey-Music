import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput,TouchableOpacity } from 'react-native';

import { FontAwesome ,Entypo } from '@expo/vector-icons';
export default function Home() {
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.title}>Create{"\n"}an account </Text>
          <Text style={styles.subTitle}>Fill the details {"&"} create your account</Text>
      </View>
    
      <View style={{ paddingTop:60}  }> 
          <TextInput placeholder='User Name / Email ID' placeholderTextColor="white"  style={styles.input} />
          <TextInput placeholder='Password' placeholderTextColor="white"  style={styles.input}  />
          <TextInput placeholder='Confirm Password'  placeholderTextColor="white"  style={styles.input}  />
      </View>
      <TouchableOpacity  style={[styles.continue]}>
         <Text style={[styles.btnText]} >   Continue </Text>  
      </TouchableOpacity>     
      <View style={{alignItems:'center'}}>

           <Text  style={styles.input} > or sigin with</Text>
           <View style={{flexDirection:'row'}}> 
              <FontAwesome name="google" size={25} color="white"  style={[styles.socialGoogle]}/>
              <Entypo name="facebook-with-circle" size={40} color="#3b5998" style={[styles.socialFB]} />
           </View>
               
      </View> 

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
    paddingVertical:6,
    marginRight:30
  },
  socialFB:{
    backgroundColor:'white',
    borderRadius:1000,
    marginBottom:12,
  }
});