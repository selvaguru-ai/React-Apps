import logo from './logo.svg';
import {Route, Routes, Link} from 'react-router-dom';
import HomePage from './HomePage';
import Agent_Commission from './Agent_Commission';
import {useState} from 'react';
import './App.css';
import ObjectsEx from './ObjectsEx';
import Budget from './Budget';
import Upload from './Upload';
import ML_Component from './ML_Component';
import MLCharts from './MLCharts';

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
          <Link to='/Upload' className='nav-item'>Upload</Link>
          <Link to='/ml_component' className='nav-item'>ML Component</Link>
          <Link to='/ml_charts' className='nav-item'>ML Charts</Link>

      </nav>
    <Routes>
          <Route path = '/' element = {<HomePage/>}/>
          <Route path = '/agentCommission' element = {<Agent_Commission/>}/>
          <Route path = '/ObjectsEx' element = {<ObjectsEx/>}/>
          <Route path = '/Budget' element={<Budget get_data={get_expenses}/>}/>
          <Route path = '/Upload' element={<Upload />} />
          <Route path = '/ml_component' element={<ML_Component/>} />
          <Route path = '/ml_charts' element={<MLCharts/>}/>
    </Routes>
    </div>
  );
}

export default App;
