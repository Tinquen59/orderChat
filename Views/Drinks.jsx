import React from 'react';
import { ScrollView } from 'react-native';
import {
    useSelector
} from 'react-redux';

import CardFood from '../Components/CardFood';

export default function Drinks () {

    const { drinks } = useSelector(state => state);

    return (
        <ScrollView>
            {drinks.map((drink, index) => (
                <CardFood
                    typeOfCommand={drink}
                    key={index}
                />
            ))}
        </ScrollView>
    )
}