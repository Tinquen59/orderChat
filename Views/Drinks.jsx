import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import CardFood from '../Components/CardFood';

export default function Drinks () {

    const { foods } = useSelector(state => state);

    return (
        <ScrollView>
            {foods.filter(food => food.type === 'drink').map((drink, index) => (
                <CardFood
                    typeOfCommand={drink}
                    indexOfCommand={index}
                    key={index}
                />
            ))}
        </ScrollView>
    )
}