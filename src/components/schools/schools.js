import './schools.css'
import uniben from './../img/Uniben-Logo.png'
import oau from './../img/Obafemi-Awolowo-University-OAU.png'
import delsu from './../img/delsu.png'
import uniport from './../img/uniport.png'
import uniabu from './../img/uniabu.png'
import lasu from './../img/lasu.png'
import futo from './../img/futo.png'
import unilag from './../img/unilag.png'
import benson from './../img/benson.png'
import last from './../img/last.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

function Schools() {
    return(
        <div className="schools">
             <h3>Participating Schools</h3>
            <span></span>
            <nav className="school">
                <img src={uniben} alt="" />
                <img src={oau} alt="" />
                <img src={delsu} alt="" />
                <img src={uniport} alt="" />
                <img src={uniabu} alt="" />
                <img src={lasu} alt="" />
                <img src={futo} alt="" />
                <img src={unilag} alt="" />
                <img src={benson} alt="" />
                <img src={last} alt="" />
            </nav>
            <nav className="btn">
                <button className='active'><FontAwesomeIcon className='navi' icon={faChevronLeft}/></button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>...</button>
                <button>15</button>
                <button><FontAwesomeIcon className='navi' icon={faChevronRight}/></button>
            </nav>
        </div>
    )
}
export default Schools;