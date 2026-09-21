import './Skills.css'
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaJava,
    FaPython,
    FaGitAlt,
    FaGithub
} from "react-icons/fa"

import { SiMysql } from "react-icons/si"
function Skills() {

    return (
        <div id="skills">
       <h1 className="skills-title"> Professional Skills & Expertise</h1>
        <div className="skills-container">
            <div className="skill">
              <FaHtml5/>
                <h2>HTML</h2>
                 <p >Building the structure of web pages.</p>
            </div>
            
            <div className="skill">
                <FaCss3Alt/>
                <h2>CSS</h2>
                 <p  >Designing and styling web pages</p>
            </div>

            <div className="skill">
                <FaJs/>
                <h2>javaScript</h2>
                 <p > Adding logic and interactivity to websites</p>
            </div>

            <div className="skill">
                <FaReact/>
                <h2>React</h2>
                 <p >Building user interfaces with React</p>
            </div>

            <div className="skill">
                <FaJava/>
                <h2>Java</h2>
                 <p >Programming and problem solving</p>
            </div>

            <div className="skill">
                <SiMysql/>
                <h2>MYSQL </h2>
                 <p >Working with databases and queries.</p>
            </div>
            <div className="skill">
                <FaPython/>
                <h2>python</h2>
                 <p >Programming and problem solving</p>
            </div>

            <div className="skill">
                <FaGitAlt/>
                <FaGithub/>
                <h2>GIT/GITHUB</h2>
                 
            </div>
        </div>
        </div>
    )
}
export default Skills