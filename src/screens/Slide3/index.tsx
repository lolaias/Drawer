import { ImageBackground, Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { styleContainer, colors } from "../../styles/GlobalStyle"
import { styles } from "./style"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../Components/ButtonSlide"

export function Slide3({ navigation }: MenuStackTypes) {
    const slide = require('../../assets/fundo1.png')
    const privs = require('../../assets/privs.png')
    return(
        <ImageBackground source={slide} style={styleContainer.container} >
            <View style={styles.container}>
                <Image source={privs} style={styles.imagem}></Image>
                <Text style={styles.titulo}> ˗ˏˋLoginˎˊ˗ </Text>
        </View>
             </ImageBackground >


    )
}