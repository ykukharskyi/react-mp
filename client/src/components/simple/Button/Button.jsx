import React from 'react';
import PropTypes from 'prop-types';

import {
  PrimaryButton,
  SecondaryButton,
  TransparentButton,
  PrimarySmallButton,
  PrimarySmallGreyButton
} from './Button.styles';

const Button = ({ title, onClick, theme }) => {
  switch (theme) {
    case 'primary':
      return <PrimaryButton type="button" value={title} onClick={onClick} />;
    case 'secondary':
      return <SecondaryButton type="button" value={title} onClick={onClick} />;
    case 'transparent':
      return <TransparentButton type="button" value={title} onClick={onClick} />;
    case 'primary-small':
      return <PrimarySmallButton type="button" value={title} onClick={onClick} />;
    case 'primary-small-grey':
      return <PrimarySmallGreyButton type="button" value={title} onClick={onClick} />;
    default:
      return <PrimaryButton type="button" value={title} onClick={onClick} />;
  }
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['primary', 'secondary', 'transparent', 'primary-small', 'primary-small-grey']).isRequired
};

export default Button;
