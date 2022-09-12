import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';

function App() {
  return (
    <section>
      <BrowserRouter>
        <p>Frontend-Online-Store</p>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ ShoppingCart } />
          <Route exact path="/product/:id" component={ Product } />
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
