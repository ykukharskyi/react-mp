import React from 'react';
import { storiesOf } from '@storybook/react';
import InputField from './InputField';

storiesOf('InputField', module)
  .add('default', () => <InputField />)
  .add('with placeholder', () => <InputField placeholder="hi there" />);
