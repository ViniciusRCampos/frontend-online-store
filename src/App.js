import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <section>
      <BrowserRouter>
        <p>Frontend-Online-Store</p>
        <Switch>
          <Route exact path="/" component={ Products } />
          <Route exact path="/cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
