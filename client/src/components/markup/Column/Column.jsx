import React from 'react';
import PropTypes from 'prop-types';

import Div from './Column.styles';

const Column = ({ children }) => (
  <Div>
    {children}
  </Div>
);

Column.propTypes = {
  children: PropTypes.node.isRequired
};

export default Column;
