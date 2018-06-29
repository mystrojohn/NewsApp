import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';

import { Home } from '../screens/Home';
import { Entertainment } from '../screens/Entertainment';
import { Technology } from '../screens/Technology';
import { Sports } from '../screens/Sports';

export const Tabs = TabNavigator({
    News: {
        screen: Home
    },
    Entertain: {
        screen: Entertainment
    },
    Sports: {
        screen: Sports
    },
    Tech: {
        screen: Technology
    }

    

});
