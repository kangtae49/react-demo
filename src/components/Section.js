import { Route } from 'react-router-dom';

import Dashboard from 'components/Dashboard';

function Section() {
  return (
    <div className="Section">
      <Route path="/" exact>
        Section
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </div>
  );
}

export default Section;
