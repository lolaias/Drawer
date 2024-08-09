import { View, Text } from "react-native";
import { styles } from "./styles";
import { useAuth } from "../../hook/auth";
import { FontAwesome5 } from "@expo/vector-icons";
import { ComponentButtonInterface } from "../../Components";

export function Perfil() {
    const { user, signOut } = useAuth()
    return
    <View style={styles.container}>
    </View>
    <Text style={styles.sociais} </Text>
}
    
