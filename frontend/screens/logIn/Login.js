import React, {useState} from 'react'
import {View, ImageBackground,Text, TouchableOpacity, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import styles from './styles'
import LoginHeader from '../../components/LoginPage/LoginHeader'
import LoginButton from '../../components/LoginPage/LoginButton'
import GoogleIcon from '../../assets/icons/google.svg'
import axios from 'axios'
import LoadingState from '../../components/loadingState/LoadingState'
import ErrorText from '../../components/errorText/ErrorText'
import {COLORS} from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const backgroundImage = require("../../assets/images/building.png")

const userLogin = async (email,password,history,onLoading,onError) => {

    if(!email && !password){
        onError({
            isError: true,
            type: '',
            message:'Please enter an email and password'
        })
    }
    else if (!email){
        onError({
            isError: true,
            type: 'email',
            message:'Please enter an email'
        })
    }else if(!password){
        onError({
            isError: true,
            type: 'pass',
            message:'Please enter a password'
        })
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
                onError(  {
                    isError: true,
                    type: '',
                    message:'Email or password is incorrect, please try again'
                })
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
    const [error, onError] =useState({
        isError: false,
        type: '',
        message: ''
    })
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
                            style= {{ color: COLORS.background,
                                borderBottomColor: error.isError && error.type!='pass'? 'red':COLORS.background,
                                borderBottomWidth: 2,
                                fontSize: 30,
                                marginBottom: "10%",
                                width: wp(80),
                                maxWidth: wp(80)}}
                            placeholderTextColor = {COLORS.background}
                            value={email}
                            onChangeText={(text)=>onEmail(text)}
                            onFocus={()=>onError({isError:false,type:'',message: ''})}
                        />
                        <TextInput
                            placeholder={"password"}
                            style= {{ color: COLORS.background,
                                borderBottomColor: error.isError && error.type!='email'?'red':COLORS.background,
                                borderBottomWidth: 2,
                                fontSize: 30,
                                marginBottom: "10%",
                                width: wp(80),
                                maxWidth: wp(80)}}
                            placeholderTextColor ={COLORS.background}
                            value={password}
                            secureTextEntry={true}
                            onChangeText={(text)=>onPassword(text)}
                            onFocus={()=>onError({isError:false,type:'',message: ''})}
                        />
                    </View>
                    {error.isError && <ErrorText error={error.message}/>}
                </View>
                <View style={styles.buttonsContainer}>
                    <LoginButton onPress = {()=>userLogin(email,password,history,onLoading,onError)} history = {history} label = {"Sign In"}/>
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

