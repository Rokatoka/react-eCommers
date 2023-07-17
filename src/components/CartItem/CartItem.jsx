import React from 'react';

import { useDispatch } from "react-redux";

import { increaseCount, decreaseCount } from "../../redux/cart";

import './CartItem.scss';

function CartItem(props) {
  const item = props.item

  const dispatch = useDispatch();

  return(
      <div className="cart-item">
        <img
            className="cart-item__image"
            src={require(`../../styles/assets/${item.image}`)}
        />

        <div className="cart-item__info">
          <span className="cart-item__name">
            { item.name }
          </span>

          <span className="cart-item__price">
            { `$${item.price.toFixed(2)}` }
          </span>
        </div>

        <div className="cart-item__bottom">
          <div className="cart-item__control">
            <button
                className="cart-item__button"
                disabled={item.count === 0}
                onClick={() => dispatch(decreaseCount(item.id))}
            />

            <span className="cart-item__amount">
              { item.count }
            </span>

            <button
                className="cart-item__button cart-item__button--right"
                onClick={() => dispatch(increaseCount(item.id))}
            />
          </div>

          <span className="cart-item__total-price">
            {`$${(item.price * item.count).toFixed(2)}`}
          </span>
        </div>
      </div>
  );
}

export default CartItem;