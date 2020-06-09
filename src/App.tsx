import React from 'react';

import GlobalStyles from './styles/global';
import Routes from './routes';

import { AuthProvider } from './hooks/auth';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <GlobalStyles />
  </>
);

export default App;
