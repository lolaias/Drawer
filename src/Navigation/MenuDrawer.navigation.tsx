import {DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer';
import { MenuTabs } from './MenuBottomTab.navigation';
import { colors } from '../styles/GlobalStyle'
import { FontAwesome5, FontAwesome, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScreenCamera } from '../screens';


type MenuDrawerParam = {
    Perfil: undefined
    Camera: undefined
    QrCode: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Perfil">
export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation
}

export function MenuDrawer() {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'rgb(143, 135, 131)'},
            headerTintColor: colors.white,
            drawerStyle: {
                backgroundColor: 'rgb(143, 135, 131)',
            },
            drawerActiveTintColor: colors.black,
            drawerInactiveTintColor: colors.black
        }}>
           <Drawer.Screen name='Perfil' component={MenuTabs}
                options={{
                    drawerLabel: 'Perfil',
                    headerTitle: '',
                    drawerIcon: () => (
                        <FontAwesome name="home" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='Camera' component={ScreenCamera}
                options={{
                    drawerIcon: () => (
                        <Ionicons name="camera" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='QrCode' component={ScreenQrCode}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="qrcode-scan" sixe={24} color={colors.white} />
                    ),
                }}
            />
           </Drawer.Navigator> 
    )

}