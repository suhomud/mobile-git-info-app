import React from 'react';
import { StackNavigator, NavigationActions,} from 'react-navigation';

import HomeView from './view/HomeView';
import ProfileView from './view/ProfileView';
import styles from './style/MainStyle';

const RootNavigator = StackNavigator({
  Home: { screen: HomeView },
  Profile: { screen: ProfileView },
});

export default class App extends React.Component {
  render() {
    return <RootNavigator/>;
  }
}
