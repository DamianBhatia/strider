import React from 'react'
import {View, ImageBackground,Text, TouchableOpacity, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import styles from './styles'
import LoginHeader from '../../components/LoginPage/LoginHeader'
import LoginInputs from '../../components/LoginPage/LoginInputs'
import LoginButton from '../../components/LoginPage/LoginButton'
import GoogleIcon from '../../assets/icons/google.svg'
import axios from 'axios'
import bcrypt from 'bcryptjs'

const backgroundImage = require("../../assets/images/building.png")

const newUser = async () => {    
    console.log('fired')
    await axios.post('https://southportstrive.herokuapp.com/users/add',{
        firstName: 'Matthew',
        lastName: 'Asaad',
        email: 'asaad123@outlook.com',
        password: 'password'
    }).then(({request})=>{
        console.log(request._response)
    }).catch(({ message, request })=>{
        console.log(message)
    })
}


/**
 * @param {object} history prop for pushing to new screen
 * @returns {jsx} renders loging screen
 */
export default Login = ({ history }) => {
    return(
        <View style = {styles.container}>
            <StatusBar /> 
            <ImageBackground source = {backgroundImage}  resizeMode="cover" style={styles.image} imageStyle={{ opacity: 0.6 }}>
                <LoginHeader />
                <LoginInputs />
                <View style={styles.buttonsContainer}>
                    <LoginButton history = {history} label = {"Sign In"}/>
                    <View style={styles.orContainer}>
                        <Text style={styles.or}> or </Text>
                    </View>
                    <LoginButton history = {history} label = {"Sign In with Google"} icon = {<GoogleIcon height = {20} width = {30} />}/>
                </View>
                <View style={styles.signIn}>
                    <Text style={{color: 'white', fontSize: 18}}>Don't have an account?</Text>
                    <TouchableOpacity onPress = {()=>{newUser()}}><Text style={styles.signInText}>Sign Up</Text></TouchableOpacity>
                </View>
            </ImageBackground>
         </View>     
    )
}

