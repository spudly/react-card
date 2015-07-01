import React from 'react'
import Front from '../src/Front'
import {strictEqual} from 'assert'

export default {

  'Front': {

    'renders div.card-front > children': function() {
      let html = React.renderToStaticMarkup(
        <Front>
          <i />
        </Front>
      )
      strictEqual(html, '<div class="card-front"><i></i></div>')
    }

  }

}
