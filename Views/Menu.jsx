import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import CardFood from '../Components/CardFood';

export default function Menu () {

    const { foods } = useSelector(state => state)
    
    return (
        <ScrollView>
            {foods.filter(food => food.type === 'menu').map((menu, index) => (
                <CardFood
                    typeOfCommand={menu}
                    indexOfCommand={index}
                    key={index}
                />
            ))}
        </ScrollView>
    )
}