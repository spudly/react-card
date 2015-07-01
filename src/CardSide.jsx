import React from 'react'

class CardSide extends React.Component {
  render() {
    return <div className={this.getClassName()}>
      {this.props.children}
    </div>
  }
}

export default CardSide
