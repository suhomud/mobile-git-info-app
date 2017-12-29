import React from 'react';
import Button from 'apsl-react-native-button';
import { StyleSheet, Text, View, Image } from 'react-native';

import styles from '../style/MainStyle';

export default class HomeView extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.containerMainScreen}>
        <Button style={styles.button} textStyle={styles.buttonText}
           onPress={() => navigate('Profile', {}, this.getGitAccountInfo)}>
           Fetch Data
        </Button>
      </View>
    );
  }
}
