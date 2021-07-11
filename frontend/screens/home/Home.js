import React from 'react'
import { StatusBar } from 'expo-status-bar'
import styles from './styles'
import Header from '../../components/header/Header'
import { SafeAreaView } from 'react-navigation'

export default Home = () => (
    <SafeAreaView style={styles.container}>
        <StatusBar />
        <Header />
    </SafeAreaView>
)
