import React, {useState} from 'react'


export default function TextForm(props) {
const handleUpClick= ()=>{
  // console.log("Uppercase case was clicked" + text);
  let newtext = text.toUpperCase();
  SetText(newtext)
}

const handlelowerClick= ()=>{
  // console.log("Uppercase case was clicked" + text);
  let newtext = text.toLowerCase();
  SetText(newtext)
}


const handleclearClick= ()=>{
  // console.log("Uppercase case was clicked" + text);
  let newtext = '';
  SetText(newtext)
}

const handleonchange= (event)=>{
  // console.log("on handle change ");
  SetText(event.target.value);
}

  const [text, SetText] = useState("");;
 
  return (
  <>
  <div className='container'>
      <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value ={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 "  onClick={handleUpClick}>Convert to upper case </button> 
<button className="btn btn-primary mx-1" onClick={handlelowerClick}>Convert to lower case </button>
<button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text </button>


    </div>
    <div className='conatiner my-3'>
      <h2>Your Text summary</h2>
    <p>{text.split(" ").length} words, {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read </p>
<h2>Preview</h2>
<p>{text}</p>
    </div>
    </>
  )
}
