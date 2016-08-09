import Back from './Back';
import classnames from 'classnames';
import Front from './Front';
import React, {PropTypes} from 'react';

const Card = ({className, children}) => (
  <div className={classnames('card', className)}>
    <div className="card-transform">
      {children}
    </div>
  </div>
);

Card.displayName = 'Card';

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.Front = Front;
Card.Back = Back;

export default Card;
