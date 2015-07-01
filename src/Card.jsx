import React from 'react'
import classnames from 'classnames'
import Front from './Front'
import Back from './Back'

class Card extends React.Component {

  render() {
    return <div className={this.getClassName()}>
      <div className='card-transform'>
        {this.props.children}
      </div>
    </div>
  }

  getClassName() {
    return classnames('card', this.props.className)
  }

}

Card.Front = Front
Card.Back = Back

export default Card
