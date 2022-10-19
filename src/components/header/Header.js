import logo from '../../assets/logo.png';
import './Header.css'

function Header() {
    return (
    <header className="header">
        <nav className="nav">
                <div className="nav-title">
                    <img src={logo}/>
                    <h3>Learning ReactJS</h3>
                </div>
                <ul className="nav-items">
                    <li>Fun Facts</li>
                    <li>Reasons to Learn</li>
                </ul>
        </nav>
    </header>
    )
  }
  
  export default Header;