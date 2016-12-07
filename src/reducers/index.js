import {combineReducers} from 'redux';

import shoppingListReducer from '../components/ShoppingList/reducer';

export const rootReducer = combineReducers({shoppingListReducer});