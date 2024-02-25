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
        <details>
          <summary>
            <span>
            Sign In
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="arrow-down" width="2rem" height="2rem">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

          </summary>
        </details>
        <a>chart</a>
      </div>
    </header>
  )
}