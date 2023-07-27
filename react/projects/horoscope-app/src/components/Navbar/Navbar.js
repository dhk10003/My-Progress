import "./Navbar.scss"
import logo from "../../helpers/logo.png"

const Navbar = () => {
    return(
        <div className="navbar">
            
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

            <nav className="links">
                <a href="#horoscope">Horoscope</a>
                <a href="#daily">Daily</a>
                <a href="#Tarot">Tarot</a>
                <a href="#Article">Article</a>
                <a href="#Contact">Contact</a>
            </nav>
        </div>
    )
}

export default Navbar;