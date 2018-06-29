import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Tabs } from './src/config/router';
import { Container, Header, Body, Title, Content, List, ListItem, Left, Right, Icon, Button } from 'native-base';

class App extends Component {
    render() {
    //  return (
//      <Header>
//         <Left>
//             <Button transparent>
//             <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
//             </Button>
//         </Left>
//         <Body>
//             <Title children="Face THE News" />
//         </Body>
//     </Header>
    
// )

        return <Tabs />;
    }
}

export default App;
AppRegistry.registerComponent('JKNewsApp', () => App);