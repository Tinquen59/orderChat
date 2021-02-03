import React from 'react';
import { ScrollView } from 'react-native';
import {
    useSelector,
    useDispatch
} from 'react-redux'
import CardFood from '../Components/CardFood';

export default function Menu () {

    const { menus } = useSelector(state => state)
    
    return (
        <ScrollView>
            {menus.map((menu, index) => (
                <CardFood
                    typeOfCommand={menu}
                    key={index}
                />
            ))}
        </ScrollView>
    )
}