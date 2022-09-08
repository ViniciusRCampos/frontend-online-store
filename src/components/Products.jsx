import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from './CategoriesList';
import ProductCard from './ProductCard';

export default class Products extends Component {
  state = {
    products: [],
    search: '',
    category: '',
    checked: false,
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  };

  productsAPI = async () => {
    const { category, search } = this.state;
    const result = await getProductsFromCategoryAndQuery(category, search);
    return result;
  };

  handleClick = async () => {
    const resultAPI = await this.productsAPI();
    const products = resultAPI.results;
    this.setState({ products, checked: true});
  };

  render() {
    const { products, checked, search } = this.state;
    return (
      <>
        <section>
          <section>
            <label htmlFor="search-products">
              <input
                type="text"
                id="search-products"
                placeholder="Digite o Produto para pesquisar"
                onChange={ this.handleChange }
                data-testid="query-input"
              />
            </label>
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>
          </section>
          <div>
            <Link to="/cart">
              <button type="submit" data-testid="shopping-cart-button">
                Carrinho
              </button>
            </Link>
          </div>
        </section>
        <section>
          <p>Lista de Categorias</p>
          <CategoriesList />
        </section>
        <section>
          {(!search && !checked) && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>)}
          {(products.length === 0 && checked) ? (
            <p>
              Nenhum produto foi encontrado
            </p>
          )
            : (products.map((produtos) => (
              <ProductCard
                key={ produtos.id }
                { ...produtos }
              />
            ))

            )}
        </section>
      </>
    );
  }
}
