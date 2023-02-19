import React from 'react'
import logo from './logo.png'
import menu from './menu.png'
import './Navbar.css'
import SideNav from './SideNav'

const Navbar = () => {


const showSideNav = () =>{
    document.querySelector('.sideNav').classList.add('active')
}

    const showSearch = () => {
        document.getElementById('input').classList.toggle('active')
        document.getElementById('searchIcon').classList.toggle('active')
    }

    return (

        <>
            <nav className="navbar">
                <div className="nav-content">
                    <div className="logo flex">
                        <img src={logo} alt="" srcset="" />
                    </div>
                    <div className="nav-links flex">
                        <ul className='flex'>
                            <li><a href="#">Apply Now</a></li>
                            <li><a href="#">Merch</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className='search-box flex'>
                        <input type="text" id='input' placeholder='Search ...' />
                        <span className="search" id='searchIcon' onClick={showSearch}><ion-icon name="search"></ion-icon></span>
                    <div className="menu flex">
                        <img src={menu} alt="" onClick={showSideNav}/>
                    </div>
                    </div>
                </div>
            </nav>
<SideNav />
        </>
    )
}

export default Navbar