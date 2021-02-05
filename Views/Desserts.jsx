import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import CardFood from '../Components/CardFood';

export default function Desserts () {

    const { foods } = useSelector(state => state);

    return (
        <ScrollView>
            {foods.filter(food => food.type === 'dessert').map((dessert, index) => (
                <CardFood
                    typeOfCommand={dessert}
                    indexOfCommand={index}
                    key={index}
                />
            ))}
        </ScrollView>
    )
}