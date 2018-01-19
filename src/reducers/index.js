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

const initialState_Groceries = {
  searchTerm: '',
  recents: [],
  data: [
    { id: 0, key: 'Tomatoes', count: 0, cat: 'Vegetables' },
    { id: 1, key: 'Potatoes', count: 0, cat: 'Vegetables' },
    { id: 2, key: 'Vegetable Oil', count: 0, cat: 'Packaged Foods' },
    { id: 3, key: 'Chocolates', count: 0, cat: 'Packaged Foods' },
    { id: 4, key: 'Beer', count: 0, cat: 'Drinks' },
    { id: 5, key: 'Eggs', count: 0, cat: 'Meat' },
    { id: 6, key: 'Rice', count: 0, cat: 'Cereals' },
    { id: 7, key: 'Tomato sauce', count: 0, cat: 'Packaged Foods' }
  ],
};

function groc(state = initialState_Groceries, action) {

  switch (action.type) {
    case 'Increment':
      return {
        ...state, data: state.data.map(listItem => {
          if (listItem.id !== action.id) {
            return listItem;
          }
          return {
            ...listItem,
            count: listItem.count + 1
          }
        })
      }
    case 'Decrement':
      return {
        ...state, data: state.data.map(listItem => {
          if (listItem.id !== action.id || listItem.count === 0) {
            return listItem;
          }
          return {
            ...listItem,
            count: listItem.count - 1
          }
        })
      }
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
  groc,
});

export default AppReducer;
