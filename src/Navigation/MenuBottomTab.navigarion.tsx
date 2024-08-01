import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Slide1, Slide2, Slide3 } from '../screens';
import { Entypo, Feather } from '@expo/vector-icons';
import { FontAwesome6, FontAwesome, AntDesign } from '@expo/vector-icons';
import { colors } from "../styles/GlobalStyle"

type MenuTabParam = {
    Slide1: undefined
    Slide2: undefined
    Slide3: undefined
    
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Slide1">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator 
            screenOptions={{ 
                tabBarActiveBackgroundColor: 'rgb(192, 154, 241)',
                tabBarActiveTintColor: colors.white,
                headerShown: false,
                tabBarInactiveBackgroundColor: 'rgb(211, 115, 235)',
                tabBarInactiveTintColor: colors.white,
            }}>
            <Tab.Screen name="Slide1" component={Slide1}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome6 name="house-chimney" size={24} color="white" />
                    )
                }}
            />
            <Tab.Screen name="Slide2" component={Slide2}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome6 name="plant-wilt" size={24} color="white" />
                    )
                    
                }}
            />
            <Tab.Screen name="Slide3" component={Slide3}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="search" size={24} color="white" />
                    )
                }}
            />
        </Tab.Navigator>
    )

}