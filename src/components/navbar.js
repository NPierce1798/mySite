import { Link } from 'react-router-dom'
import logo from "../images/logo.png"

function NavBar() {

    return (

      <div className="navbar__container">
        <Link to='/'><img className="navbar__logo" src={logo}/></Link>
        <div className="navbar__button-container">
            <Link to='/' className="navbar__button" >HOME</Link>
            <Link to='/projects'  className="navbar__button" >PORTFOLIO</Link>
        </div>
      </div>
    );
  }
  
  export default NavBar;