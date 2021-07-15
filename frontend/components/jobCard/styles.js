import { StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { RFPercentage } from 'react-native-responsive-fontsize'

export default styles = StyleSheet.create({
    container: {
        width: wp(90),
        height: hp(70),
        backgroundColor: COLORS.primary,
        borderRadius: 15,
    },
    jobImage: {
        width: '100%',
        height: '75%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    jobSummary: {
        width: '100%',
        height: '25%',
        backgroundColor: COLORS.background,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
            x: 0,
            y: 1
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },
    jobTitle: {
        fontFamily: 'Montserrat-Bold-700',
        fontSize: RFPercentage(3.2),
        color: COLORS.primary,
    },
    jobLocation: {
        fontFamily: 'Aleo-Regular',
        fontSize: RFPercentage(2.3),
        color: COLORS.primary,
    },
    jobTop: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
    },
    jobTopLeft: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '2%',
        paddingTop: '2%',
        width: '75%',
    },
    jobTopRight: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: '5%',
        width: '25%',
    },
    jobMatch: {
        fontFamily: 'Montserrat-Medium-500',
        fontSize: RFPercentage(2.4),
        textAlign: 'center',
        color: COLORS.success,
    },
    jobBottom: {
        display: 'flex',
        flexDirection: 'row'
    },
    jobBottomLeft: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '2%',
        height: '100%'
    },
    jobBottomRight: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        paddingTop: '2%',
    },
    jobSeason: {
        color: COLORS.primary,
        fontFamily: 'Montserrat-Medium-500',
        fontSize: RFPercentage(3.5),
    },
    jobDetails: {
        color: COLORS.primary,
        fontFamily: 'Montserrat-Regular-400',
        fontSize: RFPercentage(2.7),
        paddingRight: '2%'
    },
    chevron: {
        color: COLORS.primary,
        fontSize: RFPercentage(2.5),
        paddingRight: '10%',
    }
})