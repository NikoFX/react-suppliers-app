import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <ul className="nav-ul">
                <li><Link className='nav-link' to="home">Home</Link></li>
                <li><Link className='nav-link' to="add">Add Supplier</Link></li>
                <li><Link className='nav-link' to="home">News</Link></li>
                <li><Link className='nav-link' to="home">Contact</Link></li>
                <li><Link className='nav-link' to="home">About</Link></li>
            </ul>
        </nav>
    )
}

export default Header