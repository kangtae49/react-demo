import { useState } from 'react';
import AppRouter from 'components/AppRouter';
import 'components/App.css';

function App() {
  const [authUser, setAuthUser] = useState();

  return <AppRouter />;
}

export default App;
