import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Text, View, ScrollView, TouchableOpacity, ImageBackground, StyleSheet, Image } from "react-native";
import imagesList from "./Content/imagesList"; // Thay đổi từ images thành imagesList
import Header from "./components/Header";

export default function Chitiet() {
    const navigation = useNavigation();

    const handleImagePress = (item) => {
        navigation.navigate('ImageDetail', { image: item });
    };

    const firstColumn = imagesList.slice(0, Math.ceil(imagesList.length / 2)); // Thay đổi firstColum thành firstColumn
    const secondColumn = imagesList.slice(Math.ceil(imagesList.length / 2)); // Thay đổi seconColum thành secondColumn

    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>

                <View style={styles.column}>
                    {firstColumn.map((img, index) => (
                        <TouchableOpacity key={index} style={styles.button} onPress={() => handleImagePress(img)}>
                            <Image style={{ flex: 1, width: "100%", resizeMode: "cover", height: 190 }} source={img.uri} />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.column}>
                    {secondColumn.map((img, index) => (
                        <TouchableOpacity key={index} style={styles.button} onPress={() => handleImagePress(img)}>
                            <Image style={{ width: "100%", resizeMode: "cover", height: 240 }} source={img.uri} />
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "black",
    },
    column: {
        flex: 1
    },
    button: {
        marginBottom: 10,
        marginHorizontal: 5
    },
});
