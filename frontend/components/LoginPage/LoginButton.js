import React  from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default LoginButton = (props) => {
    const {history, label, icon, onPress} = props
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress = {onPress}>
                {icon}
                <Text style={styles.buttonText}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}