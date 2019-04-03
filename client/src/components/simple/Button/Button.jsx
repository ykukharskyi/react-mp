import React from 'react';
import PropTypes from 'prop-types';

import Input from './Button.styles';

const Button = ({ title }) => (
  <Input type="button" value={title} />
);

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;
