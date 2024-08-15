import {createBottomTabNavigator, BottomTabNavigationProp} from 'react-navigation/bottom-tabs';
import { Mensagem, Perfil } from '../screens'
import { colors } from '../styles/GlobalStyle';
import { AntDesing, Ionicons} from '@expo/vector-icons';
type TabParamList = {
    Perfil: undefined
    Mensagem: undefined
}

type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes ={
    navigation: TabScreenNavigationProp
}
export function TabNavigation(){
    const Tab = createBottomTabNavigator<TabParamList>()
    return(
        <TabNavigator
        screenOptions={{
            tabBarActiveBackgroundColor: colors.secondary,
            tabBarActiveTintColor: colors.white,
            headerShown: false,
            tabBarInactiveBackgroundColor: colors.secondary,
            tabBarInactiveTintColor: colors.white,
        }}
        >
            <Tab.Screen name='Perfil' componenet={Perfil}
            options ={{
                TabBarIcon: () => (
                    <Ionicons name="person" size={24} color={colors.white}/>
                ),
            }}
           />
           <Tab.Screen name='Mensagem' componenet={Mensagem}
            options ={{
                TabBarIcon: () => (
                    <Ionicons name="message1" size={24} color={colors.white}/>
                ),
            }}
          />  
        </TabNavigator>
    )
}