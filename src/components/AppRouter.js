import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'routes/Home';

function AppRouter() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Home />
      </Route>
    </BrowserRouter>
  );
}

export default AppRouter;
