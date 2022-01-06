import './header.css'
import logo from './../img/NONS3 1.png'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Header() {
    useEffect(() => {
       window.addEventListener('scroll', fixHeader);
       return () => {
           window.removeEventListener('scroll', fixHeader);
       };
   });
    function fixHeader() {
       const header = document.querySelector('.header');
       const scrollTop = window.scrollY;
       scrollTop >= 60 ? header.classList.add('fixed') : header.classList.remove('fixed');
    }
    const [hambuger, setHambuger] = useState(true)
    function handleHambuger() {
        setHambuger(!hambuger)
    }
    return(
        <header id='header' className='header'>
            <div>
            <img src={logo} alt="" />
            <nav className="header-links">
                <a href="#about">About</a>
                <a href="#rules">Rules</a>
                <a href="#prizes">Prizes</a>
                <a href="#toget">What You Will Get</a>
                <a href="#coaches">Facilitators</a>
                <a href="#contestants">Contestants</a>
                <a href="#faq">Faq</a>
                <a href="#sponsors">Sponsors</a>
                <button>
                    <a href="#register">Register</a>
                </button>
            </nav>
            <nav className="hambuger">
                    <FontAwesomeIcon icon={hambuger ? faBars : faTimes } className='hambuger-icon' onClick={handleHambuger}/>
            </nav>
            </div>
            <nav className={hambuger ? 'hambuger-nav' : 'hambuger-nav active'}>
                <a href="#about">About</a>
                <a href="#rules">Rules</a>
                <a href="#prizes">Prizes</a>
                <a href="#toget">What You Will Get</a>
                <a href="#coaches">Facilitators</a>
                <a href="#contestants">Contestants</a>
                <a href="#faq">Faq</a>
                <a href="#sponsors">Sponsors</a>
            </nav>
        </header>
    )
}
export default Header;