import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import { Grid, Table } from 'react-bootstrap';
import img1 from '../images/jar.jpg';
import img2 from '../images/psword.jpg';
import img3 from '../images/frame.jpg';

const Cart = () => {

  const [items, setItems] = useState([
    { name: 'Item 1', quantity: 1, product: img1, price: '$200' },
    { name: 'Item 2', quantity: 1, product: img2, price: '$500' },
    { name: 'Item 3', quantity: 1, product: img3, price: '$300' }
  ]);

  // Event handler for adding items to the cart
  const handleAddItem = (item) => {
    setItems([...items, item]);
  }

  // Event handler for removing items from the cart
  const handleRemoveItem = (item) => {
    setItems(items.filter(i => i !== item));
  }

  // Event handler for updating the quantity of an item in the cart
  const handleUpdateQuantity = (index, quantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = quantity;
    setItems(updatedItems);
  }

  return (
    <div style={{ marginTop: '200px ' }} className="shadow-lg p-3 mb-5 bg-white rounded container">
      <Button onClick={() => handleAddItem('new item')}>Add Item</Button>
      <Table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              
              <td>
                <input
                  type="number" 
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(index, e.target.value)}
                />
              </td>
                        
                <td><img src={item.product} height="100" width="100"></img></td>
              <td>{item.price}</td>
              <td>
                <Button onClick={() => handleRemoveItem(item)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
      <td> <b>Subtotal</b> : $1000 </td>    
        <Link to="/checkout">
          <Button>Checkout</Button>
        </Link>               
      </div>
    </div>
    
  );
}

export default Cart