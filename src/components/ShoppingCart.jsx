import React, { Component } from 'react';
import { getLocalProducts } from '../services/api';

export default class ShoppingCart extends Component {
  state = {
    cartItems: [],
  };

  componentDidMount() {
    let cartItems = getLocalProducts('produtos');
    if (!cartItems) cartItems = [];
    this.setState({ cartItems });
    console.log(cartItems);
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        { cartItems.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        ) : (
          cartItems.map((element) => (
            <div key={ element.id }>
              <h2 data-testid="shopping-cart-product-name">{element.title}</h2>
              <h3>{element.price}</h3>
              <h3 data-testid="shopping-cart-product-quantity">1</h3>
            </div>
          ))
        )}
      </div>
    );
  }
}
