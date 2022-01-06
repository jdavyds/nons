import './coaches.css'
import coach1 from './../img/coach1.png'
import coach2 from './../img/coach2.png'
import coach3 from './../img/coach3.png'
import cord1 from './../img/cord1.png'
import cord2 from './../img/cord2.png'
import cord3 from './../img/cord3.png'
import cord4 from './../img/cord4.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
function Coaches() {
    return(
        <div className="coaches" id='coaches'>
            <h3>Coaches & Facilitators</h3>
            <span></span>
            <section className="facilitators" >
                    <img src={coach1} alt="" data-aos="zoom-in-right"/>
                    <img src={coach2} alt="" data-aos="fade"/>
                    <img src={coach3} alt="" data-aos="zoom-in-left"/>
            </section>
            <nav>
            <FontAwesomeIcon className='circle active' icon={faCircle} />
            <FontAwesomeIcon className='circle' icon={faCircle} />
            <FontAwesomeIcon className='circle' icon={faCircle} />
            </nav>
            <div className='coord'>
            <h3>State Coordinators</h3>
            <span></span>
            <section className='coordinators'>
                <img src={cord1} alt="" data-aos="fade-right"/>
                <img src={cord2} alt="" data-aos="fade-up"/>
                <img src={cord3} alt="" data-aos="fade-up"/>
                <img src={cord4} alt="" data-aos="fade-left"/>
            </section>
            <nav>
            <FontAwesomeIcon className='circle active' icon={faCircle} />
            <FontAwesomeIcon className='circle' icon={faCircle} />
            <FontAwesomeIcon className='circle' icon={faCircle} />
            <FontAwesomeIcon className='circle' icon={faCircle} />
            <FontAwesomeIcon className='circle' icon={faCircle} />
            <FontAwesomeIcon className='circle' icon={faCircle} />
            <FontAwesomeIcon className='circle' icon={faCircle} />
            </nav>
            </div>
        </div>
    )
}
export default Coaches;