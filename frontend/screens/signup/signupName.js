import React, { useState, useRef} from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import styles from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../../utilities/colors';


export default SignUpName = ({history}) => {    
    const [inputing, onInput] = useState(false)
    return (
        <ScrollView >
        <View style={styles.container}>
            <View style={styles.header}>
                <View style ={styles.icon}>
                <FontAwesome5 name="user-tag" size={60} color={COLORS.primary} />
                </View>
                <Text style={styles.h1}>Wonderful!!</Text>
                <Text style={styles.h2}>Now please input your full name</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.mainBody}>
                    <Text style={styles.Text}>First Name:</Text>
                    <TextInput 
                        style={styles.Input}
                    />
                </View>
                <View style={styles.mainBody}>
                    <Text style={styles.Text}>Last Name:</Text>
                    <TextInput 
                        style={styles.Input}
                        onFocus={()=>onInput(true)}
                    />
                </View>
            </View>
            <TouchableOpacity style = {styles.continue} onPress= {()=>history.push("/signup/education")}><Text>Continue --{'>'}</Text></TouchableOpacity>
        </View>
        </ScrollView>
       
    )
}