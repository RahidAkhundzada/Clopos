import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {connect} from 'react-redux';

import Opening from './Screens/Opening';
import Home from './Screens/Home';
import Menu from './Screens/Menu';
import Selected from './Screens/Selected';

const Stack1 = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerApp = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Menu" component={Menu} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack1.Navigator initialRouteName="Opening">
        <Stack1.Screen
          name="Opening"
          component={Opening}
          options={{headerShown: false}}
        />
        <Stack1.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack1.Screen
          name="Galaxy E-menu"
          component={DrawerApp}
          options={{headerShown: true}}
        />
        <Stack1.Screen
          name="Selected"
          component={Selected}
          options={{headerShown: false}}
        />
      </Stack1.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    data: state.Data.data,
  };
};

export default connect(
  mapStateToProps,
  null,
)(App);
