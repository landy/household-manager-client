import React, { Component } from 'react';

import ShoppingListItem from './ShoppingListItem'

export default class ShoppingList extends Component{
    render(){
        const { items } = this.props;

        return (
            <div className="shoppingList">
                {items.map(item => 
                    <ShoppingListItem item={item} />
                )}
            </div>
        );
    }
}