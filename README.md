# react-card

[![NPM](https://nodei.co/npm/react-card.png)](https://www.npmjs.com/package/react-card)

[![Build Status](https://travis-ci.org/spudly/react-card.svg?branch=master)](https://travis-ci.org/spudly/react-card) [![Test Coverage](https://codeclimate.com/github/spudly/react-card/badges/coverage.svg)](https://codeclimate.com/github/spudly/react-card/coverage)

[![Dependencies](https://david-dm.org/spudly/react-card.svg)](https://david-dm.org/spudly/react-card) [![DevDependencies](https://david-dm.org/spudly/react-card/dev-status.svg)](https://david-dm.org/spudly/react-card#info=devDependencies)

A react-component that renders a generic card, with both a front and back so
that the card can be flipped/rotated with CSS.

# Usage

```jsx
React.render(
  <Card>
    <Card.Front>

    </Card.Front>
    <Card.Back>

    </Card.Back>
  </Card>,
  document.body
);
```

# Styling

See the [demo.css](demo/demo.css) file for sample CSS code you can use to style the component.

# License

MIT
