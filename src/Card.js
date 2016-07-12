import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Front from './Front';
import Back from './Back';

const Card = ({ className, children }) => (
  <div className={classnames('card', className)}>
    <div className="card-transform">
      {children}
    </div>
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.Front = Front;
Card.Back = Back;

export default Card;
