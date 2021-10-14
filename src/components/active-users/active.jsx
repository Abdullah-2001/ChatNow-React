import React from 'react';
import './active.css';

const active = (props) => {

    const { name, img } = props;

    return (
        <div>
            <div className="active-users">
                <img width="50" src={img} alt="" className="users"/>
                <span className="active-status"></span>
                <p className="user-name">{name}</p>
            </div>
        </div>
    )
}

export default active;