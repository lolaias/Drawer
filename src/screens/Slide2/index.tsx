import { ImageBackground, Image, View, StyleSheet, Text } from "react-native";
import { styleContainer, colors } from "../../styles/GlobalStyle"
import { styles } from "./style"
import { IPagina } from "../../../App";
import { ButtonSlide } from "../../Components/ButtonSlide"

export function Slide2({ setPageI }: IPagina) {
    const slide = require('../../assets/fundo1.png')
    const livro = require('../../assets/livro.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container} >
            <View style={styles.container}>
                <Image source={livro} style={styles.imagem}></Image>
                <Text style={styles.titulo}> ˗ˏˋSuporteˎˊ˗ </Text>
                <Text style={styles.textPrincipal}>O aplicativo tem como objetivo tornar a organização
                    de sua biblioteca pessoal mais simples e eficaz. Ele cria um ambiente onde os
                    usuários cadastrados possam organizar os seus livros favoritos, terminados e os
                    que pretende ler futuramente, sendo prático para sua organização diária.  </Text>
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