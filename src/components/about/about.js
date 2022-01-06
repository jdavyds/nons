import './about.css'
import aboutGirl from './../img/aboutGirl.png'
function About() {
    return(
        <div className="about" id='about'  >
            <section className='abt-nav' data-aos="fade-up"  >
            <nav>
                <img src={aboutGirl} alt="" />
            </nav>
            </section>
            <section className='abt' data-aos="slide-left" data-aos-duration='1500'>
                <h4>ABOUT</h4>
                <p>This maiden edition of the Mr. & Miss Notable Nigeria Student Scholarship Pageant will prioritize judging criteria such as; intelligence (with a 2.5 CGPA as minimum), poise, character, morality, open mindedness, cultural affinity & pride, responsibility, patriotism, personal drive, and creativity with physical appearance as a basic requirement. </p>
                <p>Through this initiative, 100+ consolation scholarship winners will be granted scholarships of N100,000 ($250) for their current or new academic year, while the crown winners will win scholarships the following scholarship reward for up to 5yrs of their school stay.</p>
                <button>READ MORE</button>
            </section>
        </div>
    )
}
export default About;