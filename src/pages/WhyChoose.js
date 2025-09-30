import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './WhyChoose.css';

const WhyChoose = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
    // Scroll to the form section after navigation
    setTimeout(() => {
      const formElement = document.querySelector('.inquiry-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const cards = [
    {
      id: 1,
      icon: '🏅',
      title: 'Expertise in ₹50+ Crore Transactions',
      description:
        'Proven track record in handling large-scale corporate transactions with exceptional execution.'
    },
    {
      id: 2,
      icon: '🏅',
      title: 'End-to-End Capital Market Solutions',
      description:
        'Comprehensive IPO, FPO, and capital market advisory from strategy to successful listing.'
    }
  ];
  const moreCards = [
    {
      id: 3,
      icon: '🏅',
      title: 'Custom-Tailored Strategies',
      description:
        'Bespoke business transformation solutions designed specifically for your unique requirements.'
    },
    {
      id: 4,
      icon: '🏅',
      title: 'Global Network of Investors',
      description:
        'Extensive network of institutional investors and market leaders worldwide for optimal deal sourcing.'
    }
  ];
  const finalCards = [
    {
      id: 5,
      icon: '🛡️',
      title: 'Seasoned Advisory Team',
      description:
        'Experienced professionals with deep industry knowledge and proven success across sectors.'
    },
    {
      id: 6,
      icon: '🛡️',
      title: 'Comprehensive Regulatory Advisory',
      description:
        'Expert legal, financial, and regulatory compliance ensuring seamless transaction execution.'
    }
  ];

  return (
    <div className="why-choose">
      
        <section className="competitive-advantages">
          <div className="advantages-header">
            <h2 className="advantages-title">Our Competitive Advantages</h2>
            <p className="advantages-subtitle">
              Distinct capabilities that set us apart in the corporate advisory landscape.
            </p>
          </div>

          <div className="advantages-row">
            <div className="advantages-stack">
              {cards.map((card) => (
                <div key={card.id} className="advantage-card pattern">
                  <div className="advantage-icon">{card.icon}</div>
                  <h3 className="advantage-title">{card.title}</h3>
                  <p className="advantage-description">{card.description}</p>
                </div>
              ))}
            </div>
            <div className="advantages-photo">
              <img src="/Rectangle 54.jpg" alt="Advisory team collaborating" className="advantage-image" />
            </div>
          </div>

          <div className="advantages-row reverse">
            <div className="advantages-stack">
              {moreCards.map((card) => (
                <div key={card.id} className="advantage-card pattern">
                  <div className="advantage-icon">{card.icon}</div>
                  <h3 className="advantage-title">{card.title}</h3>
                  <p className="advantage-description">{card.description}</p>
                </div>
              ))}
            </div>
            <div className="advantages-photo">
              <img src="/Rectangle 55.jpg" alt="Strategy discussion" className="advantage-image" />
            </div>
          </div>

          <div className="advantages-row">
            <div className="advantages-stack">
              {finalCards.map((card) => (
                <div key={card.id} className="advantage-card pattern">
                  <div className="advantage-icon">{card.icon}</div>
                  <h3 className="advantage-title">{card.title}</h3>
                  <p className="advantage-description">{card.description}</p>
                </div>
              ))}
            </div>
            <div className="advantages-photo">
              <img src="/Rectangle 56.jpg" alt="Team collaboration" className="advantage-image" />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="testimonials-header">
            <h2 className="testimonials-title">Aimerz Advisors's Clients</h2>
          </div>
          <div className="testimonials-grid">
            <article className="testimonial-card">
              <h3 className="testimonial-heading">Aimerz turned our IPO dream into reality with seamless execution and unmatched expertise.</h3>
              <p className="testimonial-body">Their team guided us through every stage from regulatory filings to investor outreach with clarity and precision. The process was smooth, professional, and delivered results beyond our expectations. Partnering with Aimerz was the best decision we made for our company’s future.</p>
              <div className="testimonial-footer">
                <img className="avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rajesh Kumar" />
                <div className="author">
                  <div className="name">Rajesh Kumar</div>
                  <div className="role">CEO, Techcrop Industries</div>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <h3 className="testimonial-heading">Professional, reliable, and results-driven — Aimerz Advisors sets the benchmark.</h3>
              <p className="testimonial-body">Their team guided us through every stage from regulatory filings to investor outreach with clarity and precision. The process was smooth, professional, and delivered results beyond our expectations. Partnering with Aimerz was the best decision we made for our company’s future.</p>
              <div className="testimonial-footer">
                <img className="avatar" src="https://randomuser.me/api/portraits/men/15.jpg" alt="Mahesh Kumar" />
                <div className="author">
                  <div className="name">Mahesh Kumar</div>
                  <div className="role">CEO, Techcrop Industries</div>
                </div>
              </div>
            </article>
            <article className="testimonial-card">
              <h3 className="testimonial-heading">They don’t just advise—they walk the journey with you</h3>
              <p className="testimonial-body">Their team guided us through every stage from regulatory filings to investor outreach with clarity and precision. The process was smooth, professional, and delivered results beyond our expectations. Partnering with Aimerz was the best decision we made for our company’s future.</p>
              <div className="testimonial-footer">
                <img className="avatar" src="https://randomuser.me/api/portraits/men/54.jpg" alt="Ranjit Kumar" />
                <div className="author">
                  <div className="name">Ranjit Kumar</div>
                  <div className="role">CEO, Techcrop Industries</div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="cta-banner">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Unlock Your Growth</h2>
            <p className="cta-subtitle">
              Partner with Aimerz Advisors and leverage our expertise to maximize corporate value,
              achieve unparalleled market positioning, and unlock new business opportunities.
            </p>
            <button className="why-choose-button3" onClick={handleContactClick}>
              Contact
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="button-arrow2">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <div className="footer-brand-bar">
                  <div className="footer-brand-badge">
                    <img src="/Group 48096821.svg" alt="Aimerz Advisors Logo" />
                  </div>
                  <div className="footer-brand-lines">
                    <div className="footer-brand-line1">AIMERZ ADVISORS</div>
                    <div className="footer-brand-line2">PRIVATE LIMITED</div>
                  </div>
                </div>
                <p className="brand-desc">
                  Premier corporate advisory firm specializing in business consulting,
                  financial structuring, and capital market strategies.
                </p>
              </div>

              <div className="footer-col">
                <h4 className="footer-title">Services</h4>
                <ul className="footer-list">
                  <li>IPO & Capital Markets</li>
                  <li>Due Diligence</li>
                  <li>M&A Advisory</li>
                  <li>Startup Services</li>
                  <li>Compliance</li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-list">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                <li><Link to="/why-choose">Why Choose</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-title">Get in touch</h4>
                <ul className="footer-contact">
                  <li>Phone: <a href="tel:+918000044487">+91 80000 44487</a></li>
                  <li>Email: <a href="https://mail.google.com/mail/?view=cm&to=aimerzadvisors@gmail.com" target="_blank" rel="noopener noreferrer">aimerzadvisors@gmail.com</a></li>
                  <li>
                    Location: <a href="https://www.google.com/maps/search/?api=1&query=Office+No.+1116%2C+R.K.+Supreme%2C+Opp.+Twin+Star%2C+Nana+Mava+Circle%2C+150+Feet+Ring+Road%2C+Rajkot+360004+Gujarat+Bharat" target="_blank" rel="noopener noreferrer">Office No. 1116, R.K. Supreme, Opp. Twin Star, Nana Mava Circle, 150 Feet Ring Road, Rajkot – 360004 (Gujarat) Bharat</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
              <div className="footer-copy">Copyright 2025 – Aimerz Advisors All rights reserved</div>
              <div className="footer-powered">Powered by <a href="https://www.codelix.in/" target="_blank" rel="noopener noreferrer">Codelix IT Solutions Pvt. Ltd.</a></div>
            </div>
          </div>
        </footer>
      
    </div>
  );
};

export default WhyChoose;