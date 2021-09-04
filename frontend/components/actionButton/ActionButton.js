import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default ActionButton = ({size, icon, color}) => {
    const styles = StyleSheet.create({
        btn: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: size*2.5,
            height: size*1.5,
            borderRadius: 10,
            backgroundColor: 'white',
            shadowColor: 'black',
            shadowOffset: {
                x: 1,
                y: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 2
        }
    })

    return (
        <TouchableOpacity style={styles.btn}>
            <FontAwesome5 name={icon} size={size} color={color} />
        </TouchableOpacity>
    )
}
