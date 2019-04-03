import React from 'react';

import InputField from '../../simple/InputField';
import Button from '../../simple/Button';
import Row from '../../markup/Row';
import Column from '../../markup/Column';

export default () => (
  <div>
    <InputField />
    <Row>
      <Column>
        <Button title="Search" />
      </Column>
    </Row>
  </div>
);
