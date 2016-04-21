var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} = React;

var PetProject = React.createClass({
  getInitialState() {
  },
  render() { return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to this app.
      </Text>
    </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = PetProject;
