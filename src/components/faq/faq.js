import './faq.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCrown } from '@fortawesome/free-solid-svg-icons'
function Faq() {
    return(
        <div className="faq" id='faq'>
            <h3>Frequently Asked Questions</h3>
            <main>
                <div className="questions">
                how can I become a contestant <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className="questions">
                how can I  meet my school coordinator <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className="questions">
                what are the requirements <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className="questions">
                what is the reason  for this event <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className="questions">
                can a final year student register <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className="questions">
                what is the highest age to register  <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className="questions">
                can a first year student register <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className="questions">
                when is the date for auditioning <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className="questions">
                what is the least age to register <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className="questions">
                when is the gala night <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
            </main>
            <button>SEE MORE QUESTIONS</button>
        </div>
    )
}
export default Faq;