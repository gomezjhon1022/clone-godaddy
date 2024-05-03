import { useState } from 'react'
import './Content.sass'
import { Marquee } from './Marquee'

export function Content () {
  const [interest, setInterest] = useState('Domains')
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true)
  const optionsInterest = [ 'Domains', 'Recommended','WordPress and Security' ]
  const handleSelection = (option:string) => {
    setInterest(option)
  }
  const handlePlaying = () => (
    setIsCarouselPlaying(!isCarouselPlaying)
  )
  return (
    <main className="main">
      <Marquee />
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
          <div className='carousel'>
            <div>
              <div className={`card-carousel-container ${isCarouselPlaying?'play':'pause'}`}>
                <div>
                  <div className='card-carousel-1 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='card-carousel-2 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='card-carousel-3 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='card-carousel-4 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='card-carousel-5 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='card-carousel-6 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='card-carousel-7 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`card-carousel-container ${isCarouselPlaying?'play':'pause'}`}>
                <div>
                  <div className='card-carousel-1 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='card-carousel-2 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='card-carousel-3 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='card-carousel-4 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='card-carousel-5 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='card-carousel-6 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='card-carousel-7 card-carousel'>
                    <div className='card-overlay'>
                      <div>
                        <a>
                          <span>Start Editing</span>
                        </a>
                        <button>
                          <span>Preview</span>
                        </button>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-eye">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pause-play'>
            <button className='play-button' onClick={handlePlaying}>
              {isCarouselPlaying?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='icon-pause'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
              </svg>
              :<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-play">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
            }
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