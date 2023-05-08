import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <ul className="nav-ul">
                <li><Link className='nav-link' to="home">Dashboard</Link></li>
                <li><Link className='nav-link' to="add">Add Supplier</Link></li>
                <li><Link className='nav-link' to="home">Exit</Link></li>
            </ul>
        </nav>
    )
}

export default Header