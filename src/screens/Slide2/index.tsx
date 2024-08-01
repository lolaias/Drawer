import { ImageBackground, Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { styleContainer, colors } from "../../styles/GlobalStyle"
import { styles } from "./style"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../Components/ButtonSlide"
import { MenuStackTypes } from "../../Navigation/MenuStack.navigation";
import AntDesign from '@expo/vector-icons/AntDesign';

export function Slide2({ navigation }: MenuStackTypes) {
    const slide = require('../../assets/fundo1.png')
    const livro = require('../../assets/livro.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container} >
            <View style={styles.container}>
                <Image source={livro} style={styles.imagem}></Image>
                <Text style={styles.titulo}> ˗ˏˋCadastrarˎˊ˗ </Text>
                <TouchableOpacity style={styles.botao}
                onPress={() => navigation.push("Slide3")}
               >
            </TouchableOpacity >
        </View>
             </ImageBackground >


    )
}





