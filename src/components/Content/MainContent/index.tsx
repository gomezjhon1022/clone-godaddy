import { useState } from 'react'
import { ProductGrid } from '../ProductGrid'
import { RecoreInteractive } from '../RecoreInteractive'
import './MainContent.sass'

export default function MainContent () {
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true)
  const handlePlaying = () => (
    setIsCarouselPlaying(!isCarouselPlaying)
  )
  return (
    <section className='main-content'>
        <ProductGrid />
        <RecoreInteractive />
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
  )
}