import React, { useState } from 'react'
export default function TextForm(props) {
  const [text, setText] = useState("hello everyone");
  return (
    <div>
      <h1>{props.heading}-{text}</h1>
      <div className="mb-3">
        <textarea name="" id="" rows="8" ></textarea><br />
        <button className="btn btn-primary">click me</button>
      </div>
    </div>

  )
}
