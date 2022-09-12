import React, { Component } from 'react';
import { getLocalProducts } from '../services/api';

export default class ShoppingCart extends Component {
  state = {
    productsList: [],
    storageList: [],
  };

  componentDidMount() {
    this.setState({
      productsList: getLocalProducts('produtos') || [] }, this.storageFilter);
  }

  storageFilter = () => {
    const { productsList } = this.state;
    const storageList = [];
    productsList.forEach((element) => {
      if (!storageList.some((item) => item.id === element.id)) {
        return storageList.push(element);
      }
    });
    this.setState({ storageList });
  };

  render() {
    const { productsList, storageList } = this.state;
    return (
      <div>
        { productsList.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        ) : (
          storageList.map((element) => (
            <div key={ element.id }>
              <h2 data-testid="shopping-cart-product-name">{element.title}</h2>
              <h3>{element.price}</h3>
              <h3 data-testid="shopping-cart-product-quantity">
                {productsList.filter((element2) => element2.id === element.id).length}
              </h3>
            </div>
          ))
        )}
      </div>
    );
  }
}
