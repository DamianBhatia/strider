import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './styles'

export default LoginInputs = () => {

    return (
        <View style= {styles.TextInputContainer}>
           <View>
                <TextInput 
                    placeholder={'email'}
                    style= {styles.TextInput}
                    placeholderTextColor = 'white'
                />
                <TextInput
                    placeholder={"password"}
                    style= {styles.TextInput}
                    placeholderTextColor = 'white'
                />
           </View>
        </View>
    )
}