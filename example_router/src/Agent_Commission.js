import React, {useRef, useState, useContext} from 'react'
import axios from 'axios'
import { APIContext } from './config/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const Agent_Commission = () => {

  const [data, setData] = useState([]);
  const [button, buttonPressed] = useState(0);

  const [input, setInput] = useState([{
    agent_id: "",
    trn_date: "",
    policy_type: "",
    policy_value: "",
    agent_experience: "",
    number_of_policies_sold: "",
    customer_satisfaction_score: "",
    commission_amt: "",
  }])

  const {agentCommission, setAgentCommission} = useContext(APIContext);

  const handleChange = (e)=>{
    const {name, value} = e.target
    //verify the numeric fields only have number data
    if (name === 'agent_id' || name==='trn_date' || name==='policy_value' || name==='agent_experience' || name=== 'number_of_policies_sold' || name ==='customer_satisfaction_score' || name ==='commission_amt'){
      //validate the value is only a number or an empty string
      if (value === "" || !isNaN(value)){
        setInput((prev)=> ({...prev, [name]:value}))
      }
      //Else raise an alert
      else {
        alert("Please enter a valid number")
      }
    }
    else {
    setInput((prev)=> {
      return {...prev, [name]: value}
     })
  }
}

  const handleSubmit =(e)=>{
    e.preventDefault()
    setAgentCommission((prev)=> [...prev, input])
    console.log("From ContextAPI, ", agentCommission)
  }

  return (
    <>
      <div className='row'>
      <Table striped bordered hover>
            <thead style={{ backgroundColor: "#007bff", color: "white" }}>
              <th>Agent_ID</th>
              <th>Transaction Date</th>
              <th>Policy Type</th>
              <th>Policy Value</th>
              <th>Agent Experience</th>
              <th>Number of Policies Sold</th>
              <th>Customer Satisfaction Score</th>
              <th>Commission Amount</th>
            </thead>
            <tbody>
              {agentCommission.map((item, index)=> (
                <tr key={index}>
                  <td>{item.agent_id} </td>
                  <td>{item.trn_date} </td>
                  <td>{item.policy_type} </td>
                  <td>{item.policy_value} </td>
                  <td>{item.agent_experience} </td>
                  <td>{item.number_of_policies_sold} </td>
                  <td>{item.customer_satisfaction_score} </td>
                  <td>{item.commission_amt} </td>
                </tr>
              ))}
            </tbody>
            </Table>
      </div>
      <div className='row'>
        <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
            <label>Agent ID</label>
            <input type='text' name='agent_id' onChange={handleChange}/>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Transaction Date</label>
            <input type='text' name='trn_date' onChange={handleChange}/>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Policy Type</label>
            <input type='text' name='policy_type' onChange={handleChange}/>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Policy Value</label>
            <input type='text' name='policy_value' onChange={handleChange}/>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Agent Experience</label>
            <input type='text' name='agent_experience' onChange={handleChange}/>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Number of Policies Sold</label>
            <input type='text' name='number_of_policies_sold' onChange={handleChange}/>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Customer Satisfaction Score</label>
            <input type='text' name='customer_satisfaction_score' onChange={handleChange}/>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Commission Amount</label>
            <input type='text' name='commission_amt' onChange={handleChange}/>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <button type='submit'>Add Agent Details</button>
          </div>
        </form>
      </div>
    </>

  )
}

export default Agent_Commission
