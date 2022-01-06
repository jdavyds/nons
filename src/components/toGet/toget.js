import './toget.css'
import domain from './../img/domain-registration 1.png'
import hosting from './../img/web-hosting 1.png'
import internet from './../img/internet (1) 1.png'
import webDesign from './../img/web-design (1) 1.png'
import photography from './../img/photography (1) 1.png'
import mobileApp from './../img/mobile-app 1.png'
import socialMedia from './../img/social-media (1) 1.png'
import backdrop from './../img/backdrop 1.png'
import woman from './../img/woman 1.png'
import advice from './../img/advice 1.png'
import treatment from './../img/beauty-treatment 1.png'
import solarium from './../img/solarium (1) 1.png'

function ToGet() {
    return(
        <div className="toget" id='toget'>
             <h3>What You Will Get</h3>
            <span></span>
            <h4>These are the things you get</h4>
            <main>
                <div className="items" data-aos="fade-right">
                    <img src={domain} alt="" />
                    Free Domain Name
                </div>
                <div className="items" data-aos="slide-down">
                    <img src={hosting} alt="" />
                    Free Web Hosting 
                </div>
                <div className="items" data-aos="slide-down">
                    <img src={internet} alt="" />
                    Web Design Training  & Certificate 
                </div>
                <div className="items" data-aos="fade-left">
                    <img src={webDesign} alt="" />
                    Model Portfolio Website
                </div>
                <div className="items">
                    <img src={photography} alt="" data-aos="fade-right"/>
                    Phone Photography Training and Certificate
                </div>
                <div className="items" data-aos="zoom-in-down">
                    <img src={mobileApp} alt="" />
                    Phone Vidoegraphy Training & Certificate
                </div>
                <div className="items" data-aos="zoom-in-down">
                    <img src={socialMedia} alt="" />
                    Social Media Training & Certificate
                </div>
                <div className="items" data-aos="fade-left">
                    <img src={backdrop} alt="" />
                    Free Photo Session
                </div>
                <div className="items" data-aos="slide-right">
                    <img src={woman} alt="" />
                    Cat Walk & Modelling Training 
                </div>
                <div className="items" data-aos="slide-up">
                    <img src={advice} alt="" />
                    Advertisement Training 
                </div>
                <div className="items" data-aos="slide-up">
                    <img src={treatment} alt="" />
                    Make Up Training & Certification
                </div>
                <div className="items" data-aos="slide-left">
                    <img src={solarium} alt="" />
                    Free Gym & Spa Session
                </div>
            </main>
        </div>
    )
}
export default ToGet;