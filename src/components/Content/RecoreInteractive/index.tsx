import { useState } from "react"
import './RecoreInteractive.sass'

export function RecoreInteractive () {
  const [interest, setInterest] = useState('Domains')
  const optionsInterest = [ 'Domains', 'Recommended','WordPress and Security' ]

  const handleSelection = (option:string) => {
    setInterest(option)
  }
  return (
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
  )
} 