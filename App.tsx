import "./global.css"
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
} from 'react-native';


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <View className="flex-1 bg-red-400 w-full h-full">
          <Text>Hola</Text>
      </View>
    </NavigationContainer>
  );
}


export default App;
