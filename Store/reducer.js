const initialState = {
    menus: [
        {
            name: 'frites ribs',
            price: 12,
            description: 'une description temporaire',
        },
        {
            name: 'salade vegi',
            price: 15,
            description: 'une description temporaire',
        }
    ],
    sandwichs: [
        {
            name: 'jambon beurre',
            price: 3.5,
            description: 'une description temporaire',
        },
        {
            name: 'thon mayonnaise',
            price: 4.5,
            description: 'une description temporaire',
        }
    ],
    desserts: [
        {
            name: 'mousse au chocolat',
            price: 7,
            description: 'une description temporaire',
        },
        {
            name: 'éclair au chocolat',
            price: 5,
            description: 'une description temporaire',
        }
    ],
    drinks: [
        {
            name: 'coca-cola',
            price: 3.25,
            description: 'une description temporaire',
        },
        {
            name: 'pepsi',
            price: 3.25,
            description: 'une description temporaire',
        },
        {
            name: 'orangina',
            price: 3.25,
            description: 'une description temporaire',
        },
        {
            name: 'ice-tea',
            price: 3.25,
            description: 'une description temporaire',
        }
    ]
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case "ADD_CART":
            return {};

        default:
            return state;
    }
}