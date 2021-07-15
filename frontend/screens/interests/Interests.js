import React from 'react'
import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import styles from './styles'
import Icon from '../../../node_modules/@expo/vector-icons/Ionicons'
import { COLORS } from '../../utilities/colors'
import SelectButton from '../../components/selectButton/SelectButton'
import SampleInterestsdata from '../../../backend/sampleDataBase/SampleInterestsdata'
import CustomTextInput from '../../components/customTextInput/CustomTextInput'


export default Interests = ({history}) => {
    const interests = SampleInterestsdata()
    return (
        <ScrollView>
            <View style = {styles.container}>
                <View style = {styles.titleContainer}>
                    <View style = {styles.title}>
                        <Icon name="briefcase" color = {COLORS.primary} size={80}></Icon>
                        <Text style={styles.titleText}> Select the jobs you are interested in.</Text>
                    </View>
                </View>
                <CustomTextInput />
                <View style={styles.SelectionContainer}>
                    {interests.map((label)=><SelectButton key={label} label={label}/>)} 
                </View>
                <TouchableOpacity onPress= {()=>history.push("/home")}><Text>Continue --{'>'}</Text></TouchableOpacity>
            </View>
        </ScrollView>
       
    )
}