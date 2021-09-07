import React, { useState, useRef} from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import styles from './styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../../utilities/colors';


export default SignUp = ({history}) => {    
    const [inputing, onInput] = useState(false)
    return (
        <ScrollView >
        <View style={styles.container}>
            <View style={styles.header}>
                <View style ={styles.icon}>
                    <FontAwesome5 name="user-circle" size={60} color={COLORS.primary}/>
                </View>
                <Text style={styles.h1}>Welcome</Text>
                <Text style={styles.h2}>Lets start off with your email and password</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.mainBody}>
                    <Text style={styles.Text}>Email:</Text>
                    <TextInput 
                        style={styles.Input}
                    />
                </View>
                <View style={styles.mainBody}>
                    <Text style={styles.Text}>Password:</Text>
                    <TextInput 
                        style={styles.Input}
                        secureTextEntry={true}
                        onFocus={()=>onInput(true)}
                    />
                </View>
            </View>
            <TouchableOpacity style = {styles.continue} onPress= {()=>history.push("/signup/name")}><Text>Continue --{'>'}</Text></TouchableOpacity>
        </View>
        </ScrollView>
       
    )
}