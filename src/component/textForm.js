import React, { useState } from 'react'

export default function textForm(props) {
    const [text, setText] = useState('enter the State');
    return (
        <div>
            <h1>{props.heading}-{text}</h1>
            <div className="mb-8">
                <textarea name="" id="" rows="8"></textarea>
            </div>
        </div>
    )
}
