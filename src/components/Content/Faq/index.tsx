import './Faq.sass'
import { ArrowDown } from './ArrowDown'

function Faq () {
  return (
  <section className='faq'>
    <div className='faq-container'>
      <div className='faq-headline'>
        <div className='faq-description'>
          <h1>
            Millions of customers rely on our domains and web hosting to get their ideas online.
          </h1>
          <h2>
            Frequently Asked Questions
          </h2>
        </div>
      </div>
      <div className='faq-main'>
        <details>
          <summary>
            <h3>How does GoDaddy help small business owners succeed?</h3>
            <span>
              <ArrowDown />
            </span>
          </summary>
          <div className='faq-answered'>GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional email helps you build a professional image, while our online marketing tools empower entrepreneurs to get online with an SEO-friendly website. GoDaddy is an all-in-one solution provider to get your idea online, backed with expert, personalized support from GoDaddy Guides.</div>
        </details>
        <details>
          <summary>
            <h3>Why do I need a webside for my business?</h3>
            <span>
              <ArrowDown />
            </span>
          </summary>
          <div className='faq-answered'>
            <span>
            Even small local businesses that only serve their hometown need a site. That's because the web is the first place people go when looking for a product or service. A website helps every business:
              <ul>
                <li>Promote and sell their products and services</li>
                <li>Connect with new customers (and keep existing customers)</li>
                <li>Build credibility</li>
                <li>Compete with bigger businesses</li>
                <li>Control their brand and keep their marketing fresh and current</li>
              </ul>
            Best of all, a website is much easier and more affordable than you might think.&nbsp;GoDaddy offers a complete selection of online tools for building websites, along with hosting, email and marketing options to grow their business on the web.
            </span>
          </div>
        </details>
        <details>
          <summary>
            <h3>Why do I need a professional email?</h3>
            <span>
              <ArrowDown />
            </span>
          </summary>
          <div className='faq-answered'>
            <span>
              There are a lot of reasons to switch from your free email to a domain-based email, but here are the top 3:
              <ol>
                  <li>Customers are much more likely to trust a professional address like lily@lilysbikes.com than lilysbikestexas84@notmail.com.</li>
                  <li><a href="/">Professional Email</a>&nbsp;provides world-class security with industry-leading spam and virus filters.</li>
                  <li>Personalized email addresses promote your business more effectively. Every time you send an email, you are giving your web address to customers and prospects, encouraging them to visit your website.</li>
              </ol>
            </span>
          </div>
        </details>
        <details>
          <summary>
            <h3>Why get a domain name from GoDaddy?</h3>
            <span>
              <ArrowDown />
            </span>
          </summary>
          <div className='faq-answered'>
            <span>
            GoDaddy&nbsp;is the world's largest and trusted domain registrar that empowers people like you with creative ideas to succeed online. <a href="/" >Buying a domain name</a> is easy with our domain search tool and domain name generator tools you can find the perfect website address for your business.
            </span>
            </div>
        </details>
        <details>
          <summary>
            <h3>Why use GoDaddy Website Builder?</h3>
            <span>
              <ArrowDown />
            </span>
          </summary>
          <div className='faq-answered'>
            <span>
            Because it's a fast, simple way to create a website that you — and your customers — will love. Simply type in your idea or industry and&nbsp;GoDaddy&nbsp;<a href="/" >Website Builder</a> will pull up a number of professionally designed, ready-to-launch templates. From there, just add your own text and images and you're good to go. And with dozens of features, from online appointment scheduling to a full-blown ecommerce system, Website Builder can handle your business' needs today and as you grow.
            </span>
          </div>
        </details>
        <details>
          <summary>
            <h3>What makes GoDaddy Web Hosting the world leader?</h3>
            <span>
              <ArrowDown />
            </span>
          </summary>
          <div className='faq-answered'>
            <span>
            With nearly 20 years in the industry, we have the experience, the technology and the hosting experts to help web designers, developers, bloggers and online businesses create and maintain their online presence. Our secure <a href="/" >web hosting platform</a>, complete with cPanel, offers a 99.9%&nbsp;uptime guarantee<sup>***</sup> and award-winning support, which has helped nearly 20+ million&nbsp;customers get online.
            </span>
          </div>
        </details>
        <details>
          <summary>
            <h3>Why choose GoDaddy for WordPress?</h3>
            <span>
              <ArrowDown />
            </span>
          </summary>
          <div className='faq-answered'>
            <span>
            GoDaddy offers reliable and affordable <a href="/" >WordPress hosting</a>&nbsp;and <a href="/">WooCommerce hosting</a>&nbsp;plans, one-click installs and the latest version so you have the most recent features available for your site. Your website content is managed from one place; you have a wealth of themes and add-ons giving you limitless options to succeed.
            </span>
          </div>
        </details>
        <details>
          <summary>
            <h3>Why should I transfer my domain, website or web hosting to GoDaddy?</h3>
            <span>
              <ArrowDown />
            </span>
          </summary>
          <div className='faq-answered'>
            <span>
            There are a few different reasons. Our award-winning support is always high on the list of why people move their presence to GoDaddy. Of course, our prices — including a free 1-year extension on many domain transfers — is another popular reason. And if you already have one or more of our products, transferring your domain, website or hosting to us lets you consolidate your web presence with one provider so it's easier to manage.
            </span>
          </div>
        </details>
        <details>
          <summary>
            <h3>Why use the GoDaddy Logo Maker?</h3>
            <span>
              <ArrowDown />
            </span>
          </summary>
          <div className='faq-answered'>
            <span>
            With the <a href="/">GoDaddy Logo Maker</a> it's easy to make a custom logo that'll help define your brand's personality and transform your business. From logomarks to logotypes, there are hundreds of templates to choose from. Or you can design your own in just minutes. No design skills needed.
            </span>
          </div>
        </details>

      </div>
    </div>
   </section>
  )
}

export { Faq }