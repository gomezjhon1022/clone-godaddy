import './Marquee.sass'

export function Marquee () {
  return (
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
  )
}