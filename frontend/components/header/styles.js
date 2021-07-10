import { StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.07,
        shadowRadius: 2,
    },
    left: {
        display: 'flex',
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: '2%',
    },
    center: {
        display: 'flex',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    right: {
        display: 'flex',
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: '2%',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Montserrat-Bold-700',
        color: COLORS.primary
    }
})