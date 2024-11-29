import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Budget = ({get_data}) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [price, setPrice] = useState(0);
    const [expense, addExpenses] = useState([]);
    const [total, setTotal] = useState(0);
    const expenses = ['Select an Expense','Utilities', 'Rent', 'Groceries'];


    const handleChange = (event)=> {
        setSelectedValue(event.target.value);
    }

    const submitExpense = ()=>{
        addExpenses((prevValue)=>[...prevValue, {category: selectedValue, prices: price}])
    }

    useEffect(()=>{
        setTotal(expense.reduce((sum, item)=> sum + parseFloat(item.prices), 0))
        get_data(expense);
    },[expense])

 return (
    <div>
        <h1>Spending Tracker</h1>
                <div class='container'>
                    <div class='col-6'>
                    <div class='row'>
                        <div class='col-12'>
                            <select id='dropdown' value={selectedValue} onChange={handleChange}>
                                {expenses.map((item, index)=> (<option key={index}>{item}</option>))}
                            </select>
                        </div>
                    </div>
                    <div class='row' style={{marginTop: '10px'}}>
                        <div class='col-3'>
                            <input id='price' className='fields' onChange={(e)=> (setPrice(e.target.value))} placeholder='Enter the price'/>
                        </div>
                    </div>
                    <div class='row' style={{marginTop: '10px'}}>
                        <div class='col-3'>
                            <button onClick={submitExpense}> Submit </button>
                        </div>
                    </div>
                    </div>
                    <div class='col-6'>
                        <table>
                            <th>Expenses Table</th>
                            <tr>
                                <td>Expenses</td>
                                <td>Price</td>
                            </tr>
                            <tbody>
                                {expense.map((item, index)=> (
                                    <tr key={index}>
                                        <td>{item.category}</td>
                                        <td>{item.prices}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <label style={{fontWeight:'bold'}}>{total}</label>
                    </div>
                </div>
            
    </div>
    )
}

export default Budget