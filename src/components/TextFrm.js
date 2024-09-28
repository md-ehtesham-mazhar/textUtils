import React, {useState} from 'react'

export default function TextFrm(props){

    const handleUpClick = ()=>{
        //console.log("" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick = ()=>{
        //console.log("" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleOnChange = (event)=>{
        //console.log("UpperCase Was Clicked ");
        setText(event.target.value);
    }
    
    const handleClearClick = ()=>{
        //console.log("" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const [text,setText]= useState('');
    //setText("hsifhk");  //text updation

    let myStyle = {
        color: props.mode ==='dark'?'white':'rgb(45 74 94)',
        backgroundColor: props.mode ==='dark'?'rgb(45 74 94)':'white'
      }
    return(
        <>
        <div className='mb-4'  style={myStyle}>
            <h1 className='my-2'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#53647e':'white' , color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="4"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}