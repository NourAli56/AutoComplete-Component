import React from 'react'
import './NavBar.css'
import logo from '../../assets/images/test.jpg'

function NavBar() {
    return (
        <>
            <div className='fixed'>
                <nav className="navbar"  >
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <i className='fa fa-globe globe' ></i>
                </nav>
            </div>
        </>
    )
}

export default NavBar