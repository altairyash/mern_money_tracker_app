import './App.css';
import FormComponent from './components/formComponent';
import Transactions from './components/transactions'; 
import {React} from 'react';
function App() {
  return (
    <div className="App">
      <FormComponent/>
      <Transactions/>
    </div>
  );
}

export default App;
