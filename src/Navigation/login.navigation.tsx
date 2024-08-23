import { Login, Register} from '../screens'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { colors } from '../styles/GlobalStyle';
import { registerCallableModule } from 'react-native';

type MenuStackParam = {
    Login: undefined
    Register: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Login">
export type LoginTypes = {
    navigation: MenuScreenNavigation
}

export function LoginNavigation() {
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
           <Stack.Screen options={{
            headerTitle: "Login"
           }} name="Login" component={Login}/>

           <Stack.Screen options={{
            headerTitle: "Registrar" 
           }} name="Register" component={Register}/>
        </Stack.Navigator>
    )
}