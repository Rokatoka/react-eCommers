import React from "react";

import { useSelector } from "react-redux";

import CartItem from "../CartItem/CartItem";
import './CartList.scss';

function CartList(props) {
  const { subtotal, tax } = useSelector((state) => state.cart)
  return(
      <div className="cart-list">
        { props.items.map((i, index) => <CartItem item={i} key={index} />) }

        { props.items.length ?
          <div className="cart-list__total">
            <div className="cart-list__block">
              <span className="cart-list__label">
                Subtotal:
              </span>

              <span className="cart-list__price">
                {`$${subtotal.toFixed(2)}`}
              </span>
            </div>

            <div className="cart-list__block">
              <span className="cart-list__label">
                Tax:
              </span>

              <span className="cart-list__price">
                {`$${tax.toFixed(2)}`}
              </span>
            </div>

            <div className="cart-list__block">
              <span className="cart-list__label">
                Total:
              </span>

              <span className="cart-list__price cart-list__price--total">
                {`$${(tax+subtotal).toFixed(2)}`}
              </span>
            </div>
          </div>
            :
            <span>Your cart is empty.</span>
        }
      </div>
  );
}

export default CartList;