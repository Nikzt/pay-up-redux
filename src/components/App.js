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
        <div className="user-section section">
          <h2>Users</h2>
          <AddUser/>
          <UserListContainer/>
        </div>
        <div className="payment-section section">
          <AddPayment/>
          <PaymentListContainer/>
        </div>
        <div className="pay-up-section section">
          <PayUpCalculator/>
          <PayUpList/>
        </div>
    </div>
  );
}

export default App;
