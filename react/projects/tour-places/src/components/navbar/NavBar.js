import navStyles from './NavBar.module.scss';

const NavBar = () => {

    return (
        <div className={navStyles.navbar}>
            <a href="#aboutus">ABOUT</a>
            <a href="#foryou">FOR YOU</a>
            <a href="#services">SERVICES</a>
            <a href="#blog">BLOG</a>
            <a href="#vlog">VLOG</a>
            <a href="#contact">CONTACT</a>
        </div>
    )
}


export default NavBar;