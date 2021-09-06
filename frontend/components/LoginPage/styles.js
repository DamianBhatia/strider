import { StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default styles = StyleSheet.create({
    title: {
        fontSize: 60,
        fontFamily: 'Montserrat-Bold-700',
        color: COLORS.background,
        marginTop: "25%"
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: hp(35)
    },
  
    button: {
        backgroundColor: COLORS.background,
        borderRadius: 20,
        alignItems: 'center',
        padding: "3%",
        marginHorizontal: "15%",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: COLORS.primary
    }
    
})