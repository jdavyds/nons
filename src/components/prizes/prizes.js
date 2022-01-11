import './prizes.css'
import photo from './../img/prizesPics.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
function Prizes() {
    return(
        <div className="prizes" id='prizes'>
            <h3>Prizes</h3>
            <span></span>
                <h4>GRAND PRIZE</h4>
            <main>
                <div className='first' data-aos="fade-right">
                <FontAwesomeIcon className='crown' icon={faCrown} />
                <h6>First Prize:</h6>
                <p>N500,000/Yr Scholarship (for years left in school) plus school pet project , travels and gift </p>
                </div>
                <div className='second' data-aos="zoom-in-down">
                <FontAwesomeIcon className='crown' icon={faCrown} />
                <h6>Second Prize: </h6>
                <p>N300,000/yr Scholarship (for years left in school) plus school pet project , travels and gift</p>
                </div>
                <div className='third' data-aos="fade-left">
                <FontAwesomeIcon className='crown' icon={faCrown} />
                <h6>Third Prize</h6>
                <p>N200,000/yr Scholarship (for years left in school) plus school pet project , travels and gift </p>
                </div>
            </main>
            <section>
                <nav>
                    <img src={photo} alt="" />
                </nav>
                <div className='fourth' data-aos="zoom-in-down">
                <FontAwesomeIcon className='crown' icon={faCrown} />
                <h6>Fourth Prize</h6>
                <p>N100,000/yr Scholarship (for One Year) plus school pet project , travels and gift </p>
                </div>
                <div className='fifth' data-aos="zoom-in-up">
                <FontAwesomeIcon className='crown' icon={faCrown} />
                <h6>Fifth Prize</h6>
                <p>N100,000/yr Scholarship (for One Year) plus school pet project , travels and gift </p>
                </div>
            </section>
        </div>
    )
}
export default Prizes;