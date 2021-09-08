import React from 'react'
import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import styles from './styles'
import SelectButton from '../../components/selectButton/SelectButton'
import CustomTextInput from '../../components/customTextInput/CustomTextInput'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { COLORS } from '../../utilities/colors'

/**
 * The Interests Component allows 
 * a user to input what jobs they are interested in
 */
export default Interests = ({history}) => {    

    var interests = ['software engineer', 'data scientist', 'biologist', 'veterinarian', 'professor'];

    return (
        <ScrollView>
            <View style = {styles.container}>
                <View style={styles.header}>
                    <View style ={styles.icon}>
                        <FontAwesome5 name="briefcase" size={70} color={COLORS.primary}/>
                    </View>
                    <Text style={styles.h1}>Last Step</Text>
                    <Text style={styles.h2}>Select the type of positions you are interested in applying for</Text>
                </View>
                <CustomTextInput />
                <View style={styles.SelectionContainer}>
                    {interests.map((label)=><SelectButton key={label} label={label}/>)} 
                 </View>
                <TouchableOpacity style = {styles.continue} onPress= {()=>history.push("/home")}><Text>Continue --{'>'}</Text></TouchableOpacity>
            </View>
        </ScrollView>
       
    )
}