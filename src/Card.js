import React, {PropTypes} from 'react';
import classnames from 'classnames';
import Front from './Front';
import Back from './Back';

class Card extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={classnames('card', this.props.className)}>
        <div className='card-transform'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Card.Front = Front;
Card.Back = Back;

export default Card;
