import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Formulario from './Fomr.js';
import Pagamento from './Pagamento';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Form" component={Formulario} />
          <Route path="/pagamento" component={Pagamento} />
        </Switch>
      </Router>
    </>
  );
}
