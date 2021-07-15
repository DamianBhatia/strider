import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles.js'
import { FontAwesome5 } from '../../../node_modules/@expo/vector-icons'

const jobImage = require('../../assets/images/test_job.png')

export default JobCard = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.jobImage} source={jobImage}/>
            <View style={styles.jobSummary}>
                <View style={styles.jobTop}>
                    <View style={styles.jobTopLeft}>
                        <Text style={styles.jobTitle}>Software Engineer</Text>
                        <Text style={styles.jobLocation}>Palo Alto, California</Text>
                    </View>
                    <View style={styles.jobTopRight}>
                        <Text style={styles.jobMatch}>98% Match</Text>
                    </View>
                </View>
                <View style={styles.jobBottom}>
                    <View style={styles.jobBottomLeft}>
                        <Text style={styles.jobSeason} adjustsFontSizeToFit>Fall 2021</Text>
                    </View>
                    <View style={styles.jobBottomRight}>
                        <Text style={styles.jobDetails}>Details</Text>
                        <FontAwesome5 name="chevron-right" style={styles.chevron}/>
                    </View>
                </View>
            </View>
        </View>
    )
}