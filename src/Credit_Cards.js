import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';

const Credit_Cards = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState();
    const [label, setShowLabel] = useState(false);

    useEffect (()=> {
        const fetchData = async ()=>{
            try{
                const response = await axios.get('http://localhost:3100/api/data');
                setData(response.data)
            }
            catch(error){
                setError('Error occured while fetching the data');
            }
        };
        fetchData() //call the function to fetch the data
    }, []); //not giving any dependence since this useEffect runs when the application loads.

    const refreshData = async() =>{
        try{
            const refresh_response = await axios.get('http://localhost:3100/api/data');
            setData(refresh_response.data);
            setShowLabel(true);
        }
        catch {
            setError('Error occured while fetching this data')
        }
    }
  return (
    <>
    <div className='row'>
            <div className='col-12'>
               <h1 style={{textAlign: 'center'}}>{data ? data.message : 'Loading...'}</h1>
            </div>
    </div>

    <div className='row'>
        <div className='col-6'>
            {data && data.data ? (
        data.data.map((item, index)=> (
            <div className='card bg-info text-red shadow-sm mb-4' style={{}}>
                <div className='card body'>
                    <div className='card title'>
                        Item: {item}
                        <div className='card text'>
                            This is the item number {item} from node.js backend
                        </div>
                    </div>
                </div>
            </div>
        ))) : (<h3>"Loading..."</h3>)}
        </div>
         <div className='col-6'>
                <button onClick = {refreshData}>Display API data</button>
                <label>

                    {data && label ? data.message : "loading..."}
                </label>
            </div>
        </div>
      </>

  )
}

export default Credit_Cards
