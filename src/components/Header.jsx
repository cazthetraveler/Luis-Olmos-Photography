import { Link } from "react-router-dom";
import './Header.css';
import { useState } from "react";

export default function Header() {
    const [navVisible, setNavVisible] = useState(false);
    const toggleNav = () => {
        setNavVisible(!navVisible);
    };
    const closeNav = () => {
        setNavVisible(false);
    }

    return(
        <header>
            <div>
                <button id='nav-toggle' className='material-symbols-outlined' onClick={toggleNav}>menu</button>
                <Link to='/'><img id='logo-header' src='/logo-long-blk.png' /></Link>
            </div>
            <nav className={navVisible ? 'open' : ''}>
                <Link onClick={closeNav} className={navVisible ? 'hover-underline-animation open' : 'hover-underline-animation'} to='/'>HOME</Link>
                <Link onClick={closeNav} className={navVisible ? 'hover-underline-animation open' : 'hover-underline-animation'} to='/portfolio'>PORTFOLIO</Link>
                <img id='logo' src='/logo-long-blk.png' />
                <Link onClick={closeNav} className={navVisible ? 'hover-underline-animation open' : 'hover-underline-animation'} to='/about-me'>ABOUT ME</Link>
                <Link onClick={closeNav} className={navVisible ? 'hover-underline-animation open' : 'hover-underline-animation'} to='/contact'>CONTACT</Link>
            </nav>
        </header>
    )
}