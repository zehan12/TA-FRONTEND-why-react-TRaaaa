import React from 'react';
import '../styles/Header.css'

const NavItems = ({link = '#',value}) => <li><a href={link}>{value}</a></li>

function Header () {
    return <div className='header'>
        <div>
            <strong>Article</strong>
        </div>
        <nav>
            <ul>
                <NavItems value="Home"/>
                <NavItems value="About"/>
                <NavItems value="Contact"/>
            </ul>
        </nav>
    </div>
}

export default Header;