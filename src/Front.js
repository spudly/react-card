import CardSide from './CardSide';
import React from 'react';

const Front = props => <CardSide {...props} className="card-front" />;

Front.displayName = 'Front';

export default Front;
