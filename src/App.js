import React, { useState } from 'react'


function App() {
  const[text,setText]=useState("")

  const handleOnChange=(e)=>{
    setText(e.target.value);
  }
  const handleOnClick=()=>{
    let newText=text.toUpperCase()
    setText(newText);
  }
  return (
   <div className="container">
    <div className="row">
      <div className="col-6 m-auto my-5 border border-black rounded py-4">
      <form action="" >
      <label htmlFor="" className='form-label fw-bold fs-4'>Please Type we'll change text in uppercase</label>
    <input type="search" className='form-control my-4' placeholder='Type here'  autoComplete='off' value={text} onChange={handleOnChange}/>
    <button type='button' className='btn btn-sm btn-primary' onClick={handleOnClick}>Submit</button>
   </form>
      </div>
    </div>
   </div>
  );
}

export default App;
