import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/menu/container/Home';
import User from './src/menu/container/User'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
console.disableYellowBox = true;


const Stack = createNativeStackNavigator();
export default function Authorised(){
    return(
      <NavigationContainer>
          <Stack.Navigator screenOptions={{
              title: '',   headerStyle: { backgroundColor: 'black', }, }}
          >
              <Stack.Screen name='Home' component={Home}/>
              <Stack.Screen name='User' component={User} /> 
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
