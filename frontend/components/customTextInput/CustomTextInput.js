import React, { useState } from 'react'
import { TextInput,Text,TouchableOpacity,View } from 'react-native'
import styles from './styles'
import { COLORS } from '../../utilities/colors'



export default CustomTextInput = () => {
    const [searches, setSearches] = useState([])
    const [value, onChangeText] = useState()

    const DeleteSearch = (search) => {
       const newSearches =  searches.filter((s)=>s!==search)
       setSearches(newSearches)
        
    }

    return (
        <View style = {styles.container}>
            <View style={styles.searchesContainer}>
                {searches && searches.map((search, index)=>(
                    <View key={search+index} style={styles.searchContainer}>
                        <TouchableOpacity onPress = {() => DeleteSearch(search)}><Text style={styles.x}>X</Text></TouchableOpacity>
                        <Text style={styles.search}>{search}</Text>
                    </View>
                ))}
            </View>
            <TextInput 
                placeholder = "Search"
                placeholderTextColor = {COLORS.primary}
                style={styles.TextInput}
                autoCorrect={true}
                onChangeText={text=> onChangeText(text)}
                value = {value}
                onSubmitEditing={()=>{
                    if (searches.length <= 9){
                        setSearches([...searches,value])
                    }
                    onChangeText(null)
                }}
            />
        </View>
    )
}