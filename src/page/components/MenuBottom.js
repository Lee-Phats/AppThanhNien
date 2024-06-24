import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Phanhoi from '../Phanhoi';
import Sukien from '../Sukien';
import Chitiet from '../Chitiet';
import Settings from '../Settings';
import { ImageBackground, StyleSheet } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

function MenuBottom() {
    return (
        <Tab.Navigator
            initialRouteName="SuKien"
            activeColor="#0099FF"
            inactiveColor="#fffaf0"
            barStyle={{ backgroundColor: 'black', height: 80 }}
        >
            <Tab.Screen
                name="SuKien"
                component={Sukien}
                options={{
                    tabBarLabel: 'Sự Kiện',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={23} />
                    ),
                }}
            />
            <Tab.Screen
                name="PhanHoi"
                component={Phanhoi}
                options={{
                    tabBarLabel: 'Phản Hồi',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="camera-iris" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="ChiTiet"
                component={Chitiet}
                options={{
                    tabBarLabel: 'Chi Tiết',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-grid-outline" color={color} size={23} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={23} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%'
    },
    headerContainer: {
        backgroundColor: '#192b37',
        alignItems: 'center',
        width: '100%'
    },
    headerText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 50,
        paddingBottom: 15
    },
});

export default MenuBottom;
