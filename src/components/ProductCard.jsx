import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail,
      price, id } = this.props;
    return (
      <div
        key={ id }
        data-testid="product"
      >
        <img src={ thumbnail } alt={ title } />
        <h2>{title}</h2>
        <h3>{price}</h3>
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
