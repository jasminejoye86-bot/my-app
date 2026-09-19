import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("hello everyone");
    const HandleUpClick = () => {
        setText(text.toUpperCase());
    }
    const HandleLoClick = () => {
        setText(text.toLowerCase());
    }
    const HandleOnChange = (e) => {
        setText(e.target.value)
    }
    const RemoveSpaces = () => {
        setText(text.replace(/\s+/g, " "));
    }
    const Dlttext = () => {
        setText("");
    }

    return (
        <div>
            <div className="container" style={{ color: props.Mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea name="" id="" rows="8" value={text} style={{ backgroundColor: props.Mode === "dark" ? "white" : "grey", color: props.Mode === "dark" ? "black" : "white", height: " 165px", width: "82vw" }} onChange={HandleOnChange}></textarea><br />
                    <button className="btn btn-primary" onClick={HandleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-3" onClick={HandleLoClick}>Convert to lowercase</button>
                    <button className='btn btn-primary' onClick={RemoveSpaces}>Remove Spaces</button>
                    <button className="btn btn-primary mx-3" onClick={Dlttext}>Delete text</button>
                    <div className="container my-3">
                        <p>{text.trim().split(/\s+/g).filter(word => word.length > 0).length} words</p>
                        <p> {text.replace(/\s+/g, "").length} character in textArea</p>
                        <p>{0.008 * text.replace(/\s+/g, "").length} Minutes</p>
                    </div>
                </div>
            </div>
        </div >

    )
}
