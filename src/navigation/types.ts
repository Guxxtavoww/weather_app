import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: {};
};

export type RootStackRouteProps<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
