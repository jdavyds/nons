import './faq.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
function Faq() {
    const [ open1, setOpen1 ] = useState('answer')
    const [ open2, setOpen2 ] = useState('answer')
    const [ open3, setOpen3 ] = useState('answer')
    const [ open4, setOpen4 ] = useState('answer')
    const [ open5, setOpen5 ] = useState('answer')
    const [ open6, setOpen6 ] = useState('answer')
    const [ open7, setOpen7 ] = useState('answer')
    const [ open8, setOpen8 ] = useState('answer')
    const [ open9, setOpen9 ] = useState('answer')
    const [ open10, setOpen10 ] = useState('answer')
    function handleOpen1() {
        if(open1 === 'answer active') {
            setOpen1('answer')
        } else {
            setOpen1('answer active')
            setOpen2('answer')
            setOpen3('answer')
            setOpen4('answer')
            setOpen5('answer')
            setOpen6('answer')
            setOpen7('answer')
            setOpen8('answer')
            setOpen9('answer')
            setOpen10('answer')
        }
    }
    function handleOpen2() {
        if(open2 === 'answer active') {
            setOpen2('answer')
        } else {
        setOpen1('answer')
        setOpen2('answer active')
        setOpen3('answer')
        setOpen4('answer')
        setOpen5('answer')
        setOpen6('answer')
        setOpen7('answer')
        setOpen8('answer')
        setOpen9('answer')
        setOpen10('answer')
        }
    }
    function handleOpen3() {
        if(open3 === 'answer active') {
            setOpen3('answer')
        } else {
        setOpen1('answer')
        setOpen2('answer')
        setOpen3('answer active')
        setOpen4('answer')
        setOpen5('answer')
        setOpen6('answer')
        setOpen7('answer')
        setOpen8('answer')
        setOpen9('answer')
        setOpen10('answer')
        }
    }
    function handleOpen4() {
        if(open4 === 'answer active') {
            setOpen4('answer')
        } else {
        setOpen1('answer')
        setOpen2('answer')
        setOpen3('answer')
        setOpen4('answer active')
        setOpen5('answer')
        setOpen6('answer')
        setOpen7('answer')
        setOpen8('answer')
        setOpen9('answer')
        setOpen10('answer')
        }
    }
    function handleOpen5() {
        if(open5 === 'answer active') {
            setOpen5('answer')
        } else {
        setOpen1('answer')
        setOpen2('answer')
        setOpen3('answer')
        setOpen4('answer')
        setOpen5('answer active')
        setOpen6('answer')
        setOpen7('answer')
        setOpen8('answer')
        setOpen9('answer')
        setOpen10('answer')
        }
    }
    function handleOpen6() {
        if(open6 === 'answer active') {
            setOpen6('answer')
        } else {
        setOpen1('answer')
        setOpen2('answer')
        setOpen3('answer')
        setOpen4('answer')
        setOpen5('answer')
        setOpen6('answer active')
        setOpen7('answer')
        setOpen8('answer')
        setOpen9('answer')
        setOpen10('answer')
        }
    }
    function handleOpen7() {
        if(open7 === 'answer active') {
            setOpen7('answer')
        } else {
        setOpen1('answer')
        setOpen2('answer')
        setOpen3('answer')
        setOpen4('answer')
        setOpen5('answer')
        setOpen6('answer')
        setOpen7('answer active')
        setOpen8('answer')
        setOpen9('answer')
        setOpen10('answer')
        }
    }
    function handleOpen8() {
        if(open8 === 'answer active') {
            setOpen8('answer')
        } else {
        setOpen1('answer')
        setOpen2('answer')
        setOpen3('answer')
        setOpen4('answer')
        setOpen5('answer')
        setOpen6('answer')
        setOpen7('answer')
        setOpen8('answer active')
        setOpen9('answer')
        setOpen10('answer')
        }
    }
    function handleOpen9() {
        if(open9 === 'answer active') {
            setOpen9('answer')
        } else {
        setOpen1('answer')
        setOpen2('answer')
        setOpen3('answer')
        setOpen4('answer')
        setOpen5('answer')
        setOpen6('answer')
        setOpen7('answer')
        setOpen8('answer')
        setOpen9('answer active')
        setOpen10('answer')
        }
    }
    function handleOpen10() {
        if(open10 === 'answer active') {
            setOpen10('answer')
        } else {
        setOpen1('answer')
        setOpen2('answer')
        setOpen3('answer')
        setOpen4('answer')
        setOpen5('answer')
        setOpen6('answer')
        setOpen7('answer')
        setOpen8('answer')
        setOpen9('answer')
        setOpen10('answer active')
        }
    }
    return(
        <div className="faq" id='faq'>
            <h3>Frequently Asked Questions</h3>
            <main>
                <nav>
                <div className="questions" onClick={handleOpen1}>
                how can I become a contestant <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className={open1}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, distinctio?
                </div>
                </nav>
                <nav>
                <div className="questions" onClick={handleOpen2}>
                how can I  meet my school coordinator <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className={open2}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, distinctio?
                </div>
                </nav>
                <nav>
                <div className="questions" onClick={handleOpen3}>
                what are the requirements <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className={open3}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, distinctio?
                </div>
                </nav>
                <nav>
                <div className="questions" onClick={handleOpen4}>
                what is the reason  for this event <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className={open4}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, distinctio?
                </div>
                </nav>
                <nav>
                <div className="questions" onClick={handleOpen5}>
                can a final year student register <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className={open5}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, distinctio?
                </div>
                </nav>
                <nav>
                <div className="questions" onClick={handleOpen6}>
                what is the highest age to register  <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className={open6}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, distinctio?
                </div>
                </nav>
                <nav>
                <div className="questions" onClick={handleOpen7}>
                can a first year student register <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className={open7}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, distinctio?
                </div>
                </nav>
                <nav>
                <div className="questions" onClick={handleOpen8}>
                when is the date for auditioning <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className={open8}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, distinctio?
                </div>
                </nav>
                <nav>
                <div className="questions" onClick={handleOpen9}>
                what is the least age to register <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className={open9}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, distinctio?
                </div>
                </nav>
                <nav>
                <div className="questions" onClick={handleOpen10}>
                when is the gala night <FontAwesomeIcon className='down' icon={faAngleDown} />
                </div>
                <div className={open10}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, distinctio?
                </div>
                </nav>
            </main>
            <button>SEE MORE QUESTIONS</button>
        </div>
    )
}
export default Faq;