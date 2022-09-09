import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class CategoriesList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.fetchProductsCategories();
  }

  fetchProductsCategories = async () => {
    const data = await getCategories();
    this.setState({ categories: data });
  };

  render() {
    const { categories } = this.state;
    const { handleCategoriesList } = this.props;
    return (
      <ul>
        {
          categories.map((element) => (
            <button
              key={ element.id }
              data-testid="category"
              type="button"
              name={ element.id }
              // ao chamar a função imediamente recebe-se o valor do objeto. Então é necessário criar uma arrow function.
              onClick={ () => handleCategoriesList(element.id) }
            >
              { element.name }
            </button>
          ))
        }
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  handleCategoriesList: PropTypes.func.isRequired,
};
