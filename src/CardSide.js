import React, {PropTypes} from 'react';

const CardSide = ({className, children}) => (
  <div className={className}>{children}</div>
);

CardSide.displayName = 'CardSide';

CardSide.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CardSide;
