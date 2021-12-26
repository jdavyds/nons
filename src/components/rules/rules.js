import './rules.css'
import photo from './../img/rulesGirl.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
function Rules() {
    return(
        <div className='rules' id='rules'>
            <h3>Rules for Contesting in the “Mr. & Miss Notable 
            Nigeria Student Scholarship Pageant”</h3>
            <span></span>
            <div>
                <section className='rule'>
                    
                       <div><FontAwesomeIcon className='crown' icon={faCrown} />
                        <p>
                        Contestants must be currently enrolled as a student at any tertiary institution in Nigeria with an overall grade point average of at least 2.5 CGPA.
                        </p> </div> 
                       <div><FontAwesomeIcon className='crown' icon={faCrown} />
                        <p>
                        Contestants must maintain satisfactory academic progress as defined in his/her current undergraduate session as appropriate.</p> </div> 
                       <div><FontAwesomeIcon className='crown' icon={faCrown} />
                        <p>
                        Contestants must be in good academic and disciplinary standing with the university, defined as not being on academic or disciplinary probation.</p> </div> 
                       <div><FontAwesomeIcon className='crown' icon={faCrown} />
                        <p>
                        Contestants must be able to meet the time commitment and job responsibilities that will be set by the organizing committee.</p> </div> 
                       <div><FontAwesomeIcon className='crown' icon={faCrown} />
                        <p>
                        Contestants must never have been married.</p> </div> 
                       <div><FontAwesomeIcon className='crown' icon={faCrown} />
                        <p>
                        Contestants must be no younger than 15 years of age at the time of the pageant, and no older than 30 years of age.</p> </div> 
                       <div><FontAwesomeIcon className='crown' icon={faCrown} />
                        <p>
                        Contestants must be a citizen of Nigeria.</p> </div> 
                       <div><FontAwesomeIcon className='crown' icon={faCrown} />
                        <p>
                        Contestants must be of good moral character and have never been convicted of any crime, nor have a criminal charge pending against them.</p> </div> 
                       <div><FontAwesomeIcon className='crown' icon={faCrown} />
                        <p>
                        Contestants may participate in as many pageants as he/she wants, as long as he/she meets all deadlines affiliated with the Mr. & Miss Notable Nigeria Student (Scholarship Pageant). </p> </div> 
                       <div><FontAwesomeIcon className='crown' icon={faCrown} />
                        <p>
                        A contestant is ineligible to compete if he/she presently holds a crown within the same year.</p> </div>
                                        </section>
                <section className='photo'>
                <nav>
                    <img src={photo} alt="" />
                </nav>
                </section>
            </div>
        </div>
    )
}
export default Rules;