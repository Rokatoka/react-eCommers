import React from 'react';
import { add, remove } from "../../redux/cart";

import { useDispatch, useSelector } from "react-redux";

import './MenuItem.scss';

function MenuItem(props) {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart)

  return (
      <div className="menu-item">
        <div className="menu-item__wrapper">
          <img
              className="menu-item__image"
              src={require(`../../styles/assets/${props.item.image}`)}
              alt='item'
          />

          <div className="menu-item__info">
            <span className="menu-item__name">
              { props.item.name }
            </span>

            <span className="menu-item__price">
              { `$${props.item.price.toFixed(2)}` }
            </span>

            {
              items.find((i) => i.id === props.item.id)
                  ?
                  <button
                      className="menu-item__button"
                      style={{width: '170px'}}
                      onClick={() => dispatch(remove(props.item.id))}
                  >
                    Remove from cart
                  </button>
                  :
                  <button
                      className="menu-item__button"
                      onClick={() => dispatch(add(props.item))}
                  >
                    Add to Cart
                  </button>
            }
          </div>
        </div>
      </div>
  );
}

export default MenuItem;
