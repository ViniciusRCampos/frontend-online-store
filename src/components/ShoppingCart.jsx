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

  handleIncrease = (id) => {
    const { cartItems } = this.state;
    const itemCart = [...cartItems];
    const itemIndex = itemCart.findIndex((item) => item.id === id);
    itemCart[itemIndex].quantity += 1;
    localStorage.setItem('produtos', JSON.stringify(itemCart));
    this.setState({ cartItems: itemCart });
  };

  handleDecrease = (id) => {
    const { cartItems } = this.state;
    const itemCart = [...cartItems];
    const itemIndex = itemCart.findIndex((item) => item.id === id);
    if (itemCart[itemIndex].quantity > 1) {
      itemCart[itemIndex].quantity -= 1;
      localStorage.setItem('produtos', JSON.stringify(itemCart));
      this.setState({ cartItems: itemCart });
    }
  };

  handleRemove = (id) => {
    const { cartItems } = this.state;
    let itemCart = [...cartItems];
    itemCart = itemCart.filter((item) => item.id !== id);
    localStorage.setItem('produtos', JSON.stringify(itemCart));
    this.setState({ cartItems: itemCart });
  };

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
              <h3 data-testid="shopping-cart-product-quantity">{element.quantity}</h3>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.handleDecrease(element.id) }
              >
                -
              </button>
              <button
                type="button"
                data-testid="remove-product"
                onClick={ () => this.handleRemove(element.id) }
              >
                X
              </button>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.handleIncrease(element.id) }
              >
                +
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
}
