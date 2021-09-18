import { StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export default styles = StyleSheet.create({
    container: {
        flex:1,
    },
    SelectionContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: hp(50),
        
    },
    continue:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    header: {
        height: hp(30),
        display: "flex",
        justifyContent: 'center',
        //backgroundColor: 'red'
    },
    h1:{
        display:'flex',
        justifyContent:'flex-start',
        fontSize: 40,
        marginLeft: '5%',
        color: COLORS.primary,
        fontWeight: 'bold'
    },
    h2: {
        marginTop: '5%',
        display:'flex',
        fontSize: 18,
        marginLeft: '5%',
        color: COLORS.greyText,
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: '4%',
        marginTop: "15%"
    },
})