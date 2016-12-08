import React from 'react';
import { connect } from 'react-redux';

import ShoppingList from '../components/ShoppingList/ShoppingList'
import {
    loadShoppingListItems
} from '../components/ShoppingList/actions';

class ShoppingListPageRaw extends React.Component {
    
    render(){
        return (
            <div>
                <ShoppingList items={this.props.items}/>
            </div>
        );
    }

    componentDidMount(){
        this.props.loadShoppingListItems();
    }
}

function mapStateToProps (state) {
    const {shoppingList} = state;
    return {
        items: shoppingList.items
    };
}

const ShoppingListPage = connect(mapStateToProps, {loadShoppingListItems})(ShoppingListPageRaw);

export default ShoppingListPage;