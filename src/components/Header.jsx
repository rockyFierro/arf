import React from "react";
import {Link} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/nasa'>
                <button>Nasa</button>
            </Link>
            <Link to='/'>
                <button>
                    Home
                </button>
            </Link>
        </div>
    )
}
export default Header;

