import React from 'react';
import './Footer.css'

function Footer () {
    return <div className='footer'>
        <div>
            <strong>2020 All rights reserved</strong>
        </div>
        <nav>
            <ul>
                <li><a href={() => false}>Facebook</a></li>
                <li><a href={() => false}>Twitter</a></li>
                <li><a href={() => false}>LinkedIn</a></li>
            </ul>
        </nav>
    </div>
}

export default Footer;