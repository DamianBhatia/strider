import React from 'react'
import {NativeRouter, Switch, Route } from 'react-router-native'
import { View } from 'react-native'
import Home from './screens/home/Home'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import Login from './screens/logIn/Login'
import Interest from './screens/interests/Interests'

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
        <View style={{flex:1}}>
          <Switch>
            <Route exact path="/" component={Login}/>
          </Switch>
          <Switch>
            <Route exact path="/interests" component={Interest}/>
          </Switch>
          <Switch>
            <Route exact path="/home" component={Home}/>
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}