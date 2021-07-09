import React from 'react'
import {TouchableOpacity, Text, View, ImageBackground} from 'react-native'
import styles from './styles'



export default Login = ({history }) => (
    <View style = {styles.container}>
            <Text>This is the login Page</Text>
            <TouchableOpacity onPress={()=>history.push("/home")}>
                <Text style={{fontSize: 50}}>Home page</Text>
            </TouchableOpacity>
    </View>
)
