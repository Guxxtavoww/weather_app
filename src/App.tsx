import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" animated backgroundColor="#00aaff" />
      <View>
        <Text style={{ fontSize: 50 }}>Olá, mundo!</Text>
      </View>
    </>
  );
};

export default App;
