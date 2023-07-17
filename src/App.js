import React from 'react';

import { useSelector } from "react-redux";

import Block from './components/Block/Block';
import MenuList from './components/MenuList/MenuList';
import CartList from "./components/CartList/CartList";

import { items } from './data'

import './styles/App.scss';

function App() {
  const cart = useSelector((state) => state.cart.items)

  return (
    <div className="app">
      <Block
          title={"To Go Menu"}
          body={
            <MenuList
                items={items}
            />
          }
      />

      <Block
          title={"Your Cart"}
          body={ <CartList items={cart} /> }
      />
    </div>
  );
}

export default App;
