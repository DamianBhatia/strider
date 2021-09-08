import React, {useState} from 'react'
import {View, ImageBackground,Text, TouchableOpacity, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import styles from './styles'
import LoginHeader from '../../components/LoginPage/LoginHeader'
import LoginButton from '../../components/LoginPage/LoginButton'
import GoogleIcon from '../../assets/icons/google.svg'
import axios from 'axios'
import LoadingState from '../../components/loadingState/LoadingState'

const backgroundImage = require("../../assets/images/building.png")

const newUser = async () => {    
    console.log('fired')
    await axios.post('https://southportstrive.herokuapp.com/users/add',{
        firstName: 'Aco',
        lastName: 'Stojanovic',
        email: 'aca12365@outlook.com',
        password: 'Security12365!'
    }).then(({request})=>{
        console.log(request._response)
    }).catch(({ message, request })=>{
        console.log(message)
    })
}

const userLogin = async (email,password,history,onLoading) => {

    if (!email){
        alert("Please enter an email")
    }else if(!password){
        alert("Please enter a password")
    }else{
        try{
            console.log("fired userLogin")
            onLoading(true)
            const {data: LoggedIn} = await axios.get(`https://southportstrive.herokuapp.com/users/login/${email}/${password}`)
            console.log(LoggedIn)
            onLoading(false)
            if(LoggedIn) {
                history.push("/home")
            }else {
                alert("ERROR\nEmail or password is incorrect, please try again")
            }
    
        } catch(e){
            alert("X X\n____\nSomthing went wrong")
            onLoading(false)
            console.log(e.message)
        }
    }
}   
    
/**
 * @param {object} history prop for pushing to new screen
 * @returns {jsx} renders loging screen
 */
export default Login = ({ history }) => {
    const [email, onEmail] = useState('')
    const [password, onPassword] = useState('')
    const [loading, onLoading] = useState(false)
    //const [error, onError] = useState("Email or password is incorrect, please try again") *Explore this feature later for now we use alerts
    return(
        <View style = {styles.container}>
            <StatusBar /> 
            <ImageBackground source = {backgroundImage}  resizeMode="cover" style={styles.image} imageStyle={{ opacity: 0.6 }}>
                <LoginHeader />
                <View style= {styles.TextInputContainer}>
                    <View>
                        <TextInput 
                            placeholder={'email'}
                            style= {styles.TextInput}
                            placeholderTextColor = 'white'
                            value={email}
                            onChangeText={(text)=>onEmail(text)}
                        />
                        <TextInput
                            placeholder={"password"}
                            style= {styles.TextInput}
                            placeholderTextColor = 'white'
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(text)=>onPassword(text)}
                        />
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <LoginButton onPress = {()=>userLogin(email,password,history,onLoading)} history = {history} label = {"Sign In"}/>
                    <View style={styles.orContainer}>
                        <Text style={styles.or}> or </Text>
                    </View>
                    <LoginButton history = {history} label = {"Sign In with Google"} icon = {<GoogleIcon height = {20} width = {30} />}/>
                </View>
                <View style={styles.signIn}>
                    <Text style={{color: 'white', fontSize: 18}}>Don't have an account?</Text>
                    <TouchableOpacity onPress = {()=>{history.push('/signup')}}><Text style={styles.signInText}>Sign Up</Text></TouchableOpacity>
                </View>
            </ImageBackground>
            {loading && <LoadingState loading = {loading}/>}
         </View>     
    )
}

