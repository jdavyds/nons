import './header.css'
import logo from './../img/NONS3 1.png'
function Header() {
    return(
        <header id='header'>
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
        </header>
    )
}
export default Header;