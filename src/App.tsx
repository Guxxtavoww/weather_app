import React from 'react';
import { StatusBar } from 'react-native';

import Navigation from 'navigation';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" animated backgroundColor="#00aaff" />
    <Navigation />
  </>
);

export default App;
