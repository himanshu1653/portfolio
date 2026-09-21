import './Hero.css'
import himanshu from '../assets/himanshu.png'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import himanshuresume from '../assets/himanshuresume.pdf'
function Hero() {
    return (
            
                <div className="hero">

            <div className="hero-content">
                <div className="hero-text">
                    <h1 >
                        <span className="name">Hi,</span>
                        <span className="intro">I'M Himanshu Jha</span>
                    </h1>
                    <p> A full stack developer with a passion for web development and designing websites.  </p>


                    <div className="hero-text-container">

                        <p>Here you can find information about my skills, projects, and contact details. Feel free to explore and get in touch!</p>
                        <div className="email">
                            <a href="mailto:himanshujha1126@gmail.com" ><FaEnvelope /> <span >himanshujha1126@gmail.com</span> </a>
                        </div>
                        <div className="button-container">
                            <a href="#contact" className="button">Hire Me </a>
                           <a href="#Projects" className="project">
                            
  View Projects
</a>
<a href={himanshuresume} target="_blank" className="project">
 View Resume
</a>
                        </div>
                    </div>
                    <div className='hero-link'>
                        <a href="https://github.com/himanshu1653/" target="_blank">  <FaGithub /> </a>

                        <a href="https://www.linkedin.com/in/himanshu1653/" target="_blank" > < FaLinkedin /> </a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={himanshu} alt="himanshu" />
                </div>

            </div>

        </div>

           
        
    )
}
export default Hero