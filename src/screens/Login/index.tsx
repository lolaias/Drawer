import { ImageBackground, Text, View, KeyboardAvoidingView, TextInput, Alert } from "react-native";
import { styleContainer, styleText } from "../../styles/GlobalStyle"
import { styles } from "./styles"
import { colors } from "../../styles/GlobalStyle"

import React, { useState } from 'react';

import { ButtonInterface } from "../../Components/ButtonSlide/index";
import { LoginTypes } from '../../Navigation/login.navigation'
import { useAuth } from '../../hook/auth'
import { AxiosError } from 'axios'

export interface IAuthenticate {
    email?: string;
    password?: string;
}
export function Login({ navigation }: LoginTypes) {
    const slide = require('../../assets/livro.png')
    const [data, setData] = useState<IAuthenticate>();
    const { signIn, setLoading } = useAuth()
    async function handleSignIn() {
        if (data?.email && data.password) {
            setLoading(true)
            try {
                await signIn(data)
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!");
        }
    }
    function handleRegister() {
        navigation.navigate('Register')
    }
    function handleChange(item: IAuthenticate) {
        setData({ ...data, ...item})
    }

    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <KeyboardAvoidingView>
                    <View>
                        <Text style={styleText.textTitle}>Book Dream</Text>
                        <Text style={styles.text}>Login</Text>
                    </View>
                    <View style={styles.formRow}>
                        <TextInput
                            placeholderTextColor={colors.white}
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ email: i})}
                        />
                    </View>
                    <View style={styles.formRow}>
                        <TextInput
                            placeholderTextColor={colors.white}
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(i) => handleChange({ password: i})}
                        />
                    </View>
                    <ButtonInterface title='Login' type='primary' onPressI={handleSignIn} />
                    <ButtonInterface title='Cadastre-se' type='secondary' onPressI={handleRegister} />
                </KeyboardAvoidingView>
            </View>
        </ImageBackground>
    );
}