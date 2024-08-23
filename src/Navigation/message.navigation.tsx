import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenMensagem, ScreenCadMensagem } from '../screens'
type MessageStackParamList = {
Mensagem: undefined
CadMensagem: undefined
}
type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'Mensagem'>
export type MessageTypes = {
navigation: MessageScreenNavigationProp
}
export function MessageNavigation() {
const Stack = createStackNavigator<MessageStackParamList>()
return (
<Stack.Navigator screenOptions={{ headerShown: false }}>
<Stack.Screen name='Mensagem' component={ScreenMensagem} /> 
<Stack.Screen name='CadMensagem' component={ScreenCadMensagem} />
</Stack.Navigator>
)
}