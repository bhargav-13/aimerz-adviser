import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
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

  return (
    <div className="about">
      <div className="container">
        <section className="about-hero-split">
          <div className="about-hero-grid">
            <h1 className="about-hero-title">Your Trusted Partner in Corporate Transformation</h1>
            <p className="about-hero-copy">
              At Aimerz Advisors, we believe that true business growth goes beyond numbers — it’s built on vision, trust, and execution. We are a modern corporate advisory firm that helps startups, enterprises, and institutions navigate complex markets with confidence. From IPOs and valuations to mergers, compliance, and fundraising, we deliver end-to-end solutions that simplify challenges and unlock new opportunities. With a proven track record, a strong global investor network, and a passion for innovation, we don’t just advise — we partner with you throughout the journey, helping you scale and emerge as a market leader.
            </p>
          </div>
        </section>

      

        {/* About - Why Choose style section */}
        <section className="about-why">
          <div className="container">
            <div className="about-why-content">
              <div className="about-why-text">
                <h2 className="about-why-title">Behind Aimerz Advisors</h2>
                <p className="about-why-description">
                Aimerz Advisors Private Limited is a premier corporate advisory firm specializing in business consulting, financial structuring, capital market strategies, startup advisory, and due diligence services.<br /><br />
                We empower businesses with tailor-made solutions that drive market expansion, regulatory compliance, financial optimization, and investment readiness. Our expertise spans across ₹100+ Crore corporate transactions with a proven track record of delivering exceptional results.
                </p>
                <div className="about-why-features">
                  <div className="about-why-pill">Corporate Advisory</div>
                  <div className="about-why-pill">Capital Markets</div>
                  <div className="about-why-pill">Due Diligence</div>
                  <div className="about-why-pill">M&A Advisory</div>
                </div>
              </div>
              <div className="about-why-image">
                <img src="/Meeting.jpg" alt="Team Meeting" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="vision-mission">
          <div className="container">
            <div className="vision-mission-header">
              <h2 className="vision-mission-title">Our Vision & Mission</h2>
            </div>
            <div className="vision-mission-cards">
              <div className="vision-card">
                <div className="vision-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="card-title">Vision</h3>
                <p className="card-description">
                  To become the most trusted corporate advisory partner, pioneering financial strategies that empower businesses to achieve sustainable growth, global reach, and long-term market leadership.
                </p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="card-title">Mission</h3>
                <p className="card-description">
                  Our mission is to make business growth easier by providing clear financial, regulatory, and strategic solutions. From startups to big companies, we help organizations raise funds, stay compliant, and expand with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Strengths Section */}
        <section className="our-strengths">
          <div className="container">
            <div className="strengths-header">
              <h2 className="strengths-title">The Aimerz Edge</h2>
              <p className="strengths-description">
                Our proven methodology ensures exceptional outcomes for every engagement.
              </p>
            </div>
            <div className="strengths-grid">
              <div className="strength-card">
                <div className="strength-icon">
                  <span className="step-number">1</span>
                </div>
                <h3>Deep-Dive<br />Analysis</h3>
                <p>Comprehensive business analysis & market research</p>
              </div>
              
              <div className="strength-card">
                <div className="strength-icon">
                  <span className="step-number">2</span>
                </div>
                <h3>Bespoke<br />Strategy</h3>
                <p>Custom-tailored strategy development</p>
              </div>
              
              <div className="strength-card">
                <div className="strength-icon">
                  <span className="step-number">3</span>
                </div>
                <h3>Regulatory Execution</h3>
                <p>Custom-tailored strategy development</p>
              </div>
              
              <div className="strength-card">
                <div className="strength-icon">
                  <span className="step-number">4</span>
                </div>
                <h3>Stakeholder Engagement</h3>
                <p>Investor & stakeholder management</p>
              </div>

              <div className="strength-card">
                <div className="strength-icon">
                  <span className="step-number">5</span>
                </div>
                <h3>Growth Optimization</h3>
                <p>Operational efficiency improvements</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Story Behind Aimerz Section */}
        <section className="story-behind">
          <div className="container">
            <div className="story-header">
              <h2 className="story-title">The Story Behind Aimerz</h2>
              <p className="story-description">
              Aimerz Advisors was founded on the belief that every business, whether a startup or an established enterprise, deserves clear and trusted guidance to achieve sustainable growth.
              </p>
            </div>

            <div className="story-content story-content--first">
              <div className="story-photo">
                <img src="WhatsApp Image 2025-11-21 at 21.41.11_8daf4eff.jpg" alt="Founder portrait" />
              </div>

              <div className="story-quote story-quote--first">
                <div className="quote-header quote-header--first">
                  <img className="quote-avatar quote-avatar--first" src="/WhatsApp Image 2025-11-21 at 21.41.11_8daf4eff.jpg" alt="Milan Shakhiya" />
                  <div className="quote-meta quote-meta--first">
                    <div className="quote-name quote-name--first">Milan Shakhiya</div>
                    <div className="quote-role quote-role--first"><i>Director,</i> <span>Aimerz Advisors</span></div>
                  </div>
                </div>
                <blockquote className="quote-text quote-text--first">
                  "We started Aimerz Advisors with a simple belief — every business, big or small, deserves the right guidance to grow with confidence."
                </blockquote>
              </div>
            </div>

            {/* Second section: reversed layout with alternate text styling */}
            <div className="story-content reverse story-content--second">
              <div className="story-quote story-quote--second">
                <div className="quote-header quote-header--second">
                  <div className="quote-meta quote-meta--second">
                    <div className="quote-name quote-name--second">Nirav Vekariya</div>
                    <div className="quote-role quote-role--second"><i>Director,</i> <span>Aimerz Advisors</span></div>
                  </div>
                  <img className="quote-avatar quote-avatar--second" src="/nirav.jpg" alt="Nirav" />
                </div>
                
                <blockquote className="quote-text quote-text--second">
                  "Your success is our mission — with the right strategy and execution, growth becomes inevitable."
                </blockquote>
              </div>

              <div className="story-photo">
                <img src="/nirav.jpg" alt="Founder portrait" />
              </div>
            </div>
          </div>
        

          <div className="story-content story-content--first">
              <div className="story-photo">
                <img src="/janvi.jpeg" alt="Founder portrait" />
              </div>

              <div className="story-quote story-quote--first">
                <div className="quote-header quote-header--first">
                  <img className="quote-avatar quote-avatar--first" src="/janvi.jpeg" alt="Janvi" />
                  <div className="quote-meta quote-meta--first">
                    <div className="quote-name quote-name--first">Janvi Davda</div>
                    <div className="quote-role quote-role--first"><i>Director,</i> <span>Aimerz Advisors</span></div>
                  </div>
                </div>
                <blockquote className="quote-text quote-text--first">
                  "We started Aimerz Advisors with a simple belief — every business, big or small, deserves the right guidance to grow with confidence."
                </blockquote>
              </div>
            </div>
          </section>
        </div> 

        {/* Unlock Your Growth (from Home) */}
        <section className="cta-banner2">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Unlock Your Growth</h2>
            <p className="cta-subtitle">
              Partner with Aimerz Advisors and leverage our expertise to maximize corporate value,
              achieve unparalleled market positioning, and unlock new business opportunities.
            </p>
            <button className="why-choose-button5" onClick={handleContactClick}>
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

export default About;
