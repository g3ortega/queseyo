/**
 * QueSeYo App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} = React;

var Icon = require('react-native-vector-icons/FontAwesome');

var queseyo = React.createClass({
  render: function() {
    return (
    <TabBarIOS tintColor={"#ea4c89"}>
      <Icon.TabBarItem
        title="Todos"
        iconName="bookmark-o"
        selected={this.state.selectedTab === 'default'}>
      </Icon.TabBarItem>
    </TabBarIOS>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello QueSeYo!
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('queseyo', () => queseyo);
