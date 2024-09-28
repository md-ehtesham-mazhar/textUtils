import './App.css';
import Navbar from './components/Navbar';
import TextFrm from './components/TextFrm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  

function App() {
    const [mode, setMode] = useState('light');//whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);

    const showAlert = (message , type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
            setAlert(null);
        },2000)
    }

    const removeBodyCls = () =>{
        document.body.classList.remove('bg-light')
        document.body.classList.remove('bg-dark')
        document.body.classList.remove('bg-warning')
        document.body.classList.remove('bg-success')
        document.body.classList.remove('bg-danger')
        document.body.classList.remove('bg-primary')
    }

    const toggleMode = (cls) => {
        removeBodyCls();
        console.log(cls)
        document.body.classList.add('bg-'+cls)
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark Mode has been enabled","success");
           //document.title='TextUtils - Light Mode';
        }else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has been enabled","success");
            //document.title='TextUtils - Light Mode';
        }
    }
    return(
        <>
        <Router>
        <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
       <div className="container my-3">
       <Routes>
          <Route exact path="/about" element={<About aboutText ="About" mode={mode}/>}/>
          
          <Route exact path="/"element={<TextFrm showAlert={showAlert} heading=" Try TextUtils - Word Counter, Chararcter Counter,Uppercase and Lowercase Converter" mode={mode}/>}/>
          
        </Routes>
        </div>
        </Router>
        </>
    );
}

export default App;