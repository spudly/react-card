import CardSide from './CardSide';
import React from 'react';

const Back = props => <CardSide {...props} className="card-back" />;

Back.displayName = 'Back';

export default Back;
