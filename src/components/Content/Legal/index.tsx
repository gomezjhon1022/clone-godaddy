import './Legal.sass'

function Legal () {
  return (
    <section className='legal'>
      <div className='legal-container'>
        <p>
          <button>
            <span>
              <span data-cy="disclaimer-symbols">***, ** </span><strong>View product limitations and legal policies</strong>
            </span>
          </button>
        </p>
        <p>Third-party logos and marks are registered trademarks of their respective owners. All rights reserved. </p>

      </div>

    </section>
  )
}

export { Legal }