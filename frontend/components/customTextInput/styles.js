import { StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: hp(20),
    },
    TextInput: {
        color: COLORS.primary,
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 2,
        fontSize: 20,
        width: wp(80),
        maxWidth: wp(80),
        paddingTop: "5%"
    },
    searchesContainer: {
        flexWrap:'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: wp(80),
        paddingBottom: "10%",
        maxHeight:hp(10)
        
    },
    searchContainer: {
        backgroundColor: COLORS.grey,
        flexDirection: 'row',
        paddingVertical:  '1%',
        justifyContent: 'space-between',
        width: wp(25),
        marginBottom:"1%"
        
    },
    x: {
        color:"#7C7C7C",
        marginLeft: "15%"
    },
    search: {
        marginRight: "5%"
    }
})