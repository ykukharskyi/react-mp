import React from 'react';

import NetflixLogo from '../../components/NetflixLogo';
import SearchBox from './SearchBox';

import './Header.scss';

export default props => (
  <div className="header header-netflix-background">
    <NetflixLogo />
    <SearchBox />
  </div>
);
