import React, { Component } from 'react';

import ShoppingListItem from './ShoppingListItem'

export default class ShoppingList extends Component{
    render(){
        return (
            <div className="shoppingList">
                {this.props.items.map(item => 
                    <ShoppingListItem item={item} key={item.id} />
                )}
            </div>
        );
    }
}