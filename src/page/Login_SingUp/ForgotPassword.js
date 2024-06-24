import React, { useState } from 'react';
import { TextInput, Button, TouchableOpacity, SafeAreaView, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BackgroundMusic from '../BackgroudMusic';

const StackDemo = createNativeStackNavigator();

export default function FogotPassword({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const FogotPassword = () => {
        if (email === '' && password === '') {
            navigation.navigate('APP_FORGOT');
        }
    };

    const handleRegister = () => {
        // Gửi yêu cầu đăng ký đến server
        // Xử lý phản hồi từ server
    };

    const handleGenerate = () => {
        // Xử lý khi TouchableOpacity được nhấn
    };

    return (
        <ImageBackground
            source={require("../../../assets/info.png")} // Thay đường dẫn bằng đường dẫn tới hình ảnh
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <SafeAreaView>

                {/* <View style={styles.container}>
                    <BackgroundMusic />
                    <Text style={styles.header}>Quên mật khẩu</Text>
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Nhập email của bạn"
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
                        <Text style={styles.buttonText}>Gửi</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={styles.inputContainer}>
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email"
                        placeholderTextColor="white" // Màu của placeholder
                        style={styles.input} // Áp dụng kiểu cho TextInput
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        placeholder="Mật khẩu"
                        placeholderTextColor="white" // Màu của placeholder
                        style={styles.input} // Áp dụng kiểu cho TextInput
                    />
                </View>
                <TouchableOpacity style={styles.generateButton} onPress={handleRegister}>
                    <Text style={styles.generateButtonText}>Đăng Nhập</Text>
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
    inputContainer: {
        // backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingHorizontal: 15,
        marginBottom: 15,
        borderRadius: 20, // Di chuyển borderRadius vào đây để sử dụng cho TextInput
    },
    input: {
        color: 'white', // Màu văn bản của TextInput
    },
    generateButton: {
        backgroundColor: 'darkblue',
        padding: 15,
        marginTop: 180,
        alignItems: 'center',
        borderRadius: 50,
    },
    generateButtonText: {
        color: 'white',
    },
});
