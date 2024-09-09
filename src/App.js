
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";

function App() {
  
    const [alert, setAlert]= useState(null);
    const showalert =(message, type)=>{
      setAlert({
        msg : message,
        type:type
      })

      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }

  const [mode, setmode] = useState('light');
  const togglemode = ()=>{
    if (mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showalert("Dark mode has been enabled", "success")
      document.title = 'TextUtils-Dark Mode'
    }

    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light mode has been enabled", "success")
      document.title = 'TextUtils-Light Mode'

    }
  }
  return (
    <> 

 <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>

 <Alert alert={alert}/>
 <div className="container my-3">
 <TextForm showalert={showalert} heading="Enter The text to analyze below" mode={mode}/>
 </div>
 {/* <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter The text to analyze below" mode={mode}/>} />
        </Routes>
 

 </Router> */}
    </>
  );
}

export default App;
