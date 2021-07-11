import { StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


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
        height:hp (5)  
    },
    buttonsContainer: {
        height:hp(25)
    },
    signInText: {
        color: "#85D3FF",
        fontSize: 18
    }   
})