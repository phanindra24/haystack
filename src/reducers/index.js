import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

// const initialShoppingList=[
//   {key: 'Tomatoes'},
//   {key: 'Potatoes'},
//   {key: 'Vegetable Oil'},
//   {key: 'Chocolates'},]

var initialShoppingList= {value:3};

function displayShoppingList(state=initialShoppingList,action){
  switch (action.type) {
    case 'Increment':
    // return { ...state, value: 444 };
    return {value:state.value + 1};

    case 'Decrement':
    return 
         state--;
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
  displayShoppingList,
});

export default AppReducer;
