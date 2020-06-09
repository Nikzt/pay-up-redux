import React from 'react';
import './App.css';
import AddPayment from '../containers/AddPayment';
import PaymentListContainer from '../containers/PaymentListContainer';
import UserListContainer from '../containers/UserListContainer';
import AddUser from '../containers/AddUser';
import PayUpList from '../containers/PayUpList';
import PayUpCalculator from '../containers/PayUpCalculator';

function App() {
  return (
    <div className="App">
        <AddPayment/>
        <PaymentListContainer/>
        <AddUser/>
        <UserListContainer/>
        <PayUpCalculator/>
        <PayUpList/>
    </div>
  );
}

export default App;
