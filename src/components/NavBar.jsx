import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss'
import NavbarLogo from '../assets/Images/NavbarLogo.png';
import HamburgerIcon from '../assets/Icons/HamburgerIcon.svg';

function NavBar() {

    const [isActive, setIsActive] = useState(false);

    function toggleHamburger() {
        setIsActive(!isActive)
    }

    return(
        <>
        <div className='nav-div'>
            <a href="#">
                <img className='navbar-logo' src={NavbarLogo} alt="navigation bar logo"></img>
            </a>
            <ul className={`nav-ul ${isActive ? 'active' : ''}`}>
                <li className='nav-li'>
                    <Link className='nav-li' to="/">HOME</Link>
                </li>
                <li className='nav-li'>
                    <Link className='nav-li' to="/about">ABOUT US</Link>
                </li>
                <li className='nav-li'>
                    <Link className='nav-li' to="/services">SERVICES</Link>
                </li>
                <li className='nav-li'>
                    <Link className='nav-li' to="/fleet">FLEET</Link>
                </li>
                <li className='nav-li'>
                    <Link className='nav-li' to="/contact">CONTACT US</Link>
                </li>
            </ul>
            <img className={`hamburger-icon ${isActive} ? 'active' : ''}`} src={HamburgerIcon} onClick={toggleHamburger} />
        </div>
        </>
    );
}

export default NavBar;