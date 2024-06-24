import React from "react";
import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';

function Header(){
    return(
        <View style={styles.headerContainer}>
            <ImageBackground source={require('../components/1.jpg')} style={styles.headerContainer}>
                <StatusBar barStyle="light-content"/>
                <Text style={styles.headerText}>Thanh niên Việt Nam</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#192b37',
        alignItems: 'center',
        width:'100%'
    },
    headerText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 50,
        paddingBottom: 15
    },
});

export default Header;
