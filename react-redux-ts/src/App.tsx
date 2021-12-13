import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreators, State } from './state';

function App() {
  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(actionCreators, dispatch)
  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1 className="display-1 mb-5 mt-5"> {amount} </h1>
      <button className="btn btn-primary mx-2" onClick={() => depositMoney(1000)}> Deposit </button>
      <button className="btn btn-danger mx-2" onClick={() => withdrawMoney(500)}> Withdraw </button>
      <button className="btn btn-dark mx-2" onClick={() => bankruptMoney()}> Bankrupt </button>
    </div>
  );
}

export default App;
