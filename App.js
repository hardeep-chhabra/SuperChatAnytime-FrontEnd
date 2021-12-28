import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import LoginScreen from './screens/LoginScreen';
import 'react-native-gesture-handler'
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddChatScreen from './screens/AddChat';


const Stack = createStackNavigator();

const globalScreenOptions = {
  // headerStyle: {backgroundColor:'blue'},
  // headerTitleStyle: {color: 'white'},
  // headerTintColor: 'white',
  headerShown: false
}

const App = () => {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA');

    return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='AddChat' component={AddChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'

  }
})
