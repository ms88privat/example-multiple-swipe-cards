'use strict';

import React, {PropTypes, Component} from 'react';
import {Text, View, Image, Animated, StyleSheet} from 'react-native';

class CardComponent extends Component {

  render() {
    const {id, style, panHandlers, backgroundColor} = this.props;

    return (
      <Animated.View style={[s.container, style]} {...panHandlers}>
        <View style={[s.innerContainer, {backgroundColor}]}>
          <Text>ID: {id}</Text>
        </View>
      </Animated.View>
    );
  }
}

CardComponent.propTypes = {
  style: Animated.View.propTypes.style,
  panHandlers: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

CardComponent.defaultProps = {
  panHandlers: {},
};

export default CardComponent;

const s = StyleSheet.create({
  innerContainer: {
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: 'gray',
    overflow: 'hidden',
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
    bottom: 150,
  },
  image: {
    flex: 1,
  },
});
