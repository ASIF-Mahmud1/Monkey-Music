import React,{ useEffect, useState  } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './src/menu/container/SignUp';
import SignIn from './src/menu/container/SignIn'
import Events from  './src/menu/container/Events'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux'
import store from './src/menu/app/store'
import { useSelector } from 'react-redux'
import { getData } from './src/menu/helper/helper';


import { NavigationContainer } from '@react-navigation/native';
console.disableYellowBox = true;


const Stack = createNativeStackNavigator();
function Authorised() {
  let signedIn = useSelector(state => state.counter.user) ? true : false
  const [isSignedIn, setSignedIn] = useState(signedIn)
  useEffect(() => {
    getData('user', (value) => {
      if (value != null) {

        setSignedIn(true)
      }
    })
  }, [signedIn])


    return(
          <NavigationContainer>
              <Stack.Navigator screenOptions={{
                  title: '',   headerStyle: { backgroundColor: 'black', } , headerTintColor: 'white'     }  }
              >
                {
                  isSignedIn 
                  ?  <Stack.Screen name='Events' component={Events}/> 
                  :  <Stack.Screen name='SignUp' component={SignUp}/> 
                }
                
                 
            
              </Stack.Navigator>
            </NavigationContainer>
       
    )
}

export default function Root(){
  return (
    <Provider store={store}>
        <Authorised />
    </Provider>
  )
}

//  options={{headerShown:false}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
