import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import MapScreen from '../components/MapScreen';
import HaystackScreen from '../components/HaystackScreen';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },

  Main: { screen: HaystackScreen },


  Map: { screen: MapScreen },
  // Haystack: {screen: HaystackScreen}
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
