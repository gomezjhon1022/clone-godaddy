import './Footer.sass'

function Footer () {
  return(
    <footer>
      <section className='tittle'>
        <p>Prices exclude tax.ICANN fees included.</p>
      </section>
      <nav>
        <ul>
          <li>
            <div className='title-list'>About GoDaddly</div>
            <ul>
              <li><a>About Us</a></li>
              <li><a>Careers</a></li>
              <li><a>Contact Us</a></li>
              <li><a>GoDaddy Blog</a></li>
              <li><a>Investor Relations</a></li>
              <li><a>Legal</a></li>
              <li><a>Newsroom</a></li>
              <li><a>Trust Center</a></li>
            </ul>
          </li>
          <li>
            <div className='title-list'>Support</div>
            <ul>
              <li><a>Product Support</a></li>
              <li><a>Community</a></li>
              <li><a>Report Abuse</a></li>
              <li><a>Resources</a></li>
            </ul>
          </li>
          <li>
            <div className='title-list'>Resources</div>
            <ul>
              <li><a>Webmail</a></li>
              <li><a>WHOIS</a></li>
              <li><a>ICANN Confirmation</a></li>
              <li><a>Venture Forward: Microbusiness Data</a></li>
              <li><a>Designers & Developers</a></li>
              <li><a>Corporate Domains</a></li>
              <li><a>Redeem Code</a></li>
              <li><a>Product Catalog</a></li>
              <li><a>Business Name Generator</a></li>
            </ul>
          </li>
          <li>
            <div className='title-list'>Partner Programs</div>
            <ul>
              <li><a>Affiliates</a></li>
              <li><a>Reseller Programs</a></li>
              <li><a>GoDaddy Pro</a></li>
            </ul>
          </li>
          <li>
            <div className='title-list'>Account</div>
            <ul>
              <li><a>My Products</a></li>
              <li><a>Renewals & Billing</a></li>
              <li><a>Create Account</a></li>
            </ul>
          </li>
          <li>
            <div className='title-list'>Shopping</div>
            <ul>
              <li><a>Buy a Domain</a></li>
              <li><a>Websites</a></li>
              <li><a>WordPress</a></li>
              <li><a>Hosting</a></li>
              <li><a>Web Security</a></li>
              <li><a>Email & Office</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export { Footer };