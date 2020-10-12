import 'react-native-gesture-handler';
import {createStackNavigator} from 'react-navigation-stack';
import MainPage from './MainPage';
import DetailScreen from './DetailScreen';


/*Der laves en stack navigationen*/
const SettingStack = createStackNavigator({
    /*Fra venstre er det side navnet og screen er vores View / Komponent*/
        Hjem: { screen: MainPage },
        Details:{screen: DetailScreen}
    },
    {
        /*Hvilket View skal starte og her vælger vi hjem*/
        initialRouteName:'Hjem',
        navigationOptions:{
            title:'Main'
        }
    }
);
/*Skyd det afsted så App.js kan bruge komponenet*/
export default SettingStack