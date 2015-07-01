import React from 'react'
import Back from '../src/Back'
import {strictEqual} from 'assert'

export default {

  'Back': {

    'renders div.card-back > children': function() {
      let html = React.renderToStaticMarkup(
        <Back>
          <i />
        </Back>
      )
      strictEqual(html, '<div class="card-back"><i></i></div>')
    }

  }

}
