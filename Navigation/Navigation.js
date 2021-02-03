import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

import Home from '../Views/Home';
import Menu from '../Views/Menu';
import Sandwichs from '../Views/Sandwichs';
import Desserts from '../Views/Desserts';
import Drinks from '../Views/Drinks';
import Cart from '../Views/Cart';
import Chat from '../Views/Chat';
import Profile from '../Views/Profile';


const Stack = createStackNavigator();

const MyStacks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Menu"
                component={Menu}
            />
            <Stack.Screen
                name="Sandwichs"
                component={Sandwichs}
            />
            <Stack.Screen
                name="Desserts"
                component={Desserts}
            />
            <Stack.Screen
                name="Drinks"
                component={Drinks}
                options={{
                    title: 'Boissons'
                }}
            />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={MyStacks}
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="restaurant-menu" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat-processing" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Panier',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="shopping-cart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Mon Profil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            {/* <MyStacks/> */}
            <MyTabs/>
        </NavigationContainer>
    )
};