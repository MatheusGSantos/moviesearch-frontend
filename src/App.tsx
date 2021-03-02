import React from 'react';

import GlobalStyles from './styles/global';
import LogIn from './pages/LogIn';
import SingUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <LogIn />
    <GlobalStyles />
  </>
);

export default App;
