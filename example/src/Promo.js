import React, {useState} from 'react'



const Promo = (props) => {
const [form, setForm] = useState({
    firstName: String,
    lastName: String,
    email: String
}
)
const [submission, setSubmission] = useState([])

function handleReset() {
    setForm({
        firstName: "",
        lastName: "",
        email: ""
    })
}

function resetList() {
    setSubmission([])
}

function addItem(){
    setSubmission([...submission, form]);
    setForm({
        firstName: "",
        lastName: "",
        email: ""
    })
}

  return (
    <>    <div>
     <h1> {props.heading} </h1>
     <h2> {props.message} </h2>
    <label>First Name: <input value = {form.firstName} onChange={e=> {
        setForm({
            ...form,
            firstName: e.target.value
        })
    }}/></label>
    <label> Last Name: <input value ={form.lastName} onChange = {e=> {setForm({
        ...form,
        lastName: e.target.value
    })}}/></label>
    <label>Email: <input value = {form.email} onChange = {e=>{
        setForm({
            ...form,
            email: e.target.value
        })
    }}/></label>
    <button onClick={addItem}>Add</button>
    <button onClick={handleReset}>Reset</button>
    </div>
    <div>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tr>
            <th style= {{ padding: '8px', border: '1px solid black', backgroundColor: 'lightgreen'}}>First Name</th>
            <th style= {{ padding: '8px', border: '1px solid black', backgroundColor: 'lightgreen'}}>Last Name</th>
            <th style= {{ padding: '8px', border: '1px solid black', backgroundColor: 'lightgreen' }}>Email</th>
        </tr>
        {submission.map((item, index)=>(<tr key={index}>
            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center'}}>{item.firstName} </td>
            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center'}}>{item.lastName} </td>
            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center'}}>{item.email} </td>
            </tr>
        ))}
    </table>
    <button onClick={resetList}>Reset List</button>
    </div>
    </>

  )
}

export default Promo;