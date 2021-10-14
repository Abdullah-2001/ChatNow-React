import React from 'react';
import './conversations.css';

function conversations(props) {

    const { name, img, messege, time } = props

    return (

        <div>

            <div className="conversation-container">

                <div className="name-messege">

                    <div>
                        <img className="users" width="50" src={img} alt="" />
                    </div>

                    <div style={{marginTop:"-10px"}}>
                        <p className="name">{name}</p>
                        <span className="messege-status"></span>
                        <p className="messege">{messege}</p>
                    </div>

                </div>

                <div className="time-container">
                    <p style={{marginTop:"-12px"}}>{time}</p>
                </div>

            </div>

        </div>

    )

}

export default conversations
