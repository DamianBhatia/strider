import { StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default styles = StyleSheet.create({
    Selection: {
        borderRadius:40,
        borderColor: COLORS.primary,
        borderWidth:1,
        padding: "5%",
        alignItems: 'center',
        width: wp(40),
        marginTop: '10%',
        marginLeft: '2.5%',
        marginRight: '2.5%'
        
    },
    SelectionText: {
        color: COLORS.primary
    },
    Selection_selected: {
        borderRadius:40,
        borderColor: COLORS.primary,
        borderWidth:1,
        padding: "5%",
        alignItems: 'center',
        width: wp(40),
        marginTop: '10%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        backgroundColor: COLORS.primary,        
    },
    SelectionText_selected: {
        color: COLORS.background
    },
  
})