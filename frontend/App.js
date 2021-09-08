import React from 'react'
import {NativeRouter, Switch, Route } from 'react-router-native'
import { View } from 'react-native'
import Home from './screens/home/Home'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import Login from './screens/logIn/Login'
import Interest from './screens/interests/Interests'
import Signup from './screens/signup/Signup'
import signupSchool from './screens/signup/signupSchool'

export default App = () => {

  // Loading fonts for use within all components
  let [fontsLoaded] = useFonts({
    'Montserrat-Regular-400': require('./assets/fonts/Montserrat/Montserrat-Regular-400.ttf'),
    'Montserrat-Bold-700': require('./assets/fonts/Montserrat/Montserrat-Bold-700.ttf'),
    'Montserrat-Medium-500': require('./assets/fonts/Montserrat/Montserrat-Medium-500.ttf'),
    'Aleo-Regular': require('./assets/fonts/Aleo/Aleo-Regular.otf'),
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
            <Route exact path="/signup" component={Signup}/>
         </Switch>
         <Switch>
            <Route exact path="/signup/education" component={signupSchool}/>
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