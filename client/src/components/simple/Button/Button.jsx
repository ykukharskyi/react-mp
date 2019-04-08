import React from 'react';
import PropTypes from 'prop-types';

import Input from './Button.styles';

const Button = ({ title, onClick }) => (
  <Input type="button" value={title} onClick={onClick} />
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
