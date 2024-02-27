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
          <div className='details-list-container'>
            <div className='details-list-figure'></div>
            <div className='details-list'>
              <div className='part-1'>
                <div>
                  Registered Users
                </div>
                <div>
                  Have an account? Sign in now.
                </div>
                <div>
                  <a>Sign In</a>
                </div>
              </div>
              <div className='part-2'>
                <div>
                  New Customer
                </div>
                <div>
                  New to GoDaddy? Create an account to get started today.
                </div>
                <div>
                  <a>Create an Account</a>
                </div>
              </div>
              <div className='part-3'>
                <p>INBOX LINKS</p>
                <ul>
                  <li>
                    <a>Sign in to Office 365 Email</a>
                  </li>
                  <li>
                    <a>Sign in to GoDaddy Webmail</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </details>
        <a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="image-chart">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        </a>
      </div>
    </header>
  )
}