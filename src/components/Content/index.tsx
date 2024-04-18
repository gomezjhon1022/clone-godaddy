import { useState } from 'react'
import './Content.sass'

export function Content () {
  const [interest, setInterest] = useState('Domains')
  const optionsInterest = [ 'Domains', 'Recommended','WordPress and Security' ]
  const handleSelection = (option:string) => {
    setInterest(option)
  }
  return (
    <main className="main">
      <section className='marquee'>
        <div>
          <div className='primary-panel'>
            <div className='primary-headline'>
              <h2 className='textHeading'>Websites + Marketing</h2>
              <h3 className='subtitle'>
                <span>Create your website.</span>
              </h3>
              <p className='description'>Let our GoDaddy Guides build your starter website for FREE. Give us a call on 020 7023 9020.</p>
              <div className='button-start'>
                <div>
                  <a>
                    <span>Start for Free</span>
                  </a>
                </div>
              </div>
              <p className='tag'>No charge, no obligation, nothing to cancel.**</p>
            </div>
            <div className='primary-panel-hidden'>

            </div>
          </div>
          <div className='secondary-panel'>
            <div className='secondary-headline'>
              <h2>Domain Names</h2>
              <h3>
                <span>
                  Grab a .co.uk for &#x202A;£0.01&#x202C;/1st yr.
                </span>
              </h3>
              <div className='description'>
                <span>
                  3-year purchase required. Additional year(s) &#x202A;£12.99&#x202C;
                </span>
              </div>
              <div className='button-find-domain'>
                <div>
                  <a>
                    <span>Find Your Domain</span>
                  </a>
                </div>
              </div>
              <div className='include'>
                <span>
                  Domains include free privacy protection forever
                  <sup>+</sup>
                </span>
              </div>
            </div>
            <div className='link-button'>
              <div>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-right">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='main-content'>
        <section className='product-grid-container'>
          <div className='product-grid'>
            <a>
              <span>
                .co.uk <br/>&#x202A;£0.01&#x202C;/1st yr
              </span>
            </a>
            <a>
              <span>
                .com <br/>&#x202A;£0.01&#x202C;/1st yr
              </span>
            </a>
            <a>
              <span>
                Professional Email <br/><span className="no-wrap-text">£1.99</span> per user/mo
              </span>
            </a>
            <a>
              <span>
                Web Hosting <br/><span className="no-wrap-text">£3.99</span>/mo <br/>Includes free SSL
              </span>
            </a>
            <a>
              <span>
                SSL Security <br/><span className="no-wrap-text">£49.99</span>/yr
              </span>
            </a>
            <a>
              <span>
                WordPress <br/><span className="no-wrap-text">£3.99</span>/mo
              </span>
            </a>
            <a>
              <span>
                Microsoft 365 <br/><span className="no-wrap-text">£6.99</span>/mo
              </span>
            </a>
            <a>
              <span>
                Website Design Services
              </span>
            </a>
            <a className='last'>
              <img/>
              <div>
                <span>
                  <p>&#x202A;£52.00&#x202C;/1st yr, 2-yr term.<br/>
                    .ai is the future.
                  </p>
                </span>
              </div>
            </a>
          </div>
        </section>
        <section className='recore-interactive-section'>
          <div className='headline-wrapper'>
            <div className='headline'>
              <h2>
                <span>
                What's first up for your business?
                </span>
              </h2>
            </div>
            <div className='filter-nav'>
              <div>
                <ul>
                  {optionsInterest.map(option=> (
                    <li key={option}>
                      <button className={`${interest===option?'button-selected':''}`} onClick={()=>handleSelection(option)}>
                        {option}
                      </button>
                    </li>
                  )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className={`${interest==='WordPress and Security'?'card-grid-recommended':'card-grid'}`}>
            {(interest==='Domains') &&
              <>
                <div className='recore-card-item'>
                  <div>
                    <div className='lazy-bg lazy-bg--domain'>
                      <div>
                        <h3>
                          <span>Domains</span>
                        </h3>
                        <p>Get started with the perfect domain, which comes with free domain privacy protection forever.</p>
                        <div>
                          <div>
                            <a>
                              <span>Search Domains</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-right">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='recore-card-item'>
                  <div>
                    <div className='lazy-bg-2 lazy-bg--domain'>
                      <div>
                        <h3>
                          <span>.co for &#x202A;£9.99&#x202C;/1st year</span>
                        </h3>
                        <p>Ensure your company and website stand out with a .co domain.</p>
                        <div>
                          <div>
                            <a>
                              <span>Find Your Domain</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-right">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='recore-card-item'>
                  <div>
                    <div className='lazy-bg-3 lazy-bg--domain'>
                      <div>
                        <h3>
                          <span>.co.uk &#x202A;£0.01&#x202C;/1st yr</span>
                        </h3>
                        <p>Boost your local impact with our localized top-level domains.</p>
                        <div>
                          <div>
                            <a>
                              <span>Get Started</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-right">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
            { (interest==='Recommended') &&
              <>
                <div className='recore-card-item'>
                  <div>
                    <div className='lazy-bg lazy-bg--recommended'>
                      <div>
                        <h3>
                          <span>
                            Professional Email £1.99 per user/mo
                          </span>
                        </h3>
                        <p>Earn trust from your customers with an email address that matches your domain.</p>
                        <div>
                          <div>
                            <a>
                              <span>Get Started</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-right">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='recore-card-item'>
                  <div>
                    <div className='lazy-bg-2 lazy-bg--recommended'>
                      <div>
                        <h3>
                          <span>Websites £6.99 /mo</span>
                        </h3>
                        <p>Start for free and quickly design a beautiful, mobile-friendly site.</p>
                        <div>
                          <div>
                            <a>
                              <span>Create Your Site</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-right">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='recore-card-item'>
                  <div>
                    <div className='lazy-bg-3 lazy-bg--recommended'>
                      <div>
                        <h3>
                          <span>Web Hosting £3.99/mo</span>
                        </h3>
                        <p>Get fast load times and 99.9% uptime guaranteed.***</p>
                        <div>
                          <div>
                            <a>
                              <span>View Plans and Pricing</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-right">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
            { (interest==='WordPress and Security') &&
              <>
                <div className='recore-card-item'>
                  <div>
                    <div className='lazy-bg'>
                      <div>
                        <h3>
                          <span>
                            WordPress £3.99 /mo
                          </span>
                        </h3>
                        <p>Let AI quickly build a fully-managed website that's always up to date, with no worries.</p>
                        <div>
                          <div>
                            <a>
                              <span>Explore WordPress Plans</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-right">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='recore-card-item'>
                  <div>
                    <div className='lazy-bg-2'>
                      <div>
                        <p>
                          <span>All-in-one</span>
                        </p>
                        <h3>
                          <span>SSL Security £49.99 /yr</span>
                        </h3>
                        <p>Help keep your site secure and boost search ranking with an SSL Certificate.</p>
                        <div>
                          <div>
                            <a>
                              <span>Get Protection</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-right">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          </div>
        </section>
        <section className='template-wall'>
          <div className='headline-wrapper'>
            <div>
              <h2>
                <span>Templates designed to sell.</span>
              </h2>
              <p>
                Choose from 100s of designs for every idea and industry.
              </p>
            </div>
          </div>
          <div className='filter-nav'>
            <ul></ul>
          </div>
          <div className='carrusel'>
            <div>
              <div>
                <div>
                  <div className='card-1 card-carousel'></div>
                  <div className='card-2 card-carousel'></div>
                  <div className='card-3 card-carousel'></div>
                  <div className='card-4 card-carousel'></div>
                  <div className='card-5 card-carousel'></div>
                  <div className='card-6 card-carousel'></div>
                  <div className='card-7 card-carousel'></div>
                </div>
              </div>
              <div>
                <div>
                  <div className='card-8 card-carousel'></div>
                  <div className='card-9 card-carousel'></div>
                  <div className='card-10 card-carousel'></div>
                  <div className='card-11 card-carousel'></div>
                  <div className='card-12 card-carousel'></div>
                  <div className='card-13 card-carousel'></div>
                  <div className='card-14 card-carousel'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='pause-play'>
            <button className='play-button'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
              </svg>
            </button>
          </div>
          <div className='browser-templates'>
            <div>
              <a>
                <span>Browse All Templates</span>
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}