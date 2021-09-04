import React, { useState } from 'react'
import {TouchableOpacity,Text} from 'react-native'
import styles from './styles'

export default SelectButton = (props) => {
    const { label } = props
    const [selected, setState] = useState(false)
    const color = selected ? styles.Selection_selected : styles.Selection
    const colorText = selected ? styles.SelectionText_selected : styles.SelectionText

    return (
        <TouchableOpacity onPress = {() => setState(!selected)} style={color}>
            <Text style ={colorText}>{label}</Text>
        </TouchableOpacity>
    )
}