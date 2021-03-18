import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native-elements';

import Landing from './screen/Landing';
import HitApi from './screen/HitApi';
import Camera from './screen/Camera';
import Registrasi from './screen/Registrasi';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{title: 'Coding Test'}}
        />
        <Stack.Screen name="Hit_Api" component={HitApi} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Registrasi" component={Registrasi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
