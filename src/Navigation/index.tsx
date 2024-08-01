import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuStack } from './MenuStack.navigation';
import { MenuTabs } from "./MenuBottomTab.navigarion"

export function Navigation() {
    return (
        <NavigationContainer>
            <MenuTabs/>
        </NavigationContainer>
    );
}