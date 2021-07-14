import { ImageBackground, StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export default styles = StyleSheet.create({
    container: {
        flex:1,
        
    },
    titleContainer: {
        height: hp(25),
        alignItems:'center',
        justifyContent: 'center',

    },
    title: {
        marginTop: "30%",
        alignItems: 'center'
    },
    titleText: {
        color: COLORS.primary,
        fontSize: 18,
        marginTop: "2%",
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Bold-700'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: "5%",
        alignItems: 'center',
        justifyContent:'center',
        height: hp(25),
    },
    SelectionContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: hp(50),
        
    },

})