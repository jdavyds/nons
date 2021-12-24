import './subscribe.css'
import pics from './../img/sub.png'
function Subscribe() {
    return(
        <div className="subscribe">
            <section>
            <p className='sub'>Subscribe To Our Newsletter</p>
            <p>To get  weekly  information about MR. & MISS NOTABLE NIGERIA STUDENT SCHOLARSHIP PAGEANT</p>
            <div>
            <input type="text" placeholder='Type Your Email Here'/><button>SUBSCRIBE</button>
            </div>
            </section>
                <img src={pics} alt="" />
        </div>
    )
}
export default Subscribe;