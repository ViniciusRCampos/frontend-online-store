import React, { Component } from 'react';
import CategoriesList from './CategoriesList';
import { Link } from 'react-router-dom';


export default class Products extends Component {
  state = {
    products: '',
  };

  render() {
    const { products } = this.state;

    return (
      <>
        <section>
          <p>Lista de Categorias</p>
          <CategoriesList />
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
        <div>
          <Link to="/cart">
            <button type="submit" data-testid="shopping-cart-button">
              Carrinho
            </button>
          </Link>
        </div>
      </>
    );
  }
}
