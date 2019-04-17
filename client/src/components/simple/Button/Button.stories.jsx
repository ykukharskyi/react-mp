import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('primary', () => <Button theme="primary" title="Search" />)
  .add('secondary', () => <Button theme="secondary" title="Search" />)
  .add('transparent', () => <Button theme="transparent" title="release date" />)
  .add('primary small', () => <Button theme="primary-small" title="title" />)
  .add('primary small grey', () => <Button theme="primary-small-grey" title="title" />);
