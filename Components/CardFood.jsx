import React from 'react';
import { View, Image, Button, Text, StyleSheet } from 'react-native';

export default function CardFood (props) {

    const { typeOfCommand } = props

    return (
        <View style={styles.Card__body}>
            <View style={styles.Card__left}>
                <Image
                    style={styles.Card__leftImage}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                />
            </View>
            <View style={styles.Card__right}>
                <View style={styles.Card__right_header}>
                    <Text style={styles.Card__right_headerName}>{typeOfCommand.name}</Text>
                    <Text style={styles.Card__right_headerPrice}>{typeOfCommand.price}€</Text>
                </View>
                <Text style={styles.Card__rightDescription}>{typeOfCommand.description}</Text>
                <Button
                    style={styles.Card__rightBtn}
                    title="Ajouter"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Card__body: {
        flex: 1,
        margin: 15,
        padding: 15,
        borderRadius: 20,
        height: 200,
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    Card__left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Card__leftImage: {
        width: '80%',
        height: 120,
    },
    Card__right: {
        flex: 2,
    },
    Card__right_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    Card__right_headerName: {
        fontWeight: 'bold',
    },
    Card__right_headerPrice: {
        fontWeight: 'bold',
    },
    Card__rightDescription: {
        flex: 2,
        fontStyle: 'italic',
        color: 'gray',
        padding: 5,
    },
    Card__rightBtn: {
        backgroundColor: 'green',
        flex: 1,
    },
})