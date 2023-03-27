import './Navbar.css'
import Logo from '../../assets/Logo.png'
import data from './data.js'

const Navbar = () => {
  return (
    <nav className='container-navbar'>
        <div className='container nav-container'>
            <a href='index.html' className='nav-logo'>
                  <img src={Logo} className="App-logo" alt="logo" />
            </a>
            <ul className='nav-menu'>
              {
                data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
              }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar