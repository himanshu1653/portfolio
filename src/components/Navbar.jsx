import './Navbar.css'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
function Navbar() {
    return (

        <nav className="nav">

            <div className="logo-container">
                <img src={logo} alt="Logo" className="Logo" />
                <h2 ><span className="first">HIMANSHU JHA</span></h2></div>
            <ul>
                <li>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        Home
                    </Link>
                </li>

                <li> <a href="/#skills">Skills</a></li>
                <li><a href="#Projects">Projects</a>
                </li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>


    )
}
export default Navbar