/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApiScreen from './screens/ApiScreen';
import HomeScreen from './screens/HomeScreen';
import ReduxScreen from './screens/ReduxScreen';
import DesignScreen from './screens/DesignScreen';
import store from './redux/store';
import { Provider } from 'react-redux';

//allow travel between screen
 const Stack = createNativeStackNavigator();



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  
  <Provider store={store}>
  <NavigationContainer>

          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}
            options={{headerShown: false}} />
            <Stack.Screen name='Api Screen' component={ApiScreen}   options={{headerShown: false}}/>
            <Stack.Screen name='Redux Screen' component={ReduxScreen} options={{headerShown: false}} />
            <Stack.Screen name='Design Screen' component={DesignScreen} 
            options={{headerShown: false}}/>
          </Stack.Navigator>


  </NavigationContainer>
  </Provider>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
