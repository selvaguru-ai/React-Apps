import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import API_read from './API_read';
import Credit_Cards from './Credit_Cards';
import ChangeColor from './ChangeColor';

const root = ReactDOM.createRoot(document.getElementById('root'));
const message = "This message from index";

root.render(
  
  <React.StrictMode>
    
    <div class='row'>
      <div class='col-6'>
        <App />
      </div>
      <div class='col-6'>
        <API_read greeting={message}/>
      </div>
    </div>
    <div class='row'>
      <Credit_Cards />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
