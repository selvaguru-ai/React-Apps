import React, { useContext } from 'react';
import {userContext} from './App';

const GrandChild = () => {
  const user = useContext(userContext)
  return (
    <p> Welcome, {user}</p>
  )
}

export default GrandChild;