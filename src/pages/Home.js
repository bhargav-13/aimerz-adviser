import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const whyChooseRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section === 'why-choose' && whyChooseRef.current) {
      whyChooseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.search]);

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

  const handleLearnMoreClick = () => {
    navigate('/why-choose');
  };

  const testimonials = [
    {
      text: "Partnering with Aimerz Advisors transformed our IPO journey. Their end-to-end support, from compliance to investor relations, ensured a smooth listing process. The team's expertise gave us confidence at every stage.",
      name: "Mr. Rajesh Mehta",
      position: "CEO, Shreeji Auto Components Pvt. Ltd."
    },
    {
      text: "We engaged Aimerz Advisors for financial and legal due diligence before a major acquisition. Their comprehensive analysis highlighted risks we hadn't considered and saved us from a costly mistake. Truly a trusted partner.",
      name: "Ms. Anjali Deshpande",
      position: "Director, GreenLeaf FMCG Ltd."
    },
    {
      text: "As a startup, navigating fundraising and compliance felt overwhelming. Aimerz Advisors guided us through incorporation, Startup India registration, and investor outreach. Their mentorship helped us secure our first funding round.",
      name: "Mr. Arjun Nair",
      position: "Founder & CEO, FinXPay Technologies"
    },
    {
      text: "Aimerz Advisors helped restructure our operations and improve capital allocation. Their bespoke strategies not only reduced costs but also improved efficiency across departments. We saw measurable growth within months.",
      name: "Mr. Kunal Shah",
      position: "CFO, Nova Retail Chain Pvt. Ltd."
    },
    {
      text: "We worked with Aimerz Advisors on private equity fundraising. Their deep understanding of investor expectations and regulatory frameworks helped us close the deal faster and on better terms. Their network and expertise are unmatched.",
      name: "Ms. Priya Malhotra",
      position: "Managing Partner, Zenith Capital Advisors LLP"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Advisory Beyond<br />
                Numbers, Growth<br />
                Beyond Limits
              </h1>
              <div className="hero-services">
                Corporate Advisory | Capital Markets | Business Transformation |<br />
                Startup Services | Due Diligence & Valuation
              </div>
              <button className="cta-button" onClick={handleContactClick}>Unlock Your Growth</button>
            </div>
            <div className="hero-image">
              <img src="/Hero Img.jpg" alt="Professional Consulting" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="core-services">
        <div className="container">
          <div className="services-header">
            <h2 className="services-title">Our Core Services</h2>
            <p className="services-subtitle">
              Comprehensive corporate advisory solutions designed to drive business transformation and sustainable growth.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-background">
                <img src="/Vector.svg" alt="Background Pattern" />
              </div>
              <div className="service-icon">
                <img src="/Fame-icon.svg" alt="Service Icon" />
              </div>
              <h3>IPO & Capital Markets</h3>
              <p>Take your company public with confidence. From IPO readiness and SEBI compliance to fundraising strategies and investor engagement, we provide complete capital market solutions.</p>
            </div>
            
            <div className="service-card">
              <div className="service-background">
                <img src="/Vector.svg" alt="Background Pattern" />
              </div>
              <div className="service-icon">
                <img src="/Fame-icon.svg" alt="Service Icon" />
              </div>
              <h3>Due Diligence & Valuation</h3>
              <p>Make smarter business decisions backed by data. We deliver financial, legal, tax, and operational due diligence along with transparent valuations to ensure every deal is risk-free and future-ready.</p>
            </div>
            
            <div className="service-card">
              <div className="service-background">
                <img src="/Vector.svg" alt="Background Pattern" />
              </div>
              <div className="service-icon">
                <img src="/Fame-icon.svg" alt="Service Icon" />
              </div>
              <h3>Mergers & Acquisitions (M&A)</h3>
              <p>We simplify complex deals. Whether it's mergers, takeovers, or cross-border acquisitions, our team handles strategy, structuring, compliance, and execution for seamless growth.</p>
            </div>
            
            <div className="service-card">
              <div className="service-background">
                <img src="/Vector.svg" alt="Background Pattern" />
              </div>
              <div className="service-icon">
                <img src="/Fame-icon.svg" alt="Service Icon" />
              </div>
              <h3>Startup Services</h3>
              <p>From incorporation to scaling, we empower startups with end-to-end support — fundraising, strategy, compliance, IP protection, and global market entry.</p>
            </div>
            
            <div className="service-card">
              <div className="service-background">
                <img src="/Vector.svg" alt="Background Pattern" />
              </div>
              <div className="service-icon">
                <img src="/Fame-icon.svg" alt="Service Icon" />
              </div>
              <h3>Corporate Finance & Restructuring</h3>
              <p>Unlock efficiency and financial stability. We assist with business transformation, debt restructuring, refinancing, and capital allocation optimization.</p>
            </div>
            
            <div className="service-card">
              <div className="service-background">
                <img src="/Vector.svg" alt="Background Pattern" />
              </div>
              <div className="service-icon">
                <img src="/Fame-icon.svg" alt="Service Icon" />
              </div>
              <h3>Risk, Compliance & Governance</h3>
              <p>Stay compliant and secure. We provide SEBI, RBI, FEMA, and tax advisory services, along with governance frameworks that strengthen trust and transparency.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="why-choose" ref={whyChooseRef} id="why-choose">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2 className="why-choose-title">Why Choose Aimerz Advisors?</h2>
              <p className="why-choose-description">
                We empower businesses with tailor-made solutions that drive market expansion, regulatory compliance, financial optimization, and investment readiness.
              </p>
              <div className="why-choose-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/Right-icon.svg" alt="Check Icon" />
                  </div>
                  <span>₹100+ Crore Transaction Expertise</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/Right-icon.svg" alt="Check Icon" />
                  </div>
                  <span>End-to-End IPO Solutions</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/Right-icon.svg" alt="Check Icon" />
                  </div>
                  <span>Global Investor Network</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <img src="/Right-icon.svg" alt="Check Icon" />
                  </div>
                  <span>Custom-Tailored Strategies</span>
                </div>
              </div>
              <button className="why-choose-button3" onClick={handleLearnMoreClick}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="button-arrow2">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="about-why-image">
              <img src="/Why-choose.jpg" alt="Professional Advisory Team" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="strengths">
        <div className="container">
          <div className="strengths-grid">
            <div className="strength-card">
              <div className="strength-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21H21L19 19H5L3 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 21V7L12 3L19 7V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 13H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 17H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Global Network</h3>
              <p>Institutional investors<br />worldwide</p>
            </div>
            
            <div className="strength-card">
              <div className="strength-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 10H16L14 6H10L8 10H6L8 18H16L18 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Custom Solutions</h3>
              <p>Tailored strategies for<br />success</p>
            </div>
            
            <div className="strength-card">
              <div className="strength-icon">
                <img src="/Fame-icon.svg" alt="Proven Results" />
              </div>
              <h3>Proven Results</h3>
              <p>100+ Crore<br />transactions</p>
            </div>
            
            <div className="strength-card">
              <div className="strength-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Expert Team</h3>
              <p>Seasoned<br />professionals</p>
            </div>
          </div>
        </div>
      </section>
  
      
      <section className="vision-mission">
        <div className="container">
          <div className="vision-mission-header">
            <h2 className="vision-mission-title">Our Vision & Mission</h2>
          </div>
          <div className="vision-mission-cards">
            <div className="vision-card">
              <h3 className="card-title">Vision</h3>
              <p className="card-description">
                To be the most trusted corporate advisory firm, pioneering financial strategies that fuel sustainable business growth and market leadership.
              </p>
            </div>
            <div className="mission-card">
              <h3 className="card-title">Mission</h3>
              <p className="card-description">
                Deliver high-impact financial and regulatory solutions, unlock capital markets, and enable businesses to scale globally with end-to-end execution.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <p className="testimonials-title">What Our Clients Say</p>
          <p className="testimonials-subtitle">Trusted by industry leaders across sectors</p>
          
          <div className="testimonials-slider">
            <button className="testimonial-nav prev" onClick={prevTestimonial} aria-label="Previous testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="testimonial-card">
              <div className="testimonial-quote-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity="0.1">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
              <div className="testimonial-author">
                <p className="testimonial-name">{testimonials[currentTestimonial].name}</p>
                <p className="testimonial-position">{testimonials[currentTestimonial].position}</p>
              </div>
            </div>

            <button className="testimonial-nav next" onClick={nextTestimonial} aria-label="Next testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
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
            <div className="footer-copy">Copyright 2026 – Aimerz Advisors All rights reserved</div>
            <div className="footer-powered">Powered by <a href="https://www.codelixitsolutions.com/" target="_blank" rel="noopener noreferrer">Codelix IT Solutions Pvt. Ltd.</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Home;
