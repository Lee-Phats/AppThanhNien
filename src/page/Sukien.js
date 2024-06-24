import React from "react";
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import imagesList from "./Content/imagesList";
import { useNavigation } from '@react-navigation/native';
import Header from "./components/Header";

export default function Sukien() {
    const navigation = useNavigation();

    const handleImagePress = (item) => {
        navigation.navigate('ImageDetail', { image: item });
    };

    const firstColumn = imagesList.slice(0, Math.ceil(imagesList.length / 2));
    const secondColumn = imagesList.slice(Math.ceil(imagesList.length / 2));

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.column}>
                    {firstColumn.map((img, index) => (
                        <TouchableOpacity key={index} style={styles.button} onPress={() => handleImagePress(img)}>
                            <Image style={styles.img} source={img.uri} />
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.column}>
                    {secondColumn.map((img, index) => (
                        <TouchableOpacity key={index} style={styles.button} onPress={() => handleImagePress(img)}>
                            <Image style={styles.img} source={img.uri} />
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
        backgroundColor: "#0f161e",
    },
    column: {
        flex: 1
    },
    scrollViewContainer: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingTop: 30,
        paddingLeft: 17,
        paddingRight: 15
    },
    button: {
        width: "96%",
        marginLeft: 5,
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    img: {
        width: "100%",
        resizeMode: "cover",
        height: 240
    }
});
