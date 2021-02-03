import React from 'react';
import { ScrollView } from 'react-native';
import {
    useSelector
} from 'react-redux';

import CardFood from '../Components/CardFood';

export default function Desserts () {

    const { desserts } = useSelector(state => state);

    return (
        <ScrollView>
            {desserts.map((dessert, index) => (
                <CardFood
                    typeOfCommand={dessert}
                    key={index}
                />
            ))}
        </ScrollView>
    )
}