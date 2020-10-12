import {createStackNavigator} from 'react-navigation-stack';
import MainPage from './MainPage';
import DetailScreen from './DetailScreen';


/*Der laves en stack navigationen*/
const SettingStack = createStackNavigator({
    /*Fra venstre er det side navnet og screen er vores View / component*/
        Main: { screen: MainPage },
        Details:{screen: DetailScreen}
    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'Main',
        navigationOptions:{
            title:'MainPage'
        }
    }
);
/*Skyd det afsted så App.js kan bruge componenet*/
export default SettingStack