import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("hello everyone");
    const HandleUpClick = () => {
        setText(text.toUpperCase());
    }
    const HandleOnChange = (e) => {
        setText(e.target.value)
    }
    const RemoveSpaces = () => {
        setText(text.replace(/\s+/g, " "));
    }

    return (
        <div>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea name="" id="" rows="8" value={text} onChange={HandleOnChange}></textarea><br />
                    <button className="btn btn-primary" onClick={HandleUpClick}>Handle upclick</button>
                    <div className="container my-3">
                        <p>{text.trim().split(/\s+/g).length} words</p>
                        <p> {text.replace(/\s+/g, "").length} character in textArea</p>
                        <p>{0.008 * text.trim().split(/\s+/g).length} Minutes</p>
                    </div>
                    <button className='btn btn-primary' onClick={RemoveSpaces}>Remove Spaces</button>
                </div>
            </div>
        </div >

    )
}
