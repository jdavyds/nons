import './contestant.css'
import holder from './../img/contestant-holder.png'
import span1 from './../img/span1.png'
import span2 from './../img/span2.png'

function Contestant() {
    return(
        <div className="contestants" id='contestants'>
            <h3>Contestants</h3>
            <span></span>
            <p>Be one of the 30 finalist who will stand a chance to win the Grand Prize and own the bragging right as the Mr/Miss Notable Nigeria</p>
            <div className="contestant">
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
                <img src={holder} alt=""  data-aos="zoom-in-down" />
            </div>
            <div className='cont-span'>
                <span>
                    <img src={span1} alt="" /> joy oko course of study: English school: University benin state: Edo state</span> |
                    <span><img src={span2} alt="" /> mark ola course of study: law school: University of lagos state: lagos state</span>
            </div>
        </div>
    )
}
export default Contestant;