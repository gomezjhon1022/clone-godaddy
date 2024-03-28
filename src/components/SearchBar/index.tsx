import './SearchBar.sass'

function SearchBar () {
  return (
    <section className='searchbar'>
      <div className='searchbar-input-container'>
        <form className='form'>
          <div>
            <input placeholder='Find your perfect domain'></input>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-search">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          <span>Search Domains</span>
          </button>
        </form>
      </div>
      <div className='searchbar-price'>
        <img src='https://img1.wsimg.com/cdnassets/transform/120a96a7-6cd5-4fb9-b29a-cca3fd8a1b87/img_icon_bug_tld-shop-svg'></img>
        &#x202A;£1.32&#x202C;
      </div>
    </section>
  )
}

export { SearchBar }