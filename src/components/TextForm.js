import React, { useState } from 'react'
export default function TextForm(props) {
  const [text, setText] = useState("hello everyone");
  const HandleUpClick = () => {
    setText(text.toUpperCase());
  }
  const HandleOnChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea name="" id="" rows="8" value={text} onChange={HandleOnChange}></textarea><br />
          <button className="btn btn-primary" onClick={HandleUpClick}>Handle upclick</button>
        </div>
      </div>
    </div >

  )
}
