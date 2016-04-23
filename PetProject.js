'use strict';

var React = require("react-native");

var {
  Component,
  StyleSheet,
  ScrollView,
  Text,
  View,
  NavigatorIOS,
} = React;

import Homepage from './homepage';
import UsersShow from './UsersShow';

class PetProject extends Component {
  onRightButtonPress() {
    this.refs.nav.push({
        title: 'Favorites',
        component: UsersShow
    })
  }
  onLeftButtonPress() {
    this.refs.nav.navigator.push({
      title: 'Profile',
      component: UsersEdit
    })
  }
  render() {
    return (
      <NavigatorIOS ref='nav' style={styles.container}
        initialRoute={{
          component: Homepage,
          title: 'Next Best Friend',
          rightButtonTitle: 'Favorites!',
          onRightButtonPress: this.onRightButtonPress,
          leftButtonTitle: 'Settings',
          onLeftButtonPress: this.onLeftButtonPress,
        }}
        tintColor="#FFFFFF"
        barTintColor="#183E63"
        titleTextColor="#FFFFFF"
        translucent={true}
      />
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
  },
})

module.exports = PetProject;
