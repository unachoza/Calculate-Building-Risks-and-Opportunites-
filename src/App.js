import React from 'react';
import Dashboard from './Pages/Dashboard/Dashboard.component';
import SignUp from './Pages/SignUp/SignUp.component'
import SignInOrSignUp from './Pages/SignInOrSignUp/SignInOrSignUp.component';
import CategoryMatrix from './Pages/CategoryMatrix/CategoryMatrix.compoent';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/SignInOrSignUp" component={SignInOrSignUp} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/matrix" component={CategoryMatrix} />
      </Switch>
    </div>
  );
}

export default App;
