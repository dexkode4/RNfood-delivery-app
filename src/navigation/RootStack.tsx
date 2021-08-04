import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../screens/SplashScreen';
import {SignInScreen} from '../screens/SignInScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import { StatusBar } from 'react-native';

const RootStack = createStackNavigator();

export const RootStackNavigator = () => {
  return (
      <>
       <StatusBar backgroundColor='#009387' barStyle="light-content"/>
    <RootStack.Navigator 
    screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignIn" component={SignInScreen} />
      <RootStack.Screen name="SignUp" component={SignUpScreen} />
    </RootStack.Navigator>
    </>
  );
};
