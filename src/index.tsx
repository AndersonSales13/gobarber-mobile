import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
          <Routes />
        </View>
      </AppProvider>
      <StatusBar backgroundColor="#312e38" barStyle="light-content" />
    </NavigationContainer>
  );
};

export default App;
