import React from 'react';
import PropTypes from 'prop-types';

import Div from './Row.styles';
import Column from '../Column';

const Row = ({ children }) => (
  <Div>
    {children}
  </Div>
);

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(Column),
    PropTypes.arrayOf(Column)
  ]).isRequired
};

export default Row;
