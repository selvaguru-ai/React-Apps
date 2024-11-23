import React,{useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
//https://cors-anywhere.herokuapp.com/corsdemo use this link and click temporary access to demo server
const API_read = ({greeting}) => {
  
  const [searchNumber, setSearchNumber] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
    console.log({greeting});
  const handleSearch = async()=> {
    try{
        const response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/`,
            {
            params: {
                number: searchNumber,
                version: '2.1',
            },
        });
        if (response.data.results && response.data.results.length > 0) {
            setData(response.data.results[0]);
            console.log(data);
            setError(null);
        }else {
            setData(null);
            setError('No Data found or invalid NPI number :', {searchNumber});
        }
    }
    catch(err) {
        console.log('Error fetching data');
        setData(null);
        setError('An error occured while fetching the data');
    }
  };

  return (
    <div>
      <h1>NPI Registery Lookup</h1>
      <div class='row'>

        <div class='col-4'>
        <label class="form-label">Enter NPI Number : {greeting}</label>
        </div>

        <div class='col-4'>
            <input type='text' id='npi-number' value={searchNumber} onChange={(e)=> setSearchNumber(e.target.value)} />
        </div>

        <div class='col-4'>
            <button class='btn btn-primary mt-2' onClick={handleSearch}>
                Search
            </button>
        </div>

      </div>
      <div class='row'>
        <h3> Provider Details </h3>
        {data &&
        <table class='table table-bordered'>
            <tbody>
                <tr>
                    <th>NPI</th>
                    <td>{data.number}</td>
                </tr>
                <tr>
                    <th>Full Name</th>
                    <td>{data.basic.first_name} {data.basic.middle_name} {data.basic.last_name}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{data.basic.gender}</td>
                </tr>
                <tr>
                    <th>Last Updated</th>
                    <td>{data.basic.last_updated}</td>
                </tr>
            </tbody>
        </table>
        }
      </div>
    </div>
  )
}

export default API_read
