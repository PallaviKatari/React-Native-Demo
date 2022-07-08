import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Home extends Component {
   state = {
      myState: "Hi"
   }
   updateState = () => this.setState({ myState: 'The state is updated' })
   render() {
      return (
         <View>
            <Text onPress = {this.updateState} style={{marginLeft:10}}>
               {this.state.myState}
            </Text>
         </View>
      );
   }
}
export default Home;