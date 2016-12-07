import {SHOPPING_LIST_LOAD} from './actions';

const initialState = {
    items: []
};

export default function shoppingListReducer (state = initialState, action) {
    switch (action.type) {
        case SHOPPING_LIST_LOAD: 
            return {
                ...state,
                items: [{
                    id: 1,
                    name: 'foo',
                    count: 12
                },
                {
                    id: 2,
                    name: 'bar',
                    count: 15
                }]
            };
        default:
            return state;
    }
};