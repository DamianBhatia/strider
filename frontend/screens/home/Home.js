import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import styles from './styles'
import Header from '../../components/header/Header'
import JobCard from '../../components/jobCard/JobCard'
import ActionButton from '../../components/actionButton/ActionButton'
import { SafeAreaView } from 'react-navigation'
import axios from 'axios'

const getJobs = () => {
    var jobs = [
        {
            "id": "4",
            "job_id": "1d684ae6-9efa-4f46-af9d-ec465bd8e523",
            "position": "Senior Financial Analyst",
            "location": "Vitoria-Gasteiz",
            "company": "Buzzbean",
            "description": null,
            "url": "https://typepad.com/morbi.xml?justo=rhoncus&morbi=aliquet&ut=pulvinar&odio=sed",
            "expiration_date": "2021-02-02T05:00:00.000Z"
        },
        {
            "id": "5",
            "job_id": "29b19345-7d85-4ba1-b706-038891dce3f0",
            "position": "Office Assistant IV",
            "location": "Krajan Selatan",
            "company": "Edgeify",
            "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "url": "http://github.com/sollicitudin/mi/sit/amet/lobortis/sapien/sapien.jsp?in=luctus&tempor=et&turpis=ultrices&nec=posuere&euismod=cubilia&scelerisque=curae&quam=duis&turpis=faucibus&adipiscing=accumsan&lorem=odio&vitae=curabitur&mattis=convallis&nibh=duis&ligula=consequat&nec=dui&sem=nec&duis=nisi&aliquam=volutpat&convallis=eleifend&nunc=donec&proin=ut&at=dolor&turpis=morbi&a=vel&pede=lectus&posuere=in&nonummy=quam&integer=fringilla&non=rhoncus&velit=mauris&donec=enim&diam=leo&neque=rhoncus&vestibulum=sed&eget=vestibulum&vulputate=sit&ut=amet&ultrices=cursus&vel=id&augue=turpis&vestibulum=integer&ante=aliquet&ipsum=massa&primis=id&in=lobortis&faucibus=convallis&orci=tortor&luctus=risus&et=dapibus&ultrices=augue&posuere=vel&cubilia=accumsan&curae=tellus&donec=nisi&pharetra=eu&magna=orci&vestibulum=mauris&aliquet=lacinia&ultrices=sapien&erat=quis",
            "expiration_date": "2020-09-18T04:00:00.000Z"
        }]
    return jobs;
}

export default Home = () => {

    var jobs = getJobs();

    return (
    <SafeAreaView style={styles.container}>
        <StatusBar />
        <Header />

        <View style={styles.centerContainer}>
            <JobCard jobTitle={jobs[1].position} jobLocation={jobs[1].location} />
        </View>

        <View style={styles.bottomContainer}>
           <ActionButton size={60} icon='trash-alt' color='#fc6fb8' />
           <ActionButton size={60} icon='heart' color='#03fcba' />
        </View>
    </SafeAreaView>
)}
