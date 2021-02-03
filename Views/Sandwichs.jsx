import React from 'react';
import { ScrollView } from 'react-native';
import {
    useSelector
} from 'react-redux';

import CardFood from '../Components/CardFood';

export default function Sandwichs () {

    const { sandwichs } = useSelector(state => state);

    return (
        <ScrollView>
            {sandwichs.map((sandwich, index) => (
                <CardFood
                    typeOfCommand={sandwich}
                    key={index}
                />
            ))}
        </ScrollView>
    )
}