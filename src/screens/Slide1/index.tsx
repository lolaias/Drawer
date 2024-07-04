import { ImageBackground, Image, View, StyleSheet, Text } from "react-native";
import { styleContainer, colors } from "../../styles/GlobalStyle"
import { styles } from "./style"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../Components/ButtonSlide"

export function Slide1({ setPageI }: IPagina) {
    const slide = require('../../assets/fundo1.png')
    const logo = require('../../assets/logo.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container} >
            <View style={styles.container}>
                <Image source={logo}/>
                <Text style={styles.textPrincipal}>˚⋅𓂃 ִֶָ࣪ Book</Text>
                <Text style={styles.textPrincipal2}>Dream！</Text>
                <Text style={styles.text}>Sua Biblioteca Pessoal</Text>
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
