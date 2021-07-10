import React from 'react'
import {NativeRouter, Switch, Route } from 'react-router-native'
import { Text, StatusBar, View } from 'react-native'
import Home from './screens/home/Home'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import Login from './screens/login/Login'

export default App = () => {

  // Loading fonts for use within all components
  let [fontsLoaded] = useFonts({
    'Monteserrat-Regular-400': require('./assets/fonts/Montserrat-Regular-400.ttf'),
    'Montserrat-Bold-700': require('./assets/fonts/Montserrat-Bold-700.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NativeRouter>
        <View>
          <StatusBar hidden/>
          <Switch>
            <Route exact path="/" component={Login}/>
          </Switch>
          <Switch>
            <Route exact path="/home" component={Home}/>
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}