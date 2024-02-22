import './Header.sass'

export function Header() {
  return (
    <header className="header">
      <div className='header-left'>
        <a>Go daddy logo</a>
        <nav>
          <button>menu</button>
          <ul>
            <li>Domains</li>
            <li>Websites and Hosting</li>
            <li>Email</li>
            <li>Marketing</li>
          </ul>
        </nav>
      </div>
      <div className='header-rigth'>
        <a>Contact Us</a>
        <a>Help</a>
        <details>Sign In</details>
        <a>chart</a>
      </div>
    </header>
  )
}