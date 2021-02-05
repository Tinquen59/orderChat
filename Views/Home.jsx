import React from 'react';
import { StyleSheet, ScrollView, TouchableHighlight, Text } from 'react-native';

export default function Home ({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableHighlight
                style={styles.card__container}
                onPress={() => navigation.navigate('Menu')}
            >
                <Text>Menu</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.card__container}
                onPress={() => navigation.navigate('Sandwichs')}
            >
                <Text>Sandwichs</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.card__container}
                onPress={() => navigation.navigate('Desserts')}    
            >
                <Text>Desserts</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.card__container}
                onPress={() => navigation.navigate('Drinks')}
            >
                <Text>Boissons</Text>
            </TouchableHighlight>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     top: 50,
    // },
    card__container: {
        backgroundColor: '#fff',
        height: 200,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        // fontSize: 25,
        // fontWeight: 'bold',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    'card__container:last-child': {
        backgroundColor: 'red',
        marginBottom: 15
    }
})