import React,{ useState  } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput,TouchableOpacity } from 'react-native';
import { FontAwesome ,Entypo } from '@expo/vector-icons';
import {signUp} from "../api/user-api"
import { Loader,showToast } from '../helper/component/Indicator';
import { useSelector, useDispatch } from 'react-redux'
import { signUpReducer} from '../features/user.Slice'
import { storeData } from '../helper/helper';
export default function SignUp({navigation}) {
   
  const [state,setState]= useState({
    email:'',
    password:'',
    confirmPassword:''
  })

  const [loading,setLoading]= useState(false)

  const count = useSelector(state => state.user.user)
  const dispatch = useDispatch()


  const handleChannge=(key,value)=>{
   
     setState({...state, [key]:value})
  
  }
  const registerUser = async () => {

   
    if (state.email === '' || state.password === '') {
     
      showToast('Enter details to signup!')

    } else {
       setLoading(true)
      const response = await signUp(state)
      if (!response.error) {
       
        showToast(response.message)
        setLoading(false)
        let user= {
          email:state.email,
          token: response.token
        }
        dispatch(signUpReducer(user))
        storeData('user', user)
      }
      else {
        
        showToast(response.error.code)
        setLoading(false)
      }
    }
  }

  const handleSocialSignIn=()=>{
    showToast("Stay tuned for the feature!")
  }
  const handleNavigation=()=>{
     navigation.navigate("Events")
  }
  return (
    <View style={styles.container}>

      <View>
          <Text style={styles.title}>Create{"\n"}an account </Text>
          <Text style={styles.subTitle}>Fill the details {"&"} create your account</Text>
      </View>
     
      <View style={{ paddingTop:60}  }> 
          <TextInput placeholder='User Name / Email ID' placeholderTextColor="white"  style={styles.input} value= {state.email} onChangeText={(value)=> handleChannge('email',value)}/>
          <TextInput placeholder='Password' placeholderTextColor="white"  style={styles.input} value= {state.password} onChangeText={(value)=>   handleChannge('password',value)} />
          <TextInput placeholder='Confirm Password'  placeholderTextColor="white"  style={styles.input}  value= {state.confirmPassword} onChangeText={(value)=>  handleChannge('confirmPassword',value)} />
      </View>
      <TouchableOpacity  style={[styles.continue]} onPress={registerUser}>
         <Text style={[styles.btnText]} >   Continue </Text>  
      </TouchableOpacity>     
      <View style={{alignItems:'center'}}>

           <Text  style={[styles.input,{borderWidth:0}]} > or sigin with</Text>
           <View style={{flexDirection:'row'}}> 
           <TouchableOpacity onPress={handleSocialSignIn} > 
               <Entypo name="facebook-with-circle" size={40} color="#3b5998" style={[styles.socialFB]} />
           </TouchableOpacity>
           <TouchableOpacity onPress={handleSocialSignIn}>
                 <FontAwesome name="google" size={25} color="white"  style={[styles.socialGoogle]}/>
             </TouchableOpacity>

           </View>
         
           <Loader loading={loading}  />
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
  }
});