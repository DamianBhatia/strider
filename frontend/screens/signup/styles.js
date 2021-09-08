import { StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export default styles = StyleSheet.create({
    container: {
        flex:1,
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
        marginBottom: '10%'
    },
    body: {
       // backgroundColor: 'blue',
        height: hp(40),
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
        fontSize: 20,
        marginBottom: "2%"
    },
    Input: {
        opacity: 0.3,
        height: '25%',
        borderBottomWidth: 2,
        marginRight: "5%",
        borderColor: COLORS.greyText,
        fontSize: 18,
        marginLeft: '1%'
        
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: '4%',
        marginTop: "15%"
    },
    continue:{
        height: hp(6),
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: '5%',
        marginTop: '35%',
        //backgroundColor:'red'
    },
    next:{
        backgroundColor:COLORS.primary,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: '6%',
        borderRadius:3,
        color: 'white'
    },
    nextText :{
        color:'white',
        fontSize: 20
    }
})