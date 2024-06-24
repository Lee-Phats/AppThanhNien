import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function ImgDetail({ route }) {
    // Lấy dữ liệu hình ảnh từ route.params
    const { image } = route.params;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image.uri} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
});
