import React from 'react'
import { Text, StatusBar, View } from 'react-native'
import Home from './screens/home/Home'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default App = () => {

  let [fontsLoaded] = useFonts({
    'Monteserrat-Regular-400': require('./assets/fonts/Montserrat-Regular-400.ttf'),
    'Montserrat-Bold-700': require('./assets/fonts/Montserrat-Bold-700.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View>
        <StatusBar hidden />
        <Home />
      </View>
    )
  }
}