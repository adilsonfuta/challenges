import React from 'react';
import GlobalStyle from './common/styled/global';
import Routes from './routes';

const App: React.SFC = () => (
  <>
    <Routes />
    <GlobalStyle />
  </>
);

export default App;
