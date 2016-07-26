import React from 'react';
import ReactDOM from 'react-dom/server';
import Front from '../src/Front';
import {strictEqual} from 'assert';

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
