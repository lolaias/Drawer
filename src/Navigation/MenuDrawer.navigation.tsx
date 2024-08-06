import {DrawerNavigationProp, createDrawerNavigator} from '@react-navigation/drawer';
import {Slide1} from '../screens';

type MenuDrawerParam = {
    Slide1: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Slide1">
export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation
}

export function MenuDrawer() {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Slide1" component={Slide1} />
        </Drawer.Navigator>
    );
}