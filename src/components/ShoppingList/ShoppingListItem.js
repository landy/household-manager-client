import React from 'react';

const ShoppingListItem =  ({item}) => 
    <div>{item.name}: {item.count}</div>;

export default ShoppingListItem;