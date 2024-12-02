import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { APIContext } from './config/context';
import 'bootstrap/dist/css/bootstrap.min.css';

const ML_Component = () => {
    const [policyValue, setPolicyValue] = useState('');
    const [predictedValue, setPredictedValue] = useState('');

    const {PredictedCommissions=[], setpredictedCommissions, ActualCommission=[], setactualCommission} = useContext(APIContext)

    const callAPI = async () => {
        try{
        const getResponse = await axios.post ('http://127.0.0.1:5000/predict', {
            policy_value: policyValue,
        });
        
        // Set the predicted commission from the getResponse
        setPredictedValue(getResponse.data.predicted_commission);
        
        }catch(error){
            console.error('Error calling the API:', error);
        }
    }

    const addToList = ()=>{
        setpredictedCommissions((preVal)=> [...preVal, predictedValue]);
        setactualCommission((prevVal)=> [...prevVal, policyValue]);
    }

  return (
    <>
    <div>
        
        <input type="text" value={policyValue} onChange={(e)=>{
            setPolicyValue(e.target.value)
        }} placeholder='Policy Value'/>

        <button onClick={callAPI}>Predict Commission Amt</button>
        <button onClick={addToList}>Store Predicted & Actual Values</button>
    </div>
    <div>
        <p>Predicted Value: {predictedValue}</p>
    </div>
    <div>
        <table striped bordered hover={{ width: "100%", borderCollapse: "separate", borderSpacing: "105px 0" }}>
            <thead style={{ backgroundColor: "#007bff", color: "white" }}>
                <th style={{ padding: "10px 20px" }}>Predicted Value</th>
                <th style={{ padding: "10px 20px" }}>Actual Value</th>
            </thead>
            <tbody>
                {PredictedCommissions.map((item, index)=>(
                    <tr key={index}>
                        <td style={{ padding: "10px 20px" }}>{item}</td>
                        <td style={{ padding: "10px 20px" }}>{ActualCommission[index]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default ML_Component