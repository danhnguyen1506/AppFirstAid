import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import CaseSelection from './src/screens/CaseSelection';
import Introduction from './src/screens/Introduction';
import Aboutapp from './src/screens/Aboutapp';
import Aboutauthor from './src/screens/Aboutauthor';
import Importantnotificant from './src/screens/Importantnotificant';
import Unconscious1 from './src/Unconscious/Unconscious1'
import Unconscious3 from './src/Unconscious/Unconscious3'
import Unconscious4 from './src/Unconscious/Unconscious4'
import Unconscious5 from './src/Unconscious/Unconscious5'
import Unconscious6 from './src/Unconscious/Unconscious6'
import Unconscious7 from './src/Unconscious/Unconscious7'
import Unconscious8 from './src/Unconscious/Unconscious8'
import Unconscious9 from './src/Unconscious/Unconscious9'
import Unconscious10 from './src/Unconscious/Unconscious10'
import Unconscious12 from './src/Unconscious/Unconscious12'
import Bleeding1 from './src/Bleeding/Bleeding1'
import Bleeding2 from './src/Bleeding/Bleeding2'
import Bleeding3 from './src/Bleeding/Bleeding3'
import Bleeding4 from './src/Bleeding/Bleeding4'
import Bleeding4_1 from './src/Bleeding/Bleeding4_1'
import Bleeding5 from './src/Bleeding/Bleeding5'
import Bleeding6 from './src/Bleeding/Bleeding6'
import Bleeding7 from './src/Bleeding/Bleeding7'
import Bleeding8 from './src/Bleeding/Bleeding8'
import Bleeding11 from './src/Bleeding/Bleeding11'
import Bleeding12 from './src/Bleeding/Bleeding12'
import Bone1 from './src/Bone/Bone1'
import Bone3 from './src/Bone/Bone3'
import Bone2 from './src/Bone/Bone2'
import Chocking1 from './src/Chocking/Chocking1'
import Chocking2 from './src/Chocking/Chocking2'
import Chocking3 from './src/Chocking/Chocking3'
import Chocking4 from './src/Chocking/Chocking4'
import Chocking5 from './src/Chocking/Chocking5'
import Drown1 from './src/Drown/Drown1'
import Drown2 from './src/Drown/Drown2'
import Bite from './src/Bite/Bite'
import Bite1 from './src/Bite/Bite1'
import Bite2 from './src/Bite/Bite2'
import Bite3 from './src/Bite/Bite3'
import Bite4 from './src/Bite/Bite4'
import Burn1 from './src/Burn/Burn1'
import Poison from './src/Poisoning/Poison'
import Poison1 from './src/Poisoning/Poison1'
import Poison2 from './src/Poisoning/Poison2'
import Poison3 from './src/Poisoning/Poison3'
import Poison4 from './src/Poisoning/Poison4'
import Heart1 from './src/Heart/Heart1'
import Heart2 from './src/Heart/Heart2'
import Stroke1 from './src/Stroke/Stroke1'
import Softtisue1 from './src/Softtisue/Softtisue1'
import Electricshock1 from './src/ElectricShock/Electricshock1'

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    
    Login: LoginScreen,
    CaseSelection: CaseSelection, 
    Introduction: Introduction,
    Aboutapp: Aboutapp,
    Aboutauthor: Aboutauthor,
    Importantnotificant: Importantnotificant,

    Unconscious1: Unconscious1,
    Unconscious3: Unconscious3,
    Unconscious4: Unconscious4,
    Unconscious5: Unconscious5,
    Unconscious6: Unconscious6,
    Unconscious7: Unconscious7,
    Unconscious8: Unconscious8,
    Unconscious9: Unconscious9,
    Unconscious10: Unconscious10,
    Unconscious12: Unconscious12,

    Bleeding1: Bleeding1,
    Bleeding2: Bleeding2,
    Bleeding3: Bleeding3,
    Bleeding4: Bleeding4,
    Bleeding5: Bleeding5,
    Bleeding6: Bleeding6,
    Bleeding7: Bleeding7,
    Bleeding8: Bleeding8,
    Bleeding11: Bleeding11,
    Bleeding12: Bleeding12,
    Bleeding4_1: Bleeding4_1,

    Bone1: Bone1,
    Bone2: Bone2,
    Bone3: Bone3,
    
    Bite: Bite,
    Bite1: Bite1,
    Bite2: Bite2,
    Bite3: Bite3,
    Bite4: Bite4,

    Burn1: Burn1,

    Chocking1: Chocking1,
    Chocking2: Chocking2,
    Chocking3: Chocking3,
    Chocking4: Chocking4,
    Chocking5: Chocking5,

    Poison: Poison,
    Poison1: Poison1,
    Poison2: Poison2,
    Poison3: Poison3,
    Poison4: Poison4,

    Drown1: Drown1,
    Drown2: Drown2,

    Heart1: Heart1,
    Heart2: Heart2,

    Stroke1: Stroke1,

    Softtisue1: Softtisue1,

    Electricshock1: Electricshock1,
  },
  // {
  //   initialRouteName: 'Home',
  // }
  {headerMode: 'none'}
)