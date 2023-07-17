import React from 'react';

import './MenuList.scss';

import MenuItem from '../MenuItem/MenuItem';

function MenuList(props) {
  return (
      <div className="menu-list">
        { props.items.map(i =>
            <MenuItem
                item={i}
                key={i.id}
            />)
        }
      </div>
  )
}

export default MenuList;