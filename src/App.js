import React from 'react';
import Dashboard from './Pages/Dashboard/Dashboard.component';
import Calculator from './Pages/Calculator/Calculator.component';
import CategoryMatrix from './Pages/CategoryMatrix/CategoryMatrix.compoent';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/calculate" component={Calculator} />
        <Route exact path="/matrix" component={CategoryMatrix} />
      </Switch>
    </div>
  );
}

export default App;
