import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

export default class Product extends Component {
  state = {
    attributes: [],
    product: '',
  };

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);
    const { attributes } = product;
    this.setState({ attributes, product });
  };

  didPressClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { attributes, product } = this.state;
    const details = attributes.slice(0, Number('25'));

    return (
      <section>
        <div>
          <button
            type="button"
            onClick={ this.didPressClick }
          >
            Return
          </button>
        </div>
        <div>Product</div>
        <div>
          <Link to="/cart">
            <button type="submit" data-testid="shopping-cart-button">
              Carrinho
            </button>
          </Link>
        </div>
        <section>
          <div>
            <h2
              data-testid="product-detail-name"
            >
              {product.title}
            </h2>
            <img
              data-testid="product-detail-image"
              src={ product.thumbnail }
              alt={ product.title }
            />
            <h3 data-testid="product-detail-price">{`R$ ${product.price}`}</h3>
          </div>
          <div>
            <h2>Details:</h2>
            <ul>
              {details.map((element, key) => (
                <li key={ key }>{`${element.name}: ${element.value_name}`}</li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }) }),
}.isRequired;
