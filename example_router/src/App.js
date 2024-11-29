import logo from './logo.svg';
import {Route, Routes, Link} from 'react-router-dom';
import HomePage from './HomePage';
import Agent_Commission from './Agent_Commission';
import {useState} from 'react';
import './App.css';
import ObjectsEx from './ObjectsEx';
import Budget from './Budget';
import Chart from './Chart';
import Upload from './Upload';

function App() {
  const [expense, sendExpense] = useState(0);
  //create a Callback function
  const get_expenses = (expense)=>{
    sendExpense(expense)
  }

  return (
    <div className="App">
      <nav className='nav'>
          <Link to='/' className="nav-item"> HomePage </Link>
          <Link to='/agentCommission' className="nav-item"> Agent Commissions </Link>
          <Link to='/ObjectsEx' className="nav-item">Objects Example</Link>
          <Link to='/Budget' className='nav-item'>Budget</Link>
          <Link to='/Chart' className='nav-item'>Chart</Link>
          <Link to='/Upload' className='nav-item'>Upload</Link>

      </nav>
    <Routes>
          <Route path = '/' element = {<HomePage/>}/>
          <Route path = '/agentCommission' element = {<Agent_Commission/>}/>
          <Route path = '/ObjectsEx' element = {<ObjectsEx/>}/>
          <Route path = '/Budget' element={<Budget get_data={get_expenses}/>}/>
          <Route path = '/Chart' element={<Chart chart_data={expense}/>}/>
          <Route path = '/Upload' element={<Upload />} />
    </Routes>
    </div>
  );
}

export default App;
