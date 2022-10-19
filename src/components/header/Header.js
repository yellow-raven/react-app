import logo from '../../logo.png';
import './Header.css'

function Header() {
    return (
    <header className="header">
        <nav className="nav">
                <div className="nav-items">
                    <img src={logo}/>
                    <h1>Learning ReactJS</h1>
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