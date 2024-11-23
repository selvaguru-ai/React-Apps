import React, {useState} from 'react';

const ChangeColor = ({getColorFromChild}) => {

  const [inputColor, setInputColor] = useState('');
  //handle input change
  const handleChange = (e)=>{
    setInputColor(e.target.value);
  }
  //send color to parent on button click
  const sendColor = ()=>{
    getColorFromChild(inputColor);
  }

  return (
    <div>
      <input type= 'text' value= {inputColor} onChange={(e)=> setInputColor(e.target.value)} placeholder='Enter a color'/>
      <button onClick={sendColor}>Change Color</button>
    </div>
  )
}

export default ChangeColor;
