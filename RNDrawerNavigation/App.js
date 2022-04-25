/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserScreen from './Screens/UserScreen';
import WelcomScreen from './Screens/WelcomeScreen';

let Drawer = createDrawerNavigator();

function App() {
  return ( 
    <NavigationContainer>
      <Drawer.Navigator screenOptions = {{
         drawerLabel: "Welcome Screen",
         drawerActiveBackgroundColor:'gray',
         drawerActiveTintColor: 'white',
         drawerStyle: {backgroundColor:'yellow'}
      }}>
        <Drawer.Screen name="UserScreen" component={UserScreen} options = {{
          headerStyle: {backgroundColor: 'red'}, 
          headerTintColor: 'black',
        }}/>
        <Drawer.Screen name="WelcomScreen" component={WelcomScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
