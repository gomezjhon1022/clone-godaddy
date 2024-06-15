import './Search.sass'

export function Search () {
  return (
    <section className="search">
      <div className="search-container">
        <h2 className='search-title'>
          <span>It all starts with a domain.</span>
        </h2>
        <p className='search-description'>
          Make your idea real. Claim your space online with a domain.
        </p>
        <div className='search-box'>
          <div>
            <form className='search-form'>
              <div>
                <input className='search-input' placeholder='Find your perfect domain'></input>
              </div>
              <button className='search-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}