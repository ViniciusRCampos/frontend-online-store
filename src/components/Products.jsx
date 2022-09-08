import React, { Component } from 'react';
import ProductsList from './ProductsList';

export default class Products extends Component {
  state = {
    products: '',
  };

  render() {
    const { products } = this.state;

    return (
      <section>
        <p>Lista de Produtos</p>
        <ProductsList />
        <div>Products</div>
        <label htmlFor="search-products">
          <input
            type="text"
            id="search-products"
            placeholder="Digite o Produto para pesquisar"
          />
        </label>
        {!products && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
      </section>
    );
  }
}
