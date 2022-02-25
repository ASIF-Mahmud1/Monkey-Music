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
           <FontAwesome name="google" size={24} color="black" />
           <Entypo name="facebook-with-circle" size={24} color="black" />
           <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={loginWithFacebook}>
                  Login with Facebook
           </FontAwesome.Button>
           </View>
               
      </View> 
   

      <TouchableOpacity  >
               
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  //  backgroundColor: 'black',
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
  social:{
    
  },
});