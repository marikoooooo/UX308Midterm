// src/components/Eqdamage.jsx

import { Text, View } from 'react-native';
import { eqdamage } from '../eqdamage.js';

// input of earthquake intensity
export function Eqdamage({ intensity = 0 }) {
    // processing
    let result = eqdamage(intensity);

    // output jsx to be displayed
    return (
        <View>
            <Text>
                eqdamage({intensity}) returned "{result}"
            </Text>
        </View>
    );
}
