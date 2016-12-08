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
                    name: 'chleba',
                    count: 12
                },
                {
                    id: 2,
                    name: 'rohliky',
                    count: 15
                }]
            };
        default:
            return state;
    }
};