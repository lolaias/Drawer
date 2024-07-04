import {StackNavigationProp, createStackNavigator} from '@react-navigation/stack'
import {ScreenSlide4, ScreenSlide3} from '../screens';

type MenuStackParam = {
    Slide3: undefined
    Slide4: undefined
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
            gestureEnabled: true
        }} >
         <Stack.Screen name="Slide3" component={ScreenSlide3}/>
         <Stack.Screen name="Slide4" component={ScreenSlide4}/>
        </Stack.Navigator>
    );
}