import './App.css';
import FormComponent from './components/formComponent';
import Transactions from './components/transactions'; 
import {React, useState} from 'react';
function App() {
  const [addTransaction,setAddTransaction] = useState(false)
  const [balance,setBalance] = useState(0)
  return (
    <div className="App">
      <FormComponent 
        setAddTransaction={setAddTransaction}
        balance={balance}
      />
      <Transactions
        addTransaction={addTransaction}
        setBalance={setBalance}
      />
    </div>
  );
}

export default App;
