const initialState = {
    foods: [
        {
            name: 'frites ribs',
            price: 12,
            quantity: 0,
            description: 'une description temporaire',
            type: 'menu',
        },
        {
            name: 'salade vegi',
            price: 15,
            quantity: 0,
            description: 'une description temporaire',
            type: 'menu',
        },
        {
            name: 'jambon beurre',
            price: 3.5,
            quantity: 0,
            description: 'une description temporaire',
            type: 'sandwich',
        },
        {
            name: 'thon mayonnaise',
            price: 4.5,
            quantity: 0,
            description: 'une description temporaire',
            type: 'sandwich',
        },
        {
            name: 'mousse au chocolat',
            price: 7,
            quantity: 0,
            description: 'une description temporaire',
            type: 'dessert',
        },
        {
            name: 'éclair au chocolat',
            price: 5,
            quantity: 0,
            description: 'une description temporaire',
            type: 'dessert',
        },
        {
            name: 'coca-cola',
            price: 3.25,
            quantity: 0,
            description: 'une description temporaire',
            type: 'drink',
        },
        {
            name: 'pepsi',
            price: 3.25,
            quantity: 0,
            description: 'une description temporaire',
            type: 'drink',
        },
        {
            name: 'orangina',
            price: 3.25,
            quantity: 0,
            description: 'une description temporaire',
            type: 'drink',
        },
        {
            name: 'ice-tea',
            price: 3.25,
            quantity: 0,
            description: 'une description temporaire',
            type: 'drink',
        }
    ],
    drinks: [
        {
            name: 'coca-cola',
            price: 3.25,
            quantity: 0,
            description: 'une description temporaire',
            type: 'drink',
        },
        {
            name: 'pepsi',
            price: 3.25,
            quantity: 0,
            description: 'une description temporaire',
            type: 'drink',
        },
        {
            name: 'orangina',
            price: 3.25,
            quantity: 0,
            description: 'une description temporaire',
            type: 'drink',
        },
        {
            name: 'ice-tea',
            price: 3.25,
            quantity: 0,
            description: 'une description temporaire',
            type: 'dessert',
        }
    ],
    carts: []
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        // permets d'ajouter des éléments au panier
        case "ADD_TO_CART":
            let foodsTampon = [...state.foods];
            let foodsSuperTampon = { ...foodsTampon[action.indexOfCommand] };

            foodsSuperTampon.quantity += 1
            foodsTampon[action.indexOfCommand] = foodsSuperTampon;
            
            const priceTotal = action.unitPrice * foodsTampon[action.indexOfCommand].quantity;  // permets de calculer le prix en fonction de la quantité

            const occurenceInCart = state.carts.filter(cart => cart.name === action.foodName);
            let newCart = [];

            // si l'élément n'est pas encore dans le panier alors on l'ajoute sinon on augmente la quantité de 1
            if (!occurenceInCart.length) {
                newCart = [
                    ...state.carts,
                    {
                        name: action.foodName,
                        quantity: foodsTampon[action.indexOfCommand].quantity,
                        unitPrice: action.unitPrice,
                        price: priceTotal
                    }
                ];
            } else {
                newCart = state.carts;
                for (const cart of newCart) {
                    if (cart.name === occurenceInCart[0].name) {
                        cart.quantity += 1;
                    }
                }
            }
            return { 
                ...state,
                foods: foodsTampon,
                carts: newCart
            };

        // permets de supprimer un élément du tableau
        case "REMOVE_FROM_CART":
            return {
                ...initialState,
                carts: [
                    ...state.carts.filter(cart => cart.name !== action.foodName)
                ]
            };

        default:
            return state;
    }
}