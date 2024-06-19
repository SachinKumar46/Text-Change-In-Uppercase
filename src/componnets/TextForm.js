import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

  // for write text anything on input box
  const handleOnChange = (e) => {
    setText(e.target.value);
  }

  // for uppercase text
  const handleOnClickUppercase = () => {
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert("Text Converted in Uppercase","success")
  }

  // for Lowercase text
  const handleOnClickLowercase = () => {
    let newText = text.toLowerCase()
    setText(newText);
    props.showAlert("Text Converted in LowerCase","success")
  }

  // For clear text
  const handleOnClickClearTxt = () => {
    let newText =("")
    setText(newText);
    props.showAlert("Text has been Cleared","success")
  }

  // for copy text
  const handleOnCopyTxt=()=>{
    var text=document.getElementById("rootId");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text has been copied","success")
  }

  // for remove extra space
  const handleOnRemoveExtraSpace=()=>{
    let newtText=text.split(/[ ]+/);
    setText(newtText.join(" "))
    props.showAlert("Removed Extra Space","success")

  }
  return (
    <>
         <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <div className="row">
        <div className="col-8 m-auto my-4 border  rounded py-4 ">
          <form action="" >
            <label htmlFor="" className='form-label fw-bold fs-4' >Please Type we'll change text in uppercase</label>
            <textarea name="" id="rootId" cols="30" rows="5" className='form-control my-3' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#042743":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
            <button type='button' className='btn btn-sm btn btn-outline-primary mx-1' onClick={handleOnClickUppercase}>Convert To Uppercase</button>
            <button type='button' className='btn btn-sm btn btn-outline-primary mx-1' onClick={handleOnClickLowercase}>Convert To Lowercase</button>
            <button type='button' className='btn btn-sm btn btn-outline-primary mx-1' onClick={handleOnClickClearTxt}>Clear Text</button>
            <button type='button' className='btn btn-sm btn btn-outline-primary mx-1' onClick={handleOnCopyTxt}>Copy Text</button>
            <button type='button' className='btn btn-sm btn btn-outline-primary mx-1' onClick={handleOnRemoveExtraSpace}>RMV Extra Space</button>
          </form>
          <div className="container  mt-4">
            <h3 className=' mt-4'>Preview</h3>
            <p className=''>{text}</p>
            <p>This preview with {text.split("").length} Words and {text.length} Chracter</p>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}
