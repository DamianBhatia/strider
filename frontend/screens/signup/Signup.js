import React, { useState, useRef} from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import styles from './styles'
import { FontAwesome} from '@expo/vector-icons';
import { COLORS } from '../../utilities/colors';
import axios from 'axios'
import LoadingState from '../../components/loadingState/LoadingState'

const newUser = async (firstName,lastName,email,password,history,loading) => {    
    console.log('fired New user')
    if (firstName && lastName && email && password){
        await axios.post('https://southportstrive.herokuapp.com/users/add',{
            firstName,
            lastName,
            email,
            password,
        }).then(({request})=>{
            loading(false)
            history.push("/signup/education", {firstName})
        }).catch(({ message, request })=>{
            alert("X X\n____\nSomthing went wrong")
            loading(false)
            console.log(message)
        })
    
    } else {
        alert('Some fields are missing')
    }
}
  


export default SignUp = ({history}) => {    
    const [name, onName] = useState('')
    const [email, onEmail] = useState('')
    const [password,onPassword] = useState('')
    const [loading, onLoading] = useState(false)
    return (
        <View >
        <View style={styles.container}>
            <View style={styles.header}>
            <View style ={styles.icon}>
                <FontAwesome name="user" size={70} color={COLORS.primary} />
            </View>
                <Text style={styles.h1}>Get Started</Text>
                <Text style={styles.h2}>Let's get you setup, enter your preferrd email and password</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.mainBody}>
                    <Text style={styles.Text}>Full Name</Text>
                    <TextInput 
                        style={styles.Input}
                        value = {name}
                        onChangeText={(text)=>onName(text)}
                    />
                </View>
                <View style={styles.mainBody}>
                    <Text style={styles.Text}>Email</Text>
                    <TextInput 
                        style={styles.Input}
                        value = {email}
                        onChangeText={(text)=>onEmail(text)}
                    />
                </View>
                <View style={styles.mainBody}>
                    <Text style={styles.Text}>Password</Text>
                    <TextInput 
                        style={styles.Input}
                        secureTextEntry={true}
                        value = {password}
                        onChangeText={(text)=>onPassword(text)}
                    />
                </View>
            </View>
            <View style = {styles.continue}>
                <TouchableOpacity style={styles.next} onPress= {()=>newUser(name.split(' ')[0],name.split(' ')[1],email,password,history,onLoading)}><Text style={styles.nextText}>Next {'>'}</Text></TouchableOpacity>
            </View>
      
        </View>
        {loading && <LoadingState loading = {loading}/>}
        </View>
       
    )
}