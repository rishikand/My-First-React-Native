import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BlueButton extends Component {
  render(){
    return <Button color="#17039c" title="Blue Button"></Button>
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{marginTop:60}}>
        <BlueButton/>
        </View>
    );
  }
}