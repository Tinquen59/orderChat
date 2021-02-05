import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import CardFood from '../Components/CardFood';

export default function Sandwichs () {

    const { foods } = useSelector(state => state);

    return (
        <ScrollView>
            {foods.filter(food => food.type === 'sandwich').map((sandwich, index) => (
                <CardFood
                    typeOfCommand={sandwich}
                    indexOfCommand={index}
                    key={index}
                />
            ))}
        </ScrollView>
    )
}