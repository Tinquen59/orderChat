import React from 'react';
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { Link } from '@react-navigation/native';

import CardFood from '../Components/CardFood';

export default function Cart() {

    const { carts } = useSelector(state => state);

    return (
        carts.length ? (
            <ScrollView>
            {carts.map((cart, index) =>(
                <CardFood
                    typeOfCommand={cart}
                    index={index}
                    key={index}
                />
            ))}
        </ScrollView>
        ) : (
            <View style={styles.Container}>
                <Text>Vous n'avez rien ajouter dans votre panier</Text>
                <Link to="/Home" style={styles.CartLink}>Go to shopping !</Link>
            </View>
        )
        
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    CartLink: {
        marginTop: 10,
        color: '#00aeef',
        borderWidth: 2,
        borderColor: '#00aeef',
        padding: 10,
    }
})