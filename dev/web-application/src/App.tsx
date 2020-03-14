import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './common/styled/global';
import store from './store';
import Routes from './routes';

const App: React.SFC = () => (
  <Provider store={store}>
    <Routes />
    <GlobalStyle />
  </Provider>
);

export default App;
