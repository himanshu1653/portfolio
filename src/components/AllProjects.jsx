import aapimage from '../assets/aapimage.jpeg'
import './AllProjects.css'
import './Final.css'
import portfolio from '../assets/portfolio.png'
import water from '../assets/water.png'
import { FaGithub } from "react-icons/fa"
import coderocks from '../assets/coderocks.png'
function AllProjects() {
    return (
        <div className="harsh" style={{ padding: " 100px 50px", color: "black" }}>
            <h1 >All Projects</h1>
            <div className="all-projects-container">
                <div className="project-card">

                    <img src={aapimage} alt="aapimage" className="project-image" />
                    <div className="project-button">
                        <h3>Civicconnect</h3>
                        <div className="project-live">
                            <a href="https://github.com/himanshu1653/problems" ><FaGithub /><span>GITHUB</span></a>
                            <a href="https://dir.indiamart.com/mumbai/complaint-management.html ">live  </a>
                        </div>


                    </div>

                    <p>
                        Technologies: React, JavaScript, HTML, CSS
                    </p>
                    <div className='technologies'>
                        <div className='tech'>
                            <h4>React</h4>
                        </div>
                        <div className='tech'>
                            <h4>Javascript</h4>
                        </div>
                        <div className='tech'>
                            <h4>Html</h4>
                        </div>
                        <div className='tech'>
                            <h4>Css</h4>
                        </div>
                    </div>

                </div>

                <div className="project-card">

                    <img src={water} alt="water" className="project-image" />
                    <div className="project-button">
                        <h3>Auqabid</h3>
                        <div className="project-live">
                            <a href="https://github.com/himanshu1653/watertkanker" ><FaGithub /><span>GITHUB</span></a>
                            <a href="https://waterbase.netlify.app/" >live  </a>
                        </div>


                    </div>

                    <p>
                        Technologies: React, JavaScript, HTML, CSS
                    </p>
                    <div className='technologies'>
                        <div className='tech'>
                            <h4>React</h4>
                        </div>
                        <div className='tech'>
                            <h4>Javascript</h4>
                        </div>
                        <div className='tech'>
                            <h4>Html</h4>
                        </div>
                        <div className='tech'>
                            <h4>Css</h4>
                        </div>
                    </div>

                </div>

                <div className="project-card">

                    <img src={coderocks} alt="coderocks" className="project-image" />
                    <div className="project-button">
                        <h3>Ascent-learn</h3>
                        <div className="project-live">
                            <a href="https://github.com/himanshu1653/ascend-learn" ><FaGithub /><span>GITHUB</span></a>
                            <a href="https://ascend-learn.netlify.app/" >live  </a>
                        </div>

                    </div>

                    <p>
                        Technologies: React, JavaScript, HTML, CSS
                    </p>
                    <div className='technologies'>
                        <div className='tech'>
                            <h4>React</h4>
                        </div>
                        <div className='tech'>
                            <h4>Javascript</h4>
                        </div>
                        <div className='tech'>
                            <h4>Html</h4>
                        </div>
                        <div className='tech'>
                            <h4>Css</h4>
                        </div>
                    </div>

                </div>
                <div className="project-card">

                    <img src={portfolio} alt="portfolio" className="project-image" />
                    <div className="project-button">
                        <h3>portfolio</h3>
                        <div className="project-live">
                            <a href="https://github.com/himanshu1653/portfolio" ><FaGithub /><span>GITHUB</span></a>
                            <a href="https://waterbase.netlify.app/" >live  </a>
                        </div>


                    </div>

                    <p>
                        Technologies: React, JavaScript, HTML, CSS
                    </p>
                    <div className='technologies'>
                        <div className='tech'>
                            <h4>React</h4>
                        </div>
                        <div className='tech'>
                            <h4>Javascript</h4>
                        </div>
                        <div className='tech'>
                            <h4>Html</h4>
                        </div>
                        <div className='tech'>
                            <h4>Css</h4>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AllProjects