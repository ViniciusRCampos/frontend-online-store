import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class ProductsList extends Component {
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
    return (
      <ul>
        {
          categories.map((element) => (
            <div key={ element.id }>
              <button
                data-testid="category"
                type="button"
                name={ element.id }
              >
                { element.name }
              </button>
            </div>
          ))
        }
      </ul>
    );
  }
}
