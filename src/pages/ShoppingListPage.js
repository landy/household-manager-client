import React, { Component } from 'react';

import ShoppingList from '../components/ShoppingList/ShoppingList'

export default class ShoppingListPage extends Component {
    render(){
        return (
            <div>
                <ShoppingList items={this.props.Items}/>
            </div>
        )
    }
}