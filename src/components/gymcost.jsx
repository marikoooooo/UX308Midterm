// src/components/Gymcost.jsx

import { Text, View } from 'react-native';
import { gymcost } from '../gymcost.js';

// input of base cost and number of friends
export function Gymcost({ cost = 0, friends = 0 }) {
    // processing
    let total = gymcost(cost, friends);

    // output jsx to be displayed
    return (
        <View>
            <Text>
                gymcost({cost}, {friends}) returned ${total.toFixed(2)}
            </Text>
        </View>
    );
}
