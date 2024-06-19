import Navbar from './componnets/Navbar'
import Alert from './componnets/Alert';
import TextForm from './componnets/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode]=useState("light")
  const [alert, setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    }
    )
    setTimeout(() => {
      setAlert(alert)
    }, 2000);
  }

  const  toggleMode=()=>{
    if (mode==="light") {
        setMode("dark");
        document.body.style.backgroundColor="#042743";
        showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "success")
    }
  }       
  return (
  <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm mode={mode} showAlert={showAlert}/> 
  </>
  );
}
export default App;
