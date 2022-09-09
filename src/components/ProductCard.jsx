import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail,
      price, id } = this.props;
    return (
      <div
        key={ id }
        data-testid="product"
      >
        <Link
          to={ `/product/${id}` }
          data-testid="product-detail-link"
        >
          <img src={ thumbnail } alt={ title } />
          <h2>{title}</h2>
          <h3>{price}</h3>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;
