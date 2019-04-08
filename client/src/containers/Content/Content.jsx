import React from 'react';

import './Content.scss';

import FilmTail from '../../components/complex/FilmTail';
import Row from '../../components/markup/Row';
import Column from '../../components/markup/Column';

const Content = () => (
  <div className="content">
    <Row>
      <Column>
        <FilmTail />
      </Column>
      <Column>
        <FilmTail />
      </Column>
      <Column>
        <FilmTail />
      </Column>
    </Row>
  </div>
);

export default Content;
