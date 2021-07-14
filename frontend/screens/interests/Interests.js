import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import styles from './styles'
import Icon from '../../../node_modules/@expo/vector-icons/Ionicons'
import { COLORS } from '../../utilities/colors'
import SelectButton from '../../components/selectButton/SelectButton'
import SampleInterestsdata from '../../../backend/sampleDataBase/SampleInterestsdata'


export default Interests = () => {
    const interests = SampleInterestsdata()
    return (
        <View style = {styles.container}>
            <View style = {styles.titleContainer}>
                <View style = {styles.title}>
                    <Icon name="briefcase" color = {COLORS.primary} size={80}></Icon>
                    <Text style={styles.titleText}> Select the jobs you are interested in.</Text>
                </View>
            </View>
            <View style={styles.SelectionContainer}>
                {interests.map((label)=><SelectButton key={label} label={label}/>)} 
            </View>
                
           
        </View>
    )
}