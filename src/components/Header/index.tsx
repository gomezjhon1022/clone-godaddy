import './Header.sass'
import { Godaddylogo } from '../../assets/Godaddylogo'

export function Header() {
  return (
    <header className="header">
      <div className='header-left'>
        <a>
          <Godaddylogo />
        </a>
        <nav>
          <button className='header-menu'>
            <span className='hamburger-menu'></span>
          </button>
          <ul className='header-links'>
            <li>Domains</li>
            <li>Websites and Hosting</li>
            <li>Email</li>
            <li>Marketing</li>
          </ul>
        </nav>
      </div>
      <div className='header-right'>
        <a>Contact Us</a>
        <a>Help</a>
        <details>Sign In</details>
        <a>chart</a>
      </div>
    </header>
  )
}