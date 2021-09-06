import { StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export default styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        height: hp(35),
        display: "flex",
        justifyContent: 'center',
        //backgroundColor: 'red'
    },
    h1:{
        display:'flex',
        textAlign: 'center',
        fontSize: 40,
        color: COLORS.primary
    },
    h2: {
        marginTop: '5%',
        display:'flex',
        textAlign: 'center',
        fontSize: 25,
        color: COLORS.primary
    },
    body: {
        //backgroundColor: 'blue',
        height: hp(50),
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-evenly',
    },
    mainBody: {
        //backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: '5%',
        height:'25%',
    },
    Text:{
        fontSize: 30,
        color: COLORS.primary,
        marginBottom: "2%"
    },
    Input: {
        backgroundColor: COLORS.grey,
        opacity: 0.3,
        height: '50%',
        borderBottomWidth: 5,
        borderRadius: 10,
        marginRight: "5%",
        borderColor: COLORS.primary,
        fontSize: 30,
        color: 'black',
        
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: '5%',
        marginTop: "15%"
    },
    continue:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})