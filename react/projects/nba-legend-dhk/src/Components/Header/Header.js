import HeaderStyles from './Header.module.scss'
import logo from '../../assets/nba-logo.png'

const Header = () => {
    return (
        <div className={HeaderStyles.header}>
            <img src={logo} alt="" />
            <h1>NBA Legends</h1>
        </div>
    )
}

export default Header;