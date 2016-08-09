import {strictEqual} from 'assert';
import Back from '../src/Back';
import Card from '../src/Card';
import Front from '../src/Front';
import React from 'react';
import ReactDOM from 'react-dom/server';

export default {

  Card: {

    'contains static references to the Front and Back components': () => {
      strictEqual(Card.Front, Front);
      strictEqual(Card.Back, Back);
    },

    'renders as div.card > div.card-transform > children': () => {
      const html = ReactDOM.renderToStaticMarkup(
        <Card>
          <i />
        </Card>
      );
      strictEqual(
        html,
        '<div class="card"><div class="card-transform"><i></i></div></div>'
      );
    },

  },

};
