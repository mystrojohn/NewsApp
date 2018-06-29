import React, { Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { TabNavigator} from 'react-navigation';
import { HomeScreen } from './src/screens/home';
import { Entertainment } from './src/screens/Enertaintment';
import { Games } from './src/screens/Games';


export const Navigation = TabNavigator({
    News: {
        screen: HomeScreen
    },
    Entertainment: {
        screen: Entertainment
    },
    Games: {
        screen: Games
    },

})
