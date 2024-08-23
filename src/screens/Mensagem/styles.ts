import { StyleSheet } from 'react-native';
import { colors } from '../../styles/GlobalStyle';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        backgroundColor: colors.SoftBlack,
        width: "100%",
        marginTop: 10,
        borderRadius: 10
    },   
    itemText:{
        fontSize: 20,
        padding: 10
    },
})     