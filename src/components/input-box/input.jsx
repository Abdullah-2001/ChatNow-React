import React, { useState } from 'react';
import './input.css';

const Input = () => {

    // const [input, setInput] = useState();
    // const [todo, setTodo] = useState("");

    return (
        <div>
            {/* <h1>{input}</h1> */}
            <div className="input-container">
                <div>
                    <input type="text" placeholder="Enter Messege" className="input-bar" />
                </div>
                <div className="icons">
                    <i className="fas fa-smile-beam"></i>
                    <i className="fas fa-paperclip"></i>
                    <i className="fas fa-images"></i>
                    <i id="send-arrow" className="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Input;