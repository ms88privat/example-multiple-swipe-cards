/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SwipeCards from 'react-native-multiple-swipe-cards';
import CardComponent from './src/CardComponent';

class exampleMultipleSwipeCards extends Component {

  constructor(props) {
    super(props);

    this.renderCard = this.renderCard.bind(this);

    this.state = {
      cards: [
        {id: 1, backgroundColor: 'red'},
        {id: 2, backgroundColor: 'blue'},
        {id: 3, backgroundColor: 'green'},
        {id: 4, backgroundColor: 'yellow'},
        {id: 5, backgroundColor: 'gray'},
        {id: 6, backgroundColor: 'black'},
      ]
    }

  }

  handleYup(card) {
    console.log('onYup', card);
    // TODO: removeCard from this.state.cards
  }

  handleNope(card) {
    console.log('handleNope', card);
    // TODO: removeCard from this.state.cards
  }

  handlePressCard(card) {
    console.log('handlePressCard', card);
  }

  renderCard(card) {
    return <CardComponent {...card} style={{}} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeCards
          cards={this.state.cards}
          onPress={this.handlePressCard.bind(this)}
          onYup={this.handleYup.bind(this)}
          onNope={this.handleNope.bind(this)}
          renderCard={this.renderCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('exampleMultipleSwipeCards', () => exampleMultipleSwipeCards);
