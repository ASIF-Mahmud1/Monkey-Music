import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './src/menu/container/SignUp';
import User from './src/menu/container/User'
import Task from './src/menu/container/Task'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux'
import {store} from './src/menu/app/store'
import { NavigationContainer } from '@react-navigation/native';
console.disableYellowBox = true;


const Stack = createNativeStackNavigator();
export default function Authorised(){
    return(
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name='Task' component={Task}/>
                  <Stack.Screen name='SignUp' component={SignUp} /> 
              </Stack.Navigator>
            </NavigationContainer>
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
