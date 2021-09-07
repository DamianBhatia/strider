import React from 'react'
import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import styles from './styles'
import Icon from '../../node_modules/@expo/vector-icons/Ionicons'
import { COLORS } from '../../utilities/colors'
import SelectButton from '../../components/selectButton/SelectButton'
import CustomTextInput from '../../components/customTextInput/CustomTextInput'

/**
 * The Interests Component allows 
 * a user to input what jobs they are interested in
 */
export default Interests = ({history}) => {    

    var interests = ['software engineer', 'data scientist', 'biologist', 'veterinarian', 'professor'];

    return (
        <ScrollView>
            <View style = {styles.container}>
                <View style = {styles.titleContainer}>
                    <View style = {styles.title}>
                        <Icon name="briefcase" color = {COLORS.primary} size={80}></Icon>
                        <Text style={styles.h1}> Last Step.</Text>
                        <Text style={styles.titleText}> Select the jobs you are interested in.</Text>
                    </View>
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