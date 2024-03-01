import './CardSignIn.sass'

export function CardSignIn () {
  return (
            <div className='details-list-container'>
              <div className='details-list-figure'></div>
              <div className='details-list'>
                <div className='part-1'>
                  <div>
                    Registered Users
                  </div>
                  <div>
                    Have an account? Sign in now.
                  </div>
                  <div>
                    <a>Sign In</a>
                  </div>
                </div>
                <div className='part-2'>
                  <div>
                    New Customer
                  </div>
                  <div>
                    New to GoDaddy? Create an account to get started today.
                  </div>
                  <div>
                    <a>Create an Account</a>
                  </div>
                </div>
                <div className='part-3'>
                  <p>INBOX LINKS</p>
                  <ul>
                    <li>
                      <a>Sign in to Office 365 Email</a>
                    </li>
                    <li>
                      <a>Sign in to GoDaddy Webmail</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  )
}
