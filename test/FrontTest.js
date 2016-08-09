import {strictEqual} from 'assert';
import Front from '../src/Front';
import React from 'react';
import ReactDOM from 'react-dom/server';

export default {

  Front: {

    'renders div.card-front > children': () => {
      const html = ReactDOM.renderToStaticMarkup(
        <Front>
          <i />
        </Front>
      );
      strictEqual(html, '<div class="card-front"><i></i></div>');
    },

  },

};
