import Navbar from './componnets/Navbar'
import TextForm from './componnets/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode]=useState("light")

  const  toggleMode=()=>{
    if (mode==="light") {
        setMode("dark");
        document.body.style.backgroundColor="#1f1b40";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }       
  return (
  <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <TextForm   mode={mode}/> 
  </>
  );
}
export default App;
