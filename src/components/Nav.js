import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {
    return (
        <div className="nav_wrap">
            <div className="home">
                <Link to="/movie_search_app" >
                    HOME    
                </Link> 
            </div>
            <div className="search">
                <Link to="/#">
                    SEARCH
                </Link>
            </div>
        </div>
    );
}

export default Nav;