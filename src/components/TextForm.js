import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = Text.toUpperCase();
    setText(newText)
    props.showalert("Converted to UpperCase!", "success")
  }

  const handleLowClick = ()=>{
   
    let newText = Text.toLowerCase();
    setText(newText)
    props.showalert("Converted to LowerCase", "success")

  }
  const handleClearClick = ()=>{
   
    let newText = "";
    setText(newText)
    props.showalert("Text is cleared", "success")

  }

  const handleCopy = ()=>{
    let text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showalert("Text copied", "success")
  }

  const handleExtraSpaces = ()=> {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showalert("Removed extra spaces", "success")
  }
const handleOnChange = (event)=>{
  
  setText(event.target.value)
}
  const [Text, setText] = useState('') // state ko set kiya gya hai jisme do parameter daal skte hai ek hai "Text" dusra "set text" 

  // text = "new text"; wrong way to change the this.state.
  // setText("new text") correct way to change the this.state.
 
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'? 'white':'#042743' }}>
        <h1>{props.heading}</h1>
    <div className="form-group">
    <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'? 'grey':'white', color : props.mode==='dark'? 'white':'042743' }} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove extra Space</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'? 'white':'#042743' }}>
      <h2>Your text summary</h2>
      <p> {Text.split(" ").length} words and {Text.length} characters</p>
      <p>{0.008 * Text.split(" ").length}</p>
      <h2>preview</h2>
      <p>{Text.length>0?Text:"Enter something in the textbox above to preview here "}</p>
    </div>
    </>
  )
}
