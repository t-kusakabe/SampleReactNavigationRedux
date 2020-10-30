import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Page1Screen extends React.Component {
  render () {
    return (
      <View>
        <Text>Page1</Text>
        <Button
          title='Go to Detail'
          onPress={() => {
            this.props.navigation.navigate('Page1Detail')
          }}
        />
      </View>
    );
  }
}
