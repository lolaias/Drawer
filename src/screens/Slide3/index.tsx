import { ImageBackground, Image, View, StyleSheet, Text } from "react-native";
import { styleContainer, colors } from "../../styles/GlobalStyle"
import { styles } from "./style"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../Components/ButtonSlide"


export function Slide3({ setPageI }: IPagina) {
    const slide = require('../../assets/fundo1.png')
    const privs = require('../../assets/privs.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container} >
            <View style={styles.container}>
            <Image source={privs} style={styles.imagem}></Image>
            <Text style={styles.titulo}> ˗ˏˋPrivacidadeˎˊ˗ </Text>
                <Text style={styles.textPrincipal}>Esse aplicativo visa promover privacidade aos usuários cadastrados.  </Text>
               </View> 
            <View style={styles.containerButton}>
                <ButtonSlide style={styles.butt} onPressI={() => setPageI(1)} />
                <ButtonSlide style={styles.butt} onPressI={() => setPageI(2)} />
                <ButtonSlide style={styles.butt} onPressI={() => setPageI(3)} />
                <ButtonSlide style={styles.butt} onPressI={() => setPageI(4)} />




            </View>
        </ImageBackground>

    )
}