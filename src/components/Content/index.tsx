import './Content.sass'

export function Content () {
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
              <div>
                <div>
                  <a>
                    <span>Start for Free</span>
                  </a>
                </div>
              </div>
              <p>No charge, no obligation, nothing to cancel.**</p>
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
              <div>
                <div>
                  <a>
                    <span>Find Your Domain</span>
                  </a>
                </div>
              </div>
              <div>
                <span>
                  Domains include free privacy protection forever
                  <sup>+</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}