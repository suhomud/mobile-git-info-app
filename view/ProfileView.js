import React from 'react';

import { Text, View, Image, ActivityIndicator } from 'react-native';
import styles from '../style/MainStyle';

export default class ProfileView extends React.Component {
  static navigationOptions = {
    title: 'Git Profile'
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      gitAccount: null,
      }
  }

  componentDidMount() {
    return fetch('https://api.github.com/users/suhomud')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          gitAccount: responseJson,
        } ,  function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.containerMainScreen}>
          <ActivityIndicator />
        </View>
        );
    }
      return (
        <View style={styles.containerProfileScreen}>
          <View style={styles.containerProfileInfo}>
            <Text style={styles.text}>
                <Text style={styles.titleText}>Git account{"\n"}</Text>
                <Text>
                  Login: {this.state.gitAccount.login}{"\n"}
                  Name: {this.state.gitAccount.name}{"\n"}
                  Location: {this.state.gitAccount.location}{"\n"}
                </Text>
            </Text>
            <Image source={{uri: this.state.gitAccount.avatar_url}}
                   style={{width: 193, height: 200}}/>
          </View>
        </View>
      );
  }

}
