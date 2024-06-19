import './Guide.sass'

export function Guide () {
  return (
    <section className="guide">
      <div className='guide-container'>
        <div className='guide-image'>

        </div>
        <div className='guide-content'>
          <div className='guide-logo'>
            <div className='guide-img-wrapper'>
              <img />
            </div>
          </div>
          <div className='guide-card'>
            <h2 className='guide-card-title'>
              <span>Why go with GoDaddy?</span>
            </h2>
            <div className='guide-card-description'>
              <p>Because we know that even the best technology is only as good as the people behind it. That's why we offer expert supprt, plus a lot more.</p>
            </div>
            <button className='guide-card-button'>Get Help</button>
          </div>
        </div>
      </div>
    </section>
  )
}