import React, {useState, useEffect} from 'react'
import {View, Image, ImageBackground,Text, TouchableOpacity, TextInput, Dimensions, Animated } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SvgUri } from 'react-native-svg'
import styles from './styles'
import LoginHeader from '../../components/LoginPage/LoginHeader'
import LoginButton from '../../components/LoginPage/LoginButton'
import GoogleIcon from '../../assets/icons/google.svg'
import axios from 'axios'
import LoadingState from '../../components/loadingState/LoadingState'
import { SafeAreaView } from 'react-navigation'

import BagIcon from "../../assets/icons/office-bag.svg";
import { COLORS } from '../../utilities/colors'

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

    const pos = useState(new Animated.Value(0))[0];

    const yVal = pos.interpolate({
        inputRange: [0,1],
        outputRange: [100, 0]
    });

    const negYVal = pos.interpolate({
        inputRange: [0,1],
        outputRange: [-100,0]
    });

    const moveUp = {
        transform: [
            {
                translateY: yVal
            },
        ],
        opacity: pos
    }

    const moveDown = {
        transform: [
            {
                translateY: negYVal
            },
        ],
        opacity: pos
    }

    useEffect(() => {
        Animated.timing(pos, {toValue: 1, duration: 700, useNativeDriver: true}).start();
    }, [pos]);

    //const [error, onError] = useState("Email or password is incorrect, please try again") *Explore this feature later for now we use alerts
    return(
        <SafeAreaView>
            <StatusBar />

            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Animated.View style={[{display: 'flex', alignItems: 'flex-start', paddingTop: '15%'}, moveDown]}>
                    <Text style={{color: COLORS.primary, fontSize: 36, fontFamily: 'Roboto-Medium', marginBottom: "3%"}}>Welcome!</Text>
                    <Text style={{color: "#B5B5B5", fontSize: 18, fontFamily: 'Roboto-Regular'}}>Sign up and get access to hundreds of internships and connect with recruiters and fellow students!</Text>
                </Animated.View>
                
                <Animated.View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: pos}}>
                    <BagIcon width={450} height={450}></BagIcon>
                </Animated.View>

                <Animated.View style={[{display: 'flex', justifyContent: 'center', alignItems: 'center'}, moveUp]}>      
                    <TouchableOpacity style={{backgroundColor: "#F3F3F3", borderRadius: 10, alignItems: 'center', paddingVertical: "5%", paddingHorizontal: "15%", flexDirection: 'row', justifyContent: 'center', marginTop: "-10%"}}>
                        <GoogleIcon height = {20} width = {30} />                
                        <Text style={{color: COLORS.primary, fontSize: 18, fontFamily: 'Roboto-Medium'}}>Sign up with Google</Text>
                    </TouchableOpacity>
                    <Text style={{color: COLORS.primary, fontSize: 18, fontFamily: 'Roboto-Medium', marginVertical: "2%"}}>or</Text>
                    <TouchableOpacity style={{backgroundColor: COLORS.primary, borderRadius: 10, alignItems: 'center', paddingVertical: "5%", paddingHorizontal: "32%", flexDirection: 'row', justifyContent: 'center', marginBottom: "8%"}} onPress={()=>userLogin(email,password,history,onLoading)}>
                        <Text style={{color: "#fff", fontSize: 18, fontFamily: 'Roboto-Medium'}}>Sign up</Text>
                    </TouchableOpacity>
                </Animated.View>
                
                <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 14, fontFamily: 'Roboto-Light'}}>Already have an account? </Text>
                <TouchableOpacity onPress = {()=>{history.push('/signup')}}><Text style={{color: COLORS.primary, fontSize: 14, fontFamily: 'Roboto-Medium',}}>Sign In</Text></TouchableOpacity>
                </View>  
            </View>
           
        </SafeAreaView>

        // <View style = {styles.container}>
        //     <StatusBar /> 
        //     <ImageBackground source = {backgroundImage}  resizeMode="cover" style={styles.image} imageStyle={{ opacity: 0.6 }}>
        //         <LoginHeader />
        //         <View style= {styles.TextInputContainer}>
        //             <View>
        //                 <TextInput 
        //                     placeholder={'email'}
        //                     style= {styles.TextInput}
        //                     placeholderTextColor = 'white'
        //                     value={email}
        //                     onChangeText={(text)=>onEmail(text)}
        //                 />
        //                 <TextInput
        //                     placeholder={"password"}
        //                     style= {styles.TextInput}
        //                     placeholderTextColor = 'white'
        //                     value={password}
        //                     secureTextEntry={true}
        //                     onChangeText={(text)=>onPassword(text)}
        //                 />
        //             </View>
        //         </View>
        //         <View style={styles.buttonsContainer}>
        //             <LoginButton onPress = {()=>userLogin(email,password,history,onLoading)} history = {history} label = {"Sign In"}/>
        //             <View style={styles.orContainer}>
        //                 <Text style={styles.or}> or </Text>
        //             </View>
        //             <LoginButton history = {history} label = {"Sign In with Google"} icon = {<GoogleIcon height = {20} width = {30} />}/>
        //         </View>
        //         <View style={styles.signIn}>
        //             <Text style={{color: 'white', fontSize: 18}}>Don't have an account?</Text>
        //             <TouchableOpacity onPress = {()=>{history.push('/signup')}}><Text style={styles.signInText}>Sign Up</Text></TouchableOpacity>
        //         </View>
        //     </ImageBackground>
        //     {loading && <LoadingState loading = {loading}/>}
        //  </View>     
    )
}

