import React from 'react';

import NetflixLogo from '../../components/simple/NetflixLogo';
import SearchBox from '../../components/complex/SearchBox';

import './Header.scss';

export default props => (
  <div className="header header-netflix-background">
    <NetflixLogo />
    <SearchBox />
  </div>
);
