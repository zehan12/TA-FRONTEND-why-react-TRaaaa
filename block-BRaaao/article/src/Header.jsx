import React from 'react';
import './Header.css'

function Header () {
    return <div className='header'>
        <div>
            <strong>Article</strong>
        </div>
        <nav>
            <ul>
                <li><a href={() => false}>Home</a></li>
                <li><a href={() => false}>About</a></li>
                <li><a href={() => false}>Contact</a></li>
            </ul>
        </nav>
    </div>
}

export default Header;