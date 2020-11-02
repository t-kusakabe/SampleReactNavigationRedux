import React from 'react';
import {
  Text,
  View
} from 'react-native';

import Count from '../contianers/count';

export default class Page2Screen extends React.Component {
  render() {
    return (
      <View>
        <Text>Page2</Text>
        <Count />
      </View>
    );
  }
}
