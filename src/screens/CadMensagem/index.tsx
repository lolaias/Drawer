import { useState } from "react";
import { MessageTypes } from "../../Navigation/message.navigation";
import { Alert, KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { colors } from "../../styles/GlobalStyle";
import { ComponentButtonInterface } from "../../Components";
import { IMessage } from "../../services/data/Messagem";
import { useAuth } from "../../hook/auth";
import { AxiosError } from "axios";
import { apiMessage } from "../../services/data";
import { styles } from "./styles";

export function CadMessagem({ navigation }: MessageTypes) {
    const [data, setData] = useState<IMessage>()
    const { setLoading } = useAuth()
    function handleChange(item: IMessage) {
        setData({ ...data, ...item });
    }

    async function handleCadMessage() {
        if (data?.title && data.message) {
            setLoading(true)
            try {
                await apiMessage.store(data)
                Alert.alert("Mensagem cadastrada!!!")
                navigation.navigate("Mensagem")
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!!!");
        }
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastrar Mensagem</Text>
                <View style={styles.formRow}>
                    <TextInput
                        placeholderTextColor={colors.SoftBlack}
                        style={styles.input}
                        placeholder="Titulo"
                        onChangeText={(i) => handleChange({ title: i })}
                    />
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholderTextColor={colors.SoftBlack}
                        style={styles.input}
                        placeholder="Mensagem"
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(i) => handleChange({ message: i })}
                    />
                </View>
                <ComponentButtonInterface title='Enviar' type='primary'
                    onPressI={handleCadMessage} />
                <ComponentButtonInterface title='Voltar' type='secondary'
                    onPressI={() => navigation.navigate("Mensagem")} />
            </KeyboardAvoidingView>
        </View>
    )
} 