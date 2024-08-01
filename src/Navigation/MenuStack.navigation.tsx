import {StackNavigationProp, createStackNavigator} from '@react-navigation/stack';
import {Slide2, Slide3} from '../screens';

type MenuStackParam = {
    Slide1:undefined
    Slide2: undefined
    Slide3: undefined
}

type MenuScreenNavigation = StackNavigationProp < MenuStackParam, "Slide3">
export type MenuStackTypes = {
    navigation:MenuScreenNavigation
}

export function MenuStack() {
    const Stack = createStackNavigator < MenuStackParam>();
    return(
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true,
            headerShown:false,
        }} >
         <Stack.Screen name="Slide2" component={Slide2}/>
         <Stack.Screen name="Slide3" component={Slide3}/>
        </Stack.Navigator>
    );
}