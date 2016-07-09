import React, {PropTypes} from 'react'

class CardSide extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className={this.getClassName()}>
        {this.props.children}
      </div>
    );
  }
}

export default CardSide
