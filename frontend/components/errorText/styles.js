import { StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default styles = StyleSheet.create({
  container: {
      height:hp(3),
      display:'flex',
      flexDirection: 'row',
     justifyContent: 'center'
  },

  text: {
    color:"#FF0000",
    fontSize:20,
  }
})