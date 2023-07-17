import React from 'react';

import './Block.scss';

import MenuItem from '../MenuItem/MenuItem';

function Block(props) {
  let { title, body } = props;

  return (
      <div className="block">
        <h1>
          { title }
        </h1>

        { body }
      </div>
  );
}

export default Block;