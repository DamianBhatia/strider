import React from 'react'
import {View,Text} from 'react-native'
import styles from './styles'
/**currently not working will explore this component later */
const ErrorText = ({error}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{error}</Text>
        </View>
    )
}

export default ErrorText