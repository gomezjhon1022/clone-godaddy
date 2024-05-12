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
          <figcaption>
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
                    <div className='highlight-primary'></div>
                    <div className='card-link'>
                      <a>
                        <span>Domain</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='highlight-primary'></div>
                    <div className='card-link'>
                      <a>
                        <span>Online Store</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='highlight-primary'></div>
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