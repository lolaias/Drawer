import { StyleSheet } from "react-native";
import { colors } from "../../styles/GlobalStyle";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  containerButton: {
    flexDirection: "row",
    justifyContent: 'space-around',
    paddingTop: 400,

  },

  butt: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    top: 180,
  },
  textPrincipal: {
    fontSize: 33,
    textAlign: "center",
    top: 70,
    fontFamily: 'Fresca_400Regular',
    paddingTop: 200,
    color: colors.text

  },

  titulo: {
    fontSize: 40,
    position: "absolute",
    top: 250,
    left: 73,
    fontFamily: 'ComicNeue_400Regular',
    color: colors.text,

  },
})