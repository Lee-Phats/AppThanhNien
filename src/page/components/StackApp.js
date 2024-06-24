import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import * as ROUTER from '../../Routes/Routers';
import Registers from '../Login_SingUp/Register';
import MenuBottom from './MenuBottom';
import ForgotPassword from '../Login_SingUp/ForgotPassword';
import LoginScreen from '../Login_SingUp/LoginScreen';
import ImgDetail from '../ImgDetail'; // Điều chỉnh đường dẫn này

const StackDemo = createNativeStackNavigator();

function StackApp() {
    return (
        <NavigationContainer>
            <StackDemo.Navigator initialRouteName={ROUTER.APP_LOGIN} screenOptions={{ headerShown: false }}>
                <StackDemo.Screen name={ROUTER.APP_LOGIN} component={LoginScreen} />
                <StackDemo.Screen name={ROUTER.APP_REGISTER} component={Registers} />
                <StackDemo.Screen name={ROUTER.APP_HOME} component={MenuBottom} />
                <StackDemo.Screen name={ROUTER.APP_FORGOT} component={ForgotPassword} />
                <StackDemo.Screen name="ImageDetail" component={ImgDetail} />
            </StackDemo.Navigator>
        </NavigationContainer>
    );
}

export default StackApp;
