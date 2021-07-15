import { StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default styles = StyleSheet.create({
   container: {
       backgroundColor: COLORS.background,
   },
   centerContainer: {
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       paddingTop: hp(5),
   },
   bottomContainer: {
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'space-around',
       marginTop: hp(2),
   }
})