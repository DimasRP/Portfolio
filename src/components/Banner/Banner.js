import './Banner.css'
import BannerImage from '../../assets/myImg.png'
import {HiDownload} from 'react-icons/hi'
import CV from '../../assets/CV.pdf'
import {AiFillGithub, AiOutlineMail, AiFillLinkedin} from 'react-icons/ai'
import { useEffect, useState } from 'react';

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Frontend Developer", "Web Developer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const periode = 2000
  
    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        },delta)
  
        return () => {clearInterval(ticker)}
    }, [text])
  
    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
  
        setText(updateText)
  
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
  
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true)
            setDelta(periode)
        } else if(isDeleting && updateText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

  return (
    <section className='banner'>
        <div className='container banner-container'>
            <div className='banner-profile'>
                <h1 className=''>Welcome to my Portfolio</h1>
                <h3>{"Hi I'm Dimas Rizki P"}</h3>
                <h3>{text}</h3>
                <h4>Person who tired start carier in Front Development world with Multimedia background</h4>
                <div className='banner-cta'>
                    <a href='#services' className='btn primary'>Let's Talk</a>
                    <a href={CV} download  className='btn primary' >
                        Download CV <HiDownload/>
                    </a>

                </div>

                <div className='banner-socials'>
                    <a href='http://mail.google.com'><AiOutlineMail/></a>
                    <a href='https://github.com/DimasRP'><AiFillGithub/></a>
                    <a href='https://www.linkedin.com/in/dimasrp/'><AiFillLinkedin/></a>
                </div>
            </div>
            <div className='profile'>
                <img src={BannerImage} alt='banner'></img>
            </div>

        </div>
    </section>
  )
}

export default Banner