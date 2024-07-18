import './Guide.sass'

export function Guide () {
  return (
    <section className="guide">
      <div className='guide-container'>
        <div className='guide-image-text'>
          <figcaption>
            Jamila R.
            <br/>
            <span>GoDaddy Guide</span>
          </figcaption>
        </div>
        <div className='guide-content'>
          <div className='guide-logo'>
            <div className='guide-img-wrapper'>
              <img  src='https://img1.wsimg.com/cdnassets/m/4c719f5dfa9e9e9e/original/GoDaddy-Guides-Logo.svg'/>
            </div>
          </div>
          <div className='guide-card-container'>
            <div className='guide-card'>
              <h2 className='guide-card-title'>
                <span>Why go with GoDaddy?</span>
              </h2>
              <div className='guide-card-description'>
                <p>Because we know that even the best technology is only as good as the people behind it. That's why we offer expert supprt, plus a lot more.</p>
              </div>
              <div className='guide-card-button'>
                <div className='button-get-help'>
                  <a>
                    Get Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}