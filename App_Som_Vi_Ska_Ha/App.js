import React from 'react';
import { 
    StyleSheet, 
    View,
} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';

import Home from './app/components/screenHome/ScreenHome';
import Screen2 from './app/components/screen2/Screen2';
import Produkter from './app/components/screenProdukter/ScreenProdukter';

const StackNavigator = createStackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Screen2: { 
        screen: Screen2,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
    Produkter:{
        screen: Produkter,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
},{ headerMode: 'Screen' });

export default class App extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <StackNavigator />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});