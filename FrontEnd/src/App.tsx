import React, { useState } from 'react';
import AuthenticationRouter from './Router/AuthenticationRouter';
import UnAuthenticatedRouter from './Router/UnAuthenticatedRouter';

const App: React.FC = () => {
  const [Token, setToken] = useState(true);


  if (Token === true) {
    return (
      <AuthenticationRouter />
    )
  } else {
    return (
      <UnAuthenticatedRouter />
    )
  }
};

export default App;
