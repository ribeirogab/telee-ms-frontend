import React from 'react';

import GlobalStyles from './styles/global';
import Routes from './routes';

import Provider from './hooks';

const App: React.FC = () => (
  <>
    <Provider>
      <Routes />
    </Provider>
    <GlobalStyles />
  </>
);

export default App;
