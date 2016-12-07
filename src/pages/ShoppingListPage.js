import React from 'react';
import ShoppingList from '../components/ShoppingList/ShoppingList'

class ShoppingListPage extends React.Component {
    render(){
        const items = [{
            id: 1,
            name: 'foo',
            count: 12
        },
        {
            id: 2,
            name: 'bar',
            count: 15
        }];
        return (
            <div>
                <ShoppingList items={items}/>
            </div>
        );
    }
}
export default ShoppingListPage 