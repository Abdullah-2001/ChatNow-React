import React from 'react';
import './search.css';

const search = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent:"center" }}>
                <div>
                    <span className="search-icon fas fa-search"></span>
                </div>
                <div>
                    <input type="text" placeholder="Search messeges or users" className="search-bar" />
                </div>
            </div>
        </div>
    )
}

export default search;