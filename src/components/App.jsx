// src/components/App.jsx

import { Hello } from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { CoinTotal } from './cointotal.jsx';
import { Farenheit2Celcius } from './farenheit2celcius.jsx';
import { Meters2Cubicm } from './meters2cubicm.jsx';
import { Gymcost } from './gymcost.jsx';
import { Eqdamage } from './eqdamage.jsx';

import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />

      <SnowRemoval cm={3} />

      <Farenheit2Celcius farenheit={32} />
      <Farenheit2Celcius farenheit={70} />
      <Farenheit2Celcius farenheit={212} />
      
      <Meters2Cubicm meters={1} />
      <Meters2Cubicm meters={2} />
      <Meters2Cubicm meters={3} />

      <CoinTotal nickels={1} dimes={1} quarters={1} loonies={1} toonies={1} />
      <CoinTotal nickels={0} dimes={0} quarters={0} loonies={0} toonies={0} />

      <Gymcost cost={100} friends={1} />
      <Gymcost cost={100} friends={2} />
      <Gymcost cost={100} friends={3} />
      <Gymcost cost={100} friends={4} />

      <Eqdamage intensity={4.8} />
      <Eqdamage intensity={5.2} />
      <Eqdamage intensity={6.0} />
      <Eqdamage intensity={7.0} />
      <Eqdamage intensity={8.1} />
    </View>
  );
}
