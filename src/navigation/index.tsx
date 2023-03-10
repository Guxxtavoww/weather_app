/* eslint-disable @typescript-eslint/ban-ts-comment */
import 'react-native-gesture-handler';
import { memo, createRef } from 'react';

import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens';
import { RootStackParamList } from './types';

function Navigation(): JSX.Element {
  const Stack = createStackNavigator<RootStackParamList>();
  const navigationRef = createRef<NavigationContainerRef<RootStackParamList>>();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: '#0d0d0d',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#0d0d0d',
            elevation: 0,
          },
          // @ts-ignore
          initalRouteName: 'Home',
        }}
      >
        <Stack.Screen component={Home} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default memo(Navigation);
