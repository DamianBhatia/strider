import { StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        flex:1,
    },
    image: {
        flex: 1,
      },
    orContainer: {
        alignItems: 'center',
        paddingVertical: "3%"
    },
    or: {
       fontSize:18,
       color: COLORS.background
        
    },
    signIn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '40%'
        
        
    },
    signInText: {
        color: "#85D3FF",
        fontSize: 18
    }   
})