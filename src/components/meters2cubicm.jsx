// src/components/Meters2Cubicm.jsx

import { Text, View } from 'react-native';
import { meters2cubicm } from '../meters2cubicm.js';

// input of cube height in meters
export function Meters2Cubicm({ meters = 0 }) {
    // processing
    let volume = meters2cubicm(meters);

    // output jsx to be displayed
    return (
        <View>
            <Text>
                meters2cubicm({meters}) returned {volume} cubic meters
            </Text>
        </View>
    );
}
