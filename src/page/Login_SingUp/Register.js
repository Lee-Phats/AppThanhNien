import React, { useState } from 'react';
import { TextInput, TouchableOpacity, SafeAreaView, View, Text, ImageBackground, StyleSheet } from 'react-native';
import BackgroundMusic from '../BackgroudMusic';

export default function Registers({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForgotPassword = () => {
        navigation.navigate('APP_FORGOT');
    };

    const handleRegister = () => {
        if (name === '' || email === '' || password === '') {
            alert('Vui lòng điền đầy đủ thông tin');
        } else {
            alert('Tạo tài khoản thành công');
            navigation.navigate('APP_LOGIN');
        }
    };

    return (
        <ImageBackground
            source={require("../../../assets/info.png")}
            style={styles.backgroundImage}
            resizeMode="cover">
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Tạo tài khoản</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Name :</Text> 
                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholder="..." textAlign='left'
                        placeholderTextColor="white"
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email :</Text>
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="..."
                        placeholderTextColor="white"
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Mật khẩu :</Text>
                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        placeholder="..."
                        placeholderTextColor="white"
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.screen} onPress={handleForgotPassword}> 
                        <Text style={styles.forgotPassword}>Forgot password?</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.generateButton} onPress={handleRegister}>
                    <Text style={styles.generateButtonText}>Tạo tài khoản</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        color: 'white',
        paddingHorizontal: 15,
        marginBottom: 15,
        borderRadius: 20,
    },
    inputLabel: {
        color: 'white',
        marginBottom: 5,
    },
    input: {
        height: 45,
        borderColor: 'white',
        borderWidth: 2,
        paddingHorizontal: 123,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
    },
    screen: {
        textShadowColor: 'white',
        marginTop: 30,
    },
    generateButton: {
        backgroundColor: 'darkblue',
        padding: 15,
        marginTop: 30,
        alignItems: 'center',
        borderRadius: 50,
        width: '80%',
        marginLeft: 138,
    },
    generateButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    forgotPassword: {
        color: 'white',
        marginTop: 10,
        textAlign: 'left',
        marginLeft: 0,
    },
});
