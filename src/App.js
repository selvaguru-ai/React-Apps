import logo from './logo.svg';
import {useState, useEffect, createContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangeColor from './ChangeColor';
import Child from './Child';

export const userContext = createContext();

function App() {
  
  const user = "Selva";
  const [element, arrElement] = useState([]);
  const [number, storeNumber] = useState(0);
  const [operator, setOperator] = useState('');
  const [color, setColor] = useState('grey');

  const changeColor = (color)=>{
    setColor(color);
  }

  const getNumber = (num) =>{
    storeNumber(num);
    arrElement((prevNum) => [...prevNum, num])
    console.log(`${num}`)
  }

  useEffect(()=> {
    console.log(`${element}`);
  },[element])

  return (
    <>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <label class="text-center d-block">CALCULATOR APP</label>
        <input type='number' placeholder='0' className='w-100' value={number} />
      </div>
    </div>
  <div class="row">
  <div class="col-4">
    <div id= "btn-1" class="calculator-box" onClick={()=>getNumber(1)}>1</div>
  </div>
  <div class="col-4">
    <div id= "btn-2" class="calculator-box" onClick={()=>getNumber(2)}>2</div>
  </div>
  <div class="col-4">
    <div id= "btn-3" class="calculator-box" onClick={()=>getNumber(3)}>3</div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
    <div id= "btn-3" class="calculator-box" onClick={()=>getNumber(4)}>4</div>
    </div>
    <div class="col-4">
    <div id= "btn-3" class="calculator-box" onClick={()=>getNumber(5)}>5</div>
    </div>
    <div class="col-4">
    <div id= "btn-3" class="calculator-box" onClick={()=>getNumber(6)}>6</div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
    <div id= "btn-3" class="calculator-box" onClick={()=>getNumber(7)}>7</div>
    </div>
    <div class="col-4">
    <div id= "btn-3" class="calculator-box" onClick={()=>getNumber(8)}>8</div>
    </div>
    <div class="col-4">
    <div id= "btn-3" class="calculator-box" onClick={()=>getNumber(9)}>9</div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
    <div id= "btn-3" class="calculator-box" onClick={()=>setOperator('+')}>+</div>
    </div>
    <div class="col-4">
    <div id= "btn-3" class="calculator-box" onClick={()=>getNumber(0)}>0</div>
    </div>
    <div class="col-4">
    <div id= "btn-3" class="calculator-box" onClick={()=>setOperator('/')}>/</div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
    <div id= "btn-3" class="calculator-box" onClick={()=>getNumber('=')}>=</div>
    </div>
    <div class="col-4">
    <div id= "btn-3" class="calculator-box" onClick={()=>setOperator('-')}>-</div>
    </div>
    <div class="col-4">
      <div id= "btn-3" class="calculator-box" onClick={()=>setOperator('C')}>C</div>
    </div>
  </div>
  <div class='row'>
    <div class='col-6'>
      {/* Block that changes the color */}
      <div style={{
        height: '200px',
        width: '200px',
        backgroundColor: color,
        border: '1px solid black'
      }} />
      <div>
        <ChangeColor getColorFromChild={changeColor} />
      </div>
    </div>
    <div class='col-6'>
      <userContext.Provider value= {user}>
      <Child />
      </userContext.Provider>
    </div>
  </div>
</div>
   </>
  );
}

export default App;
