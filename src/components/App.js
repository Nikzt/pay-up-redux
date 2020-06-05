import React from 'react';
import './App.css';
import AddPayment from '../containers/AddPayment';
import PaymentListContainer from '../containers/PaymentListContainer';
import UserListContainer from '../containers/UserListContainer';
import AddUser from '../containers/AddUser';
import PayUpList from '../containers/PayUpList';

function App() {
  return (
    <div className="App">
        <AddPayment/>
        <PaymentListContainer/>
        <AddUser/>
        <UserListContainer/>
        <PayUpList/>
    </div>
  );
}

export default App;
