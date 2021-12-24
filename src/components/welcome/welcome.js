import './welcome.css'
import contestant from './../img/contestant.png'
import evenza from './../img/EVENZA.png'
import mcharm from './../img/MCHARM.png'
import ullweb from './../img/ULLWEB WHITE 1.png'

function Welcome() {
    return(
        <div className="welcome">
            <section className='intro'>
                <h1>
                MR. & MISS NOTABLE NIGERIA STUDENT SCHOLARSHIP PAGEANT 
                </h1>
                <span className='border'></span>
                <p>The Mr. & Miss Notable Nigeria Student Scholarship Pageant, 2022 is an artistic celebration of beauty with brain that seeks to promote and intertwine Physical Beauty, Internal Beauty and Cultural Pride.</p>
                <button className='register'>
                    <a href="#">Register</a>
                </button>
            </section>
            <section className='contes'>
                <nav>
                    <img src={contestant} alt="" />
                </nav>
                <div className='sponsor'>
                    <div className='headline'>
                        HEADLINE SPONSOR
                        <img src={ullweb} alt="" />
                    </div>
                    <div className='powered'>
                        POWERED BY
                        <div>
                            <img src={mcharm} alt="" />
                            <img src={evenza} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Welcome;