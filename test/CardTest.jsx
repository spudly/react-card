import React from 'react'
import Card from '../src/Card'
import Front from '../src/Front'
import Back from '../src/Back'
import {strictEqual} from 'assert'

export default {

  'Card': {

    'contains static references to the Front and Back components': function() {
      strictEqual(Card.Front, Front)
      strictEqual(Card.Back, Back)
    },

    'renders as div.card > div.card-transform > children': function() {
      let html = React.renderToStaticMarkup(
        <Card>
          <i />
        </Card>
      )
      strictEqual(
        html,
        '<div class="card"><div class="card-transform"><i></i></div></div>'
      )
    }

  }

}
