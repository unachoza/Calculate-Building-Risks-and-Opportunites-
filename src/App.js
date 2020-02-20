import React from 'react';
import Dashboard from './Pages/Dashboard/Dashboard.component';
import Calculator from './Pages/Calculator/Calculator.component';
import CategoryMatrix from './Pages/CategoryMatrix/CategoryMatrix.compoent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Calculator />
      <CategoryMatrix />
    </div>
  );
}

export default App;
