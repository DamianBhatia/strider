import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import styles from './styles'
import Header from '../../components/header/Header'
import JobCard from '../../components/jobCard/JobCard'
import ActionButton from '../../components/actionButton/ActionButton'
import { SafeAreaView } from 'react-navigation'
import axios from 'axios'

const baseURL = 'https://southportstrive.herokuapp.com/jobs/get';

export default Home = () => {
    const [jobs, setJobs] = useState([]);

    const getJobs = () => {
        axios.get(baseURL)
            .then(response => setJobs(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
       getJobs();
    }, []);


    // Component has just mounted so useEffect has not run yet to populate the jobs.
    if(jobs.length == 0) {
        return null;
    }

    return (
    <SafeAreaView style={styles.container}>
        <StatusBar />
        <Header />

        <View style={styles.centerContainer}>
            <JobCard jobTitle={jobs[0].position} jobLocation={jobs[0].location} />
        </View>

        <View style={styles.bottomContainer}>
           <ActionButton size={60} icon='trash-alt' color='#fc6fb8' />
           <ActionButton size={60} icon='heart' color='#03fcba' />
        </View>
    </SafeAreaView>
)}
