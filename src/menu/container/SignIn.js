import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput,TouchableOpacity ,Image} from 'react-native';
import { logo } from '../helper/helper';
import { FontAwesome ,Entypo } from '@expo/vector-icons';
export default function SignIn({navigation}) {
  const imageUrl= logo
  const handleNavigation=()=>{
    navigation.navigate("SignUp")
  }
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subTitle}>Fill the details {"&"} login to your account</Text>
      </View>

      <View style={{ paddingTop:60}  }> 
          <Image source={{ uri: imageUrl }}  style={{height:200,width:200, alignSelf:'center' }}/>
          <TextInput placeholder='User Name or Email ' placeholderTextColor="white"  style={styles.input} />
          <TextInput  secureTextEntry={true} placeholder='Password' placeholderTextColor="white"  style={styles.input}  />
      </View>
      <TouchableOpacity  style={[styles.continue]}>
         <Text style={[styles.btnText]} >   Continue </Text>  
      </TouchableOpacity>     
      <View style={{alignItems:'center'}}>

        <View>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity style={[styles.signUp]} onPress={handleNavigation}>
            <Text style={[styles.signupText]} >   Sign Up </Text>
          </TouchableOpacity>
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
    paddingTop:8,
    paddingBottom:8,
  // marginBottom:15,
    marginLeft:30
  },
  socialFB:{
    backgroundColor:'white',
    borderRadius:1000,
    marginBottom:12,
  },
  signUp:{
     backgroundColor:"black",
     borderColor:"#ffa600",
     borderWidth:2,
  //   opacity:0.3,
     borderRadius:20,
     marginVertical:10,
     paddingHorizontal:15,
     paddingVertical:5,

  },
  signupText:{
    color:'#ffa600',
    textAlign:'center',
    fontSize:15,
    fontWeight:"bold"
  }
});