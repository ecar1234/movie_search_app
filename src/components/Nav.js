import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <div className="home">
                <Link to="/" >
                    HOME    
                </Link> 
            </div>
        </div>
    );
}

export default Nav;