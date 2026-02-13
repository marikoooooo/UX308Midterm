import { Text, View } from 'react-native';
import { coinTotal } from '../cointotal.js';

//input of coin counts
export function CoinTotal({ nickels = 0, dimes = 0, quarters = 0, loonies = 0, toonies = 0}) {
    // processing
    let total = coinTotal(nickels, dimes, quarters, loonies, toonies);

    // output jsx to be displayed
    return (
        <View>
            <Text>
                coinTotal({nickels}, {dimes}, {quarters}, {loonies}, {toonies}) returned ${total.toFixed(2)}
            </Text>
        </View>
    );
}