import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductById, setLocalProducts, getLocalProducts } from '../services/api';

export default class Product extends Component {
  state = {
    product: '',
    attributes: [],
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

  saveToLocalStorage = ({ target }) => {
    const idProduct = target.name;
    const storage = getLocalProducts('produtos') || [];
    const product = this.cartItem(idProduct);
    setLocalProducts('produtos', [...storage, product]);
  };

  cartItem = () => {
    const { product } = this.state;
    const { title, thumbnail, price, id } = product;
    const itemCart = {
      id,
      title,
      thumbnail,
      price,
    };
    return itemCart;
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
        <div>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ this.saveToLocalStorage }
          >
            Adicionar ao Carrinho
          </button>
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
