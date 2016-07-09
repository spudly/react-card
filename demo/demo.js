import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../src/Card';
import classnames from 'classnames';

let container = document.querySelector('#container');

let flipped = false;

function getClassName () {
  return classnames('index-card', {
    'card-flipped': flipped
  });
}

function render () {
  ReactDOM.render(
    <Card className={getClassName()}>
      <Card.Front>
        <h1>Ether 12:4</h1>
      </Card.Front>
      <Card.Back>
        <h1>Ether 12:4</h1>
        <p>
          Wherefore, whoso believeth in God might with surety hope for a better
          world, yea, even a place at the right hand of God, which hope cometh
          of faith, maketh an anchor to the souls of men, which would make them
          sure and steadfast.
        </p>
      </Card.Back>
    </Card>,
    container
  );
}

// TODO:
// side: 'front', 'back'
// rotate: 90, 180, 270 degrees

render();
setInterval(function () {
  flipped = !flipped;
  render();
}, 3000);
