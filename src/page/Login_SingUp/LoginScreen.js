import React, { useState } from 'react';
import { ImageBackground, Modal, Pressable, SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundMusic from '../BackgroudMusic';

const StackDemo = createNativeStackNavigator();

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = () => {
        setModalVisible(false);
        navigation.navigate('APP_REGISTER');
    };

    const LoginScreen = ({ navigation }) => {
        return (
            <ImageBackground source={require('../../../assets/info.png')} style={styles.backgroundImage} resizeMode="cover">
                <SafeAreaView style={styles.container}>
                    <BackgroundMusic />  {/* Đặt component BackgroundMusic tại đây */}
                    {/* Các thành phần khác của LoginScreen */}
                </SafeAreaView>
            </ImageBackground>
        );
    };

    const handleLogin = () => {
        if (email === 'Admin' && password === 'admin') {
            setModalVisible(false);
            navigation.navigate('APP_HOME');
            setEmail('');
            setPassword('');
        } else if (email === '' && password === '') {
            alert('Nhập email và mật khẩu');
        } else {
            alert('Sai tài khoản hoặc mật khẩu');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <ImageBackground
            source={require('../../../assets/info.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <LinearGradient style={styles.screen} colors={["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.001)"]}>
                    <Text style={styles.header}>Hello💙</Text>
                    <Text style={styles.welcomeText}>𝑪𝒉𝒂̀𝒐 𝒎𝒖̛̀𝒏𝒈 𝒅𝒆̂́𝒏 𝑻𝒉𝒂𝒏𝒉 𝒏𝒊𝒆̂𝒏 𝑽𝒊𝒆̣̂𝒕 𝑵𝒂𝒎</Text>
                    <Text style={styles.welcomeText}> 𝑵𝒐̛𝒊 𝒃𝒂̣𝒏 𝒄𝒐́ 𝒕𝒉𝒆̂̉ 𝒕𝒉𝒆𝒐 𝒅𝒐̃𝒊 𝒔𝒖̛̣ 𝒌𝒊𝒆̣̂𝒏 𝒉𝒂̆̀𝒏𝒈 𝒏𝒈𝒂̀𝒚 𝒄𝒖̉𝒂 𝑻𝒉𝒂𝒏𝒉 𝒏𝒊𝒆̂𝒏 𝑽𝒊𝒆̣̂𝒕 𝑵𝒂𝒎</Text>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                            <Text style={styles.buttonText}>Log in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleRegister}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.signUpUsing}>Sign up using</Text>
                    <View style={styles.socialIcons}>
                        <FontAwesomeIcon icon={faFacebook} size={30} />
                        <FontAwesomeIcon icon={faGoogle} size={30} />
                        <FontAwesomeIcon icon={faLinkedin} size={30} />
                    </View>
                </LinearGradient>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <ImageBackground
                        source={require('../../../assets/info.png')}
                        style={styles.modalBackground}
                        resizeMode="cover"
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Pressable
                                    style={styles.closeButton}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <FontAwesomeIcon icon={faTimes} size={28} color="black" />
                                </Pressable>
                                <Text style={styles.modalText}>Đăng Nhập</Text>
                                <View style={styles.inputEmail}>
                                    <Text style={styles.inputLabel}>Email : </Text>
                                    <View style={styles.nameContainer}>
                                        <TextInput
                                            value={email}
                                            onChangeText={(text) => setEmail(text)}
                                            placeholder="。。。。。"
                                            placeholderTextColor="gray"
                                            style={styles.input}
                                        />
                                    </View>
                                </View>
                                <Text style={styles.inputLabel1}>Mật khẩu : </Text>
                                <View style={styles.passwordContainer}>
                                    <TextInput
                                        value={password}
                                        onChangeText={(text) => setPassword(text)}
                                        secureTextEntry={!showPassword}
                                        placeholder="。。。。。"
                                        placeholderTextColor="gray"
                                        style={[styles.input, { flex: 1 }]}
                                    />
                                    <TouchableOpacity
                                        style={styles.eyeIcon}
                                        onPress={() => setShowPassword(!showPassword)}
                                    >
                                        <FontAwesomeIcon
                                            icon={showPassword ? faEyeSlash : faEye}
                                            size={25}
                                            color="gray"
                                        />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.generateButton} onPress={handleLogin}>
                                    <Text style={styles.generateButtonText}>Đăng Nhập</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </Modal>
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
    },
    screen: {
        width: '106%',
        marginBottom: 40,
        padding: 20,
        borderRadius: 100,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 0 },
        alignItems: 'center',
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 15,
    },
    button: {
        backgroundColor: 'darkblue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
        width: '45%',
        bottom: -20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    signUpUsing: {
        textAlign: 'center',
        marginVertical: 10,
        bottom: -20,
    },
    socialIcons: {
        justifyContent: 'space-around',
        width: '80%',
        marginBottom: 20,
        bottom: -25,
        flexDirection: "row-reverse",
        left: '6%'
    },
    generateButton: {
        backgroundColor: 'darkblue',
        padding: 18,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 50,
        width: '100%',
    },
    generateButtonText: {
        color: 'white',
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    linkText: {
        color: 'white',
        marginHorizontal: 20,
    },
    modalBackground: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    modalView: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 25,
        padding: 80,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        height: 45,
        borderColor: 'white',
        borderWidth: 2,
        paddingHorizontal: 8,
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.01)',
        borderRadius: 15,
        width: '80%',
    },
    inputEmail: {
        marginBottom: 10,
    },
    inputContainer: {
        marginBottom: 10,
    },
    inputLabel: {
        color: 'black',
        marginBottom: 10,
    },
    inputLabel1: {
        color: 'black',
        marginBottom: 10,
        right: 65,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    modalText: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
    },
    eyeIcon: {
        paddingHorizontal: 3,
        position: 'absolute',
        right: 10,
    },
});
