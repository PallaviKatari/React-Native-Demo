import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import LotsOfGreetings from './Props';
import StateDemo from './State';
import List from './List';
import Inputs from './Input';
import ScrollViewExample from './Scrollview';
import ImagesExample from './Image';
import HttpExample from './Http';
import Animations from './Animation';
import ModalExample from './Modal';

export default class App extends React.Component {
  state = {
    myState: 'Hello',
  };
  render() {
    return (
      <View style={{ marginTop: 10,backgroundColor:'lightblue' }}>
        <ImagesExample />
        <ModalExample />
        <Inputs />
        <List />
        <Animations />
        <HttpExample />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>
          {' '}
          {this.state.myState}{' '}
        </Text>
        <Home />
        <LotsOfGreetings />
        <StateDemo />
      </View>
    );
  }
}
