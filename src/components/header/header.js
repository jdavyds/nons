import './header.css'
import logo from './../img/NONS3 1.png'
function Header() {
    return(
        <header>
            <img src={logo} alt="" />
            <nav className="header-links">
                <a href="#">About</a>
                <a href="#">Rules</a>
                <a href="#">Prices</a>
                <a href="#">What You Will Get</a>
                <a href="#">Facilitators</a>
                <a href="#">Contestants</a>
                <a href="#">Faq</a>
                <a href="#">Sponsors</a>
                <button>
                    <a href="#">Register</a>
                </button>
            </nav>
        </header>
    )
}
export default Header;