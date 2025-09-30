import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ImageUpload from '../components/ImageUpload';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [inquiryData, setInquiryData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    service: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInquiryChange = (e) => {
    setInquiryData({
      ...inquiryData,
      [e.target.name]: e.target.value
    });
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const {
      firstName,
      lastName,
      company,
      email,
      service,
      phone,
      message,
    } = inquiryData;

    const fullName = [firstName, lastName].filter(Boolean).join(' ');
    const lines = [
      `New inquiry from Aimerz Advisors contact page`,
      `Name: ${fullName || 'N/A'}`,
      `Company: ${company || 'N/A'}`,
      `Email: ${email || 'N/A'}`,
      `Phone: ${phone || 'N/A'}`,
      `Service: ${service || 'N/A'}`,
      `Message: ${message || 'N/A'}`,
    ];

    const text = encodeURIComponent(lines.join('\n'));
    // WhatsApp expects international format without + or spaces
    const whatsappNumber = '918000044487';
    const waUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Open WhatsApp chat (new tab where available)
    window.open(waUrl, '_blank');

    // Optionally inform the user and reset the form
    // alert('Redirecting you to WhatsApp to send your message.');
    setInquiryData({ firstName: '', lastName: '', company: '', email: '', service: '', phone: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="container">
        <section className="contact-top">
          <h1 className="contact-top-title">Contact Aimerz Advisors</h1>
          <p className="contact-top-subtitle">Ready to transform your business? Get in touch with our expert advisory team for a strategic consultation tailored to your needs.</p>
          <div className="contact-top-grid">
            <div className="contact-top-card">
              <div className="contact-top-icon" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.15a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.6.63A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-top-label">Call us:</div>
              <div className="contact-top-value">
                <a href="tel:+918000044487" className="phone-link">(+91) 80000 44487</a>
              </div>
            </div>
            <div className="contact-top-card">
              <div className="contact-top-icon" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-top-label">Email:</div>
              <div className="contact-top-value">
                <a href="https://mail.google.com/mail/?view=cm&to=aimerzadvisors@gmail.com" target="_blank" rel="noopener noreferrer" className="email-link">aimerzadvisors@gmail.com</a>
              </div>
            </div>
            <div className="contact-top-card">
              <div className="contact-top-icon" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21s-7-6.58-7-11a7 7 0 1 1 14 0c0 4.42-7 11-7 11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="contact-top-label">Address:</div>
              <div className="contact-top-value">
                <a href="https://www.google.com/maps/search/?api=1&query=Office+No.+1116%2C+R.K.+Supreme%2C+Opp.+Twin+Star%2C+Nana+Mava+Circle%2C+150+Feet+Ring+Road%2C+Rajkot+360004+Gujarat+Bharat" target="_blank" rel="noopener noreferrer" className="location-link">Office No. 1116, R.K. Supreme, Opp. Twin Star, Nana Mava Circle, 150 Feet Ring Road, Rajkot – 360004 (Gujarat) Bharat</a>
              </div>
            </div>
          </div>
        </section>
        
        {/* New Inquiry Section matching provided design */}
        <section className="contact-inquiry">
          <div className="inquiry-grid">
            <div className="inquiry-form">
              <p className="inquiry-title">Send us a Message</p>
              <p className="inquiry-subtitle">Fill out the form below and our team will get back to you within 24 hours.</p>
              <form onSubmit={handleInquirySubmit} className="inquiry-form-body">
                <div className="inquiry-row two">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name*</label>
                    <input id="firstName" name="firstName" type="text" value={inquiryData.firstName} onChange={handleInquiryChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name*</label>
                    <input id="lastName" name="lastName" type="text" value={inquiryData.lastName} onChange={handleInquiryChange} required />
                  </div>
                </div>
                <div className="inquiry-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" value={inquiryData.company} onChange={handleInquiryChange} />
                  </div>
                </div>
                <div className="inquiry-row">
                  <div className="form-group">
                    <label htmlFor="inquiryEmail">Email*</label>
                    <input id="inquiryEmail" name="email" type="email" value={inquiryData.email} onChange={handleInquiryChange} required />
                  </div>
                </div>
                <div className="inquiry-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Required*</label>
                    <select id="service" name="service" value={inquiryData.service} onChange={handleInquiryChange} required>
                      <option value="" disabled>Select a service</option>
                      <option value="strategy">Strategy Consulting</option>
                      <option value="operations">Operations Optimization</option>
                      <option value="finance">Financial Advisory</option>
                      <option value="tech">Technology & Digital</option>
                    </select>
                  </div>
                </div>
                <div className="inquiry-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone*</label>
                    <input id="phone" name="phone" type="tel" value={inquiryData.phone} onChange={handleInquiryChange} required />
                  </div>
                </div>
                <div className="inquiry-row">
                  <div className="form-group">
                    <label htmlFor="inquiryMessage">Message</label>
                    <textarea id="inquiryMessage" name="message" rows="5" value={inquiryData.message} onChange={handleInquiryChange}></textarea>
                  </div>
                </div>
                <button type="submit" className="inquiry-submit">Send Message</button>
              </form>
            </div>
            <aside className="inquiry-aside">
              <div className="info-card">
                <div className="info-card-header">
                  <p>Office Hours</p>
                </div>
                <div className="info-card-body">
                  <div className="hours-row"><span>Monday - Friday</span><span>10:00 AM - 7:00 PM</span></div>
                  <div className="hours-row"><span>Saturday</span><span>10:00 AM - 1:00 PM</span></div>
                  <div className="hours-row"><span>Sunday</span><span>Closed</span></div>
                </div>
              </div>
              <div className="info-card">
                <div className="info-card-header">
                  <p>Our Location</p>
                </div>
                <div className="info-card-body">
                  <p className="location-sub">Strategically located in the heart of Rajkot's commercial hub.</p>
                  <div className="map-wrapper">
                    <iframe
                      title="Aimerz Advisors Location Map"
                      className="location-map"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=RK%20Supreme%2C%20150%20Feet%20Ring%20Rd%2C%20near%20Nana%20Mauva%2C%20Padmi%20Society%2C%20Mavdi%2C%20Rajkot%2C%20Gujarat%20360005&output=embed">
                    </iframe>
                    <a
                      className="map-overlay"
                      href="https://www.google.com/maps/search/?api=1&query=RK%20Supreme%2C%20150%20Feet%20Ring%20Rd%2C%20near%20Nana%20Mauva%2C%20Padmi%20Society%2C%20Mavdi%2C%20Rajkot%2C%20Gujarat%20360005"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open address in Google Maps"
                    />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section> 
      </div>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-bar">
                <div className="footer-brand-badge">A</div>
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

export default Contact;

