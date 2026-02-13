// src/components/Farenheit2Celcius.jsx

import { Text, View } from 'react-native';
import { farenheit2celcius } from '../farenheit2celcius.js';

// input of farenheit you are converting
export function Farenheit2Celcius({ farenheit = 0 }) {
    // processing
    let celcius = farenheit2celcius(farenheit);

    // output jsx to be displayed
    return (
        <View>
            <Text>
                farenheit2celcius({farenheit}) returned {celcius.toFixed(2)} °C
            </Text>
        </View>
    );
}
