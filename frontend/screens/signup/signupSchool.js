import React, { useState, useRef} from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../utilities/colors';


export default SignUpSchool = ({history}) => {    
    const [inputing, onInput] = useState(false)
    return (
        <ScrollView >
        <View style={styles.container}>
            <View style={styles.header}>
                <View style ={styles.icon}>
                <Ionicons name="ios-school" size={70} color={COLORS.primary}/>
                </View>
                <Text style={styles.h1}>Almost There</Text>
                <Text style={styles.h2}>Please input your current education status</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.mainBody}>
                    <Text style={styles.Text}>Institution Name:</Text>
                    <TextInput 
                        style={styles.Input}
                    />
                </View>
                <View style={styles.mainBody}>
                    <Text style={styles.Text}>Program:</Text>
                    <TextInput 
                        style={styles.Input}
                        secureTextEntry={true}
                        onFocus={()=>onInput(true)}
                    />
                </View>
            </View>
            <TouchableOpacity style = {styles.continue} onPress= {()=>history.push("/Interests")}><Text>Continue --{'>'}</Text></TouchableOpacity>
        </View>
        </ScrollView>
       
    )
}