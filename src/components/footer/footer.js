import './footer.css'
import logo from './../img/NONS3 1.png'
import { Facebook, Twitter, Instagram, YouTube, Phone, WhatsApp } from '@material-ui/icons'
function Footer() {
    return(
        <footer>
            <section>
            <div>
                <img src={logo} alt="" />
                <p>The Mr. & Miss Notable Nigeria Student Scholarship Pageant, 2022 is an artistic celebration of beauty with brain that seeks to promote and intertwine Physical Beauty, Internal Beauty</p>
            </div>
            <div>
                <a href="#about">About</a>
                <a href="#rules">Rules</a>
                <a href="#prizes">Prizes</a>
                <a href="#toget">What You will Get</a>
            </div>
            <div>
                <a href="#coaches">Facilitators</a>
                <a href="#contestants">Contestants</a>
                <a href="#faq">FAQ</a>
                <a href="#sponsors">Sponsors</a>
            </div>
            <div>
                Follow Us
                <nav>
                    <Facebook className='icon'/><Twitter className='icon'/><Instagram className='icon'/> <YouTube className='icon'/>
                </nav>
                <nav><Phone className='icon'/> 0800-555-333-111 (toll free)</nav>
                <nav><WhatsApp className='icon'/>+234 803 869 1538</nav>
            </div>
            </section>
            <span>
                <nav>
            Copyright (c) 2021 Mcharms Events & Entertainment 
                </nav>
                <nav>
            In Partnership with Evenza Marketing & Powered by ULLWEB
                </nav>
            </span>
        </footer>
    )
}
export default Footer;