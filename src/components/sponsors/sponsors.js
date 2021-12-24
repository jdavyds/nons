import './sponsors.css'
import glo from './../img/glo.png'
import kfc from './../img/kfc.png'
import etisalat from './../img/etisalat.png'
import airtel from './../img/airtel.png'
import mtn from './../img/MTN.png'

function Sponsors() {
    return(
        <div className="sponsors">
            <h3>Sponsors</h3>
            <span></span>
            <div className='sponsor'>
                <img src={glo} alt="" />
                <img src={mtn} alt="" />
                <img src={kfc} alt="" />
                <img src={airtel} alt="" />
                <img src={etisalat} alt="" />
            </div>
            <div className='reg-btn'>
                <button className='active'>REGISTER AS A SPONSOR</button>
                <button>REGISTER AS A VOLUNTEER</button>
            </div>
        </div>
    )
}
export default Sponsors;