import React from 'react';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary';

const Main = () => (
  <ErrorBoundary>
    <Header />
    <Content />
    <Footer />
  </ErrorBoundary>
);

export default Main;
