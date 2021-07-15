import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity, View } from 'react-native'
import styles from './styles'
import Header from '../../components/header/Header'
import JobCard from '../../components/jobCard/JobCard'
import ActionButton from '../../components/actionButton/ActionButton'
import { SafeAreaView } from 'react-navigation'
import { COLORS } from '../../utilities/colors'

export default Home = () => (
    <SafeAreaView style={styles.container}>
        <StatusBar />
        <Header />

        <View style={styles.centerContainer}>
            <JobCard />
        </View>

        <View style={styles.bottomContainer}>
           <ActionButton size={60} icon='trash-alt' color='#fc6fb8' />
           <ActionButton size={60} icon='heart' color='#03fcba' />
        </View>
    </SafeAreaView>
)
