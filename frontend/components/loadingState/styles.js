import { StyleSheet } from 'react-native'
import { COLORS } from '../../utilities/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
      },
      loading:{
          width: wp(50),
          height: hp(10),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
          
      },
      loadingText:{
          width: "100%",
          flexDirection:'row',
          justifyContent:'center',
      },
      Text: {
        fontSize: 20
      }
})