import {combineReducers} from 'redux';

import shoppingList from '../components/ShoppingList/reducer';

export const rootReducer = combineReducers({shoppingList});
