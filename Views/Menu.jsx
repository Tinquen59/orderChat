import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Menu () {
    return (
        <View style={styles.container}>
            <Text>Bienvenue dans le Menu</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 80
    }
})