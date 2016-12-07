import React, { Component } from 'react';

export default class ShoppingListItem extends Component {
    render(){
        const item = this.props.item
        return (<div>{item.name}: {item.count}</div>);
    }
}