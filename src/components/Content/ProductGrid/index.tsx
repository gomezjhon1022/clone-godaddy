import './ProductGrid.sass'

export function ProductGrid () {
  return (
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
  )
}