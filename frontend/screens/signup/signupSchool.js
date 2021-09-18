import React, { useState, useRef} from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../utilities/colors';


export default SignUpSchool = ({history}) => {    
    const {firstname} = history.location.state
    const [school,onSchool] =useState('')
    const [program,onProgram] =useState('')
    const [year,onYear] =useState('')
    return (
        <ScrollView >
        <View style={styles.container}>
            <View style={styles.header}>
                <View style ={styles.icon}>
                    <Ionicons name="ios-school" size={70} color={COLORS.primary}/>
                </View>
                <Text style={styles.h1}>{`Welcome ${firstname}!`}</Text>
                <Text style={styles.h2}>Please input your current education status</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.mainBody}>
                    <Text style={styles.Text}>School</Text>
                    <TextInput 
                        style={styles.Input}
                        value = {school}
                        onChangeText={(text)=>onSchool(text)}
                    />
                </View>
                <View style={styles.mainBody}>
                    <Text style={styles.Text}>Program</Text>
                    <TextInput 
                        style={styles.Input}
                        value = {program}
                        onChangeText={(text)=>onProgram(text)}
                    />
                </View>
                <View style={styles.mainBody}>
                    <Text style={styles.Text}>Expected Graduation Year</Text>
                    <TextInput 
                        style={styles.Input}
                        value = {year}
                        onChangeText={(text)=>onYear(text)}
                    />
                </View>
            </View>
            <View style = {styles.continue}>
                <TouchableOpacity style={styles.next} onPress= {()=>history.push("/interests")}><Text style={styles.nextText}>Next {'>'}</Text></TouchableOpacity>
            </View>
        </View>
        </ScrollView>
       
    )
}