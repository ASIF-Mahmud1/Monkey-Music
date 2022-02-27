import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './src/menu/container/SignUp';
import SignIn from './src/menu/container/SignIn'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
console.disableYellowBox = true;


const Stack = createNativeStackNavigator();
export default function Authorised(){
    return(
      <NavigationContainer>
          <Stack.Navigator screenOptions={{
              title: '',   headerStyle: { backgroundColor: 'black', } , headerTintColor: 'white'     }  }
          >
              <Stack.Screen name='SignIn' component={SignIn} /> 
              <Stack.Screen name='SignUp' component={SignUp}/>
             
          </Stack.Navigator>
        </NavigationContainer>
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
