import React, { useState } from 'react'


function App() {
  const [text, setText] = useState("")

  const handleOnChange = (e) => {
    setText(e.target.value);
  }
  const handleOnClickUppercase = () => {
    let newText = text.toUpperCase()
    setText(newText);
  }

  const handleOnClickLowercase = () => {
    let newText = text.toLowerCase()
    setText(newText);
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-6 m-auto my-4 border border-black rounded py-4 bg-black">
          <form action="" >
            <label htmlFor="" className='form-label fw-bold fs-4 text-white'>Please Type we'll change text in uppercase</label>
            <textarea name="" id="" cols="30" rows="5" className='form-control my-3' value={text} onChange={handleOnChange}></textarea>
            <button type='button' className='btn btn-sm btn btn-outline-light' onClick={handleOnClickUppercase}>Convert To Uppercase</button>
            <button type='button' className='btn btn-sm btn btn-outline-light mx-3' onClick={handleOnClickLowercase}>Convert To Lowercase</button>
          </form>
          <div className="container text-white mt-4">
            <h3 className=' mt-4'>Preview</h3>
            <p className=''>{text}</p>
            <p>This preview with {text.split(" ").length} Words and {text.length} Chracter</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
