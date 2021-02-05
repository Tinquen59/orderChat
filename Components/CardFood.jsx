import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ThemeProvider, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-elements';

export default function CardFood (props) {

    const { typeOfCommand, indexOfCommand, index } = props
    const route = useRoute();
    const dispatchMethod = useDispatch();
    
    /**
     * permets d'ajouter un élément au panier
     * @param {*} element tableau d'objet qui contient toutes les informations de l'élément
     * @param {*} index c'est la position de l'élément de le state global (reducer)
     */
    function addToCart(element, index) {
        dispatchMethod({
            type: 'ADD_TO_CART',
            foodName: element.name,
            unitPrice: element.price,
            price: element.price,
            indexOfCommand: index
        });
    }

    /**
     * permets de supprimer un élément du panier
     * @param {*} element tableau d'objet qui contient toutes les informations de l'élément
     * @param {*} index c'est la position de l'élément de le state global (reducer)
     */
    function removeFromCart(element, index) {
        dispatchMethod({
            type: 'REMOVE_FROM_CART',
            foodName: element.name,
            index: index
        })
    }

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
                {/* si on est dans le panier on affiche la quantité et le bouton supprimer sinon la description et et le bouton ajouter */}
                {route.name === 'Cart' ? (
                    <React.Fragment>
                        <Text style={styles.Card__rightQuantity}>{typeOfCommand.quantity}</Text>
                        <Button
                            title="Supprimer"
                            buttonStyle={{ backgroundColor: '#ef2c00' }}
                            onPress={() => removeFromCart(typeOfCommand, index)}
                        />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Text style={styles.Card__rightDescription}>{typeOfCommand.description}</Text>
                        <Button
                            title="Ajouter"
                            buttonStyle={{ backgroundColor: '#00aeef' }}
                            onPress={() => addToCart(typeOfCommand, indexOfCommand)}
                        />
                    </React.Fragment>
                )}
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
    Card__rightQuantity: {
        flex: 2,
        color: 'gray',
        padding: 5,
        paddingTop: 15,
    },
    Card__rightDescription: {
        flex: 2,
        fontStyle: 'italic',
        color: 'gray',
        padding: 5,
    }
})