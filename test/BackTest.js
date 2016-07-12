import React from 'react';
import ReactDOM from 'react-dom/server';
import Back from '../src/Back';
import { strictEqual } from 'assert';

export default {

  Back: {

    'renders div.card-back > children': () => {
      const html = ReactDOM.renderToStaticMarkup(
        <Back>
          <i />
        </Back>
      );
      strictEqual(html, '<div class="card-back"><i></i></div>');
    },

  },

};
