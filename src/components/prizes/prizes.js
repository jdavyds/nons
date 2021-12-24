import './prizes.css'
import photo from './../img/prizesPics.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
function Prizes() {
    return(
        <div className="prizes">
            <h3>Prizes</h3>
            <span></span>
                <h4>GRAND PRIZE</h4>
            <main>
                <div className='first'>
                <FontAwesomeIcon className='crown' icon={faCrown} />
                <h6>First Prize:</h6>
                <p>N500,000/Yr Scholarship (for years left in school) plus school pet project , travels and gift </p>
                </div>
                <div className='second'>
                <FontAwesomeIcon className='crown' icon={faCrown} />
                <h6>Second Prize: </h6>
                <p>N300,000/yr Scholarship (for years left in school) plus school pet project , travels and gift</p>
                </div>
                <div className='third'>
                <FontAwesomeIcon className='crown' icon={faCrown} />
                <h6>Third Prize</h6>
                <p>N200,000/yr Scholarship (for years left in school) plus school pet project , travels and gift </p>
                </div>
            </main>
            <section>
                <nav>
                    <img src={photo} alt="" />
                </nav>
                <div className='fourth'>
                <FontAwesomeIcon className='crown' icon={faCrown} />
                <h6>Third Prize</h6>
                <p>N200,000/yr Scholarship (for years left in school) plus school pet project , travels and gift </p>
                </div>
                <div className='fifth'>
                <FontAwesomeIcon className='crown' icon={faCrown} />
                <h6>Third Prize</h6>
                <p>N200,000/yr Scholarship (for years left in school) plus school pet project , travels and gift </p>
                </div>
            </section>
        </div>
    )
}
export default Prizes;