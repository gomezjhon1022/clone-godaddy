import './CustomerSection.sass'

export function CustomerSection () {
  return (
    <section className="customer-section">
      <div className='customer-headline-wrapper'>
        <div className='customer-headline'>
          <h2>
            <span>Onward and upward with our customers.</span>
          </h2>
        </div>
      </div>
      <div className='customer-details'>
        <div className='customer-card'>
          <figcaption className='customer-card-attribution'>
            Rahiem Thompson
            <br/>
            <span>roletape.com</span>
          </figcaption>
          <div className='customer-card-description'>
            <div>
              <h3>
                <span>“GoDaddy's Website Builder is super-convenient for somebody who has an idea of what they're trying to create, but might not have any technical skills.”</span>
              </h3>
            </div>
          </div>
          <div className='customer-card-links'>
            <div>
              <div>
                <div className='card-attribution'>
                  <ul>
                    <li>Products used by </li>
                    <li>Roletape:</li>
                  </ul>
                </div>
                <ul className='product-list'>
                  <li>
                    <div className='highlight-primary'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </div>
                    <div className='card-link'>
                      <a>
                        <span>Domain</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='highlight-primary'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="store">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                      </svg>
                    </div>
                    <div className='card-link'>
                      <a>
                        <span>Online Store</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='highlight-primary'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                      </svg>
                    </div>
                    <div className='card-link'>
                      <a>
                        <span>SSL Certificates</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='card-image'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}