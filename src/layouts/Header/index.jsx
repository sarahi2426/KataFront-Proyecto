import { NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
    const linkIsActive = (isActive) => {
        return isActive ? 'header_item_link header_item_link--is--active' : 'header_item_link'
      }  
  return (
    <header>
        <nav className="header">
            <NavLink to="/" className="header_logo" >Dragon Ball</NavLink>
            <ul className="header_nav_list">
                <li className="header_list_item">
                    <NavLink to="/" className={({ isActive })=>linkIsActive(isActive)}>
                        Home
                    </NavLink></li>
                <li className="header_list_item">
                    <NavLink to="/SobreMi" className={({ isActive })=>linkIsActive(isActive)}>
                        Sobre Mi
                    </NavLink> 
                    </li>
                    <li className="header_list_item">
                    <NavLink to="/Quizz" className={({ isActive })=>linkIsActive(isActive)}>
                       Quizz
                    </NavLink> 
                    </li>
                
                    </ul>
        </nav>
    </header>
  )
}

export default Header