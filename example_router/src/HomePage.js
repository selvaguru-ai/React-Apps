import React from 'react';
import {useState, useEffect} from 'react';

const HomePage = () => {
  const [count, updateCount] = useState(0);
  const [list, UpdateList] = useState([]);

  useEffect (()=> {
    if (count > 0){
    console.log('Count value is updated: ', {count})
  }
  else {
    console.log('Count value has been resetted')
  }
  }, [count]);

  const incrementFun = ()=>{
    updateCount(count+1);
    UpdateList(prevValue=> [...prevValue, count]);
  }

  const reset = ()=>{
    updateCount(0);
    UpdateList([]);
  }

  return (
    <div>
      <p>From Home</p>
      <text>{count}</text>
      {list.map((item, index)=> (
        <li key={index}>{item}</li>
      ))}
      <button onClick = {incrementFun}>Increment</button>
      <button onClick = {reset}>Reset</button>
    </div>
  )
}

export default HomePage
