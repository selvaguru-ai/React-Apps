import React, {useRef, useState} from 'react'

const ContactUs = () => {
    const [input, setInput] = useState('');
    const inputRef= useRef(null);
    const labelRef= useRef(null);

    const focusInput = ()=>{
      inputRef.current.focus();
    };

    const focusLabel = ()=>{
        labelRef.current.style.fontWeight = 'bold';
    }

    const updateValue = (e)=>{
      setInput(e.target.value)
    };

  return (
    <div>
      <p>From ContactUs page:</p>
      <div>
        <input type="text" ref={inputRef} onChange={updateValue}/>
        <button onClick={focusInput}>Focus</button>
        <label ref={labelRef}>{input}</label>
        <button onClick={focusLabel}>Bold the label</button>
      </div>
    </div>
  )
}

export default ContactUs
