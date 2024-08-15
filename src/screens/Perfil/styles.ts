import {StyleSheet} from 'react-native';
import { colors } from '../../styles/GlobalStyle';

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      containerButton: {
        flexDirection: "row",
        justifyContent: 'space-around',
      },
    
      butt: {
        alignItems: 'center',
        justifyContent: 'center',
    
      },
    
      text: {
        fontSize: 20,
        color: colors.white,
        fontFamily: 'Hind_400Regular',
        bottom:130,
    
      },
    
      textPrincipal: {
        fontSize: 40,
        color: colors.white,
        fontFamily: 'Trykker_400Regular',
        top: -152,
        right: 20
      },
      textPrincipal2: {
        fontSize: 40,
        color: colors.white,
        fontFamily: 'Trykker_400Regular',
        top: -148,
        left: 30  
      },
    
})