import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
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

  const services = [
    {
      id: 1,
      title: "Business Strategy",
      description: "Comprehensive strategic planning to help your business grow and compete effectively in the market.",
      features: ["Market Analysis", "Competitive Research", "Growth Planning", "Risk Assessment"]
    },
    {
      id: 2,
      title: "Financial Advisory",
      description: "Expert financial guidance to optimize your business performance and ensure sustainable growth.",
      features: ["Financial Planning", "Investment Strategy", "Budget Management", "Financial Analysis"]
    },
    {
      id: 3,
      title: "Digital Transformation",
      description: "Modernize your business operations with cutting-edge technology solutions and digital strategies.",
      features: ["Technology Assessment", "Digital Strategy", "Process Automation", "Change Management"]
    },
    {
      id: 4,
      title: "Operations Consulting",
      description: "Streamline your operations for maximum efficiency and productivity across all business functions.",
      features: ["Process Optimization", "Supply Chain Management", "Quality Improvement", "Cost Reduction"]
    }
  ];

  return (
    <div className="services">
        {/* Core Advisory Services (first section) */}
        <section className="core-advisory">
          <div className="core-header">
            <h2 className="core-title">Core Advisory Services</h2>
            <p className="core-subtitle">Expertise across the complete spectrum of corporate finance and regulatory <br></br>advisory.</p>
          </div>

          <div className="core-grid">
            <div className="core-card">
              <div className="core-icon">📈</div>
              <h3 className="core-card-title">IPO, FPO, QIP, OFS & Stock Market Listing</h3>
              <p className="core-card-desc">Comprehensive capital market solutions from pre-IPO readiness to successful market listing.</p>
              <ul className="core-list">
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" /> Initial Public Offering (IPO)</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Follow-on Public Offering (FPO)</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Offer for Sale</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />SME & Main Board Listing</li>
              </ul>
            </div>

            <div className="core-card">
              <div className="core-icon">🧾</div>
              <h3 className="core-card-title">Due Diligence & Business Valuation</h3>
              <p className="core-card-desc">Comprehensive assessment and valuation services ensuring informed investment decisions.</p>
              <ul className="core-list">
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Business Valuation & Financial Modeling</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Financial Due Diligence</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Operational Due Diligence</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />SME & Main Board Listing</li>
              </ul>
            </div>

            <div className="core-card">
              <div className="core-icon">📊</div>
              <h3 className="core-card-title">Mergers & Acquisitions (M&A)</h3>
              <p className="core-card-desc">Strategic M&A advisory for seamless business integration and value creation.</p>
              <ul className="core-list">
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Merger & Amalgamation Strategy</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Takeovers</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Cross-Border Acquisitions</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Deal Structuring & Negotiation</li>
              </ul>
            </div>

            <div className="core-card">
              <div className="core-icon">🏦</div>
              <h3 className="core-card-title">FEMA & NBFC Compliance</h3>
              <p className="core-card-desc">Expert regulatory compliance for foreign exchange and finance institution requirements.</p>
              <ul className="core-list">
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Foreign Exchange Compliance</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />FEMA Filings & RBI Approvals</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />NBFC Licensing & Advisory</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Regulatory Structuring Solutions</li>
              </ul>
            </div>

            <div className="core-card">
              <div className="core-icon">💼</div>
              <h3 className="core-card-title">Private Equity & Investment Structuring</h3>
              <p className="core-card-desc">Strategic fundraising and investment structuring for optimal capital deployment.</p>
              <ul className="core-list">
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Private Equity Fundraising</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Investment Deal Structuring</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Investor Relations Management</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Fund Deployment Strategy</li>
              </ul>
            </div>

            <div className="core-card">
              <div className="core-icon">🚀</div>
              <h3 className="core-card-title">Startup Services</h3>
              <p className="core-card-desc">Comprehensive assessment and valuation services ensuring informed investment decisions.</p>
              <ul className="core-list">
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Company Incorporation & Compliance</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Startup India Registration</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Fundraising & Investor Relations</li>
                <li><img className="bullet-icon" src="/Right-icon.svg" alt="" />Business Model Development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Corporate Actions + Risk, Compliance & Governance */}
        <section className="actions-governance">
          <div className="ag-grid">
            <div className="ag-left">
              <h2 className="ag-title">Corporate Actions</h2>
              <p className="ag-subtitle">
                Strategic corporate restructuring and capital optimization solutions designed to enhance
                shareholder value and market positioning.
              </p>
              <div className="ag-cards">
                <div className="ag-card">Bouns & Rights Issue</div>
                <div className="ag-card">Preferential Allotments</div>
                <div className="ag-card">Buyback of Securities</div>
                <div className="ag-card">Delisting & Reverse Listing</div>
              </div>
            </div>
            <div className="ag-right">
              <h2 className="ag-title">Risk, Compliance & Governance</h2>
              <p className="ag-subtitle">
                Comprehensive regulatory compliance and governance advisory ensuring full transparency and
                risk mitigation across all business operations.
              </p>
              <ul className="ag-list">
                <li className="ag-item">
                  <span className="ag-icon-box"><img className="ag-item-icon" src="/Right-icon.svg" alt="" /></span>
                  SEBI, RBI, FEMA Compliance
                </li>
                <li className="ag-item">
                  <span className="ag-icon-box"><img className="ag-item-icon" src="/Right-icon.svg" alt="" /></span>
                  Tax Planning & GST Advisory
                </li>
                <li className="ag-item">
                  <span className="ag-icon-box"><img className="ag-item-icon" src="/Right-icon.svg" alt="" /></span>
                  Corporate Governance
                </li>
                <li className="ag-item">
                  <span className="ag-icon-box"><img className="ag-item-icon" src="/Right-icon.svg" alt="" /></span>
                  Internal Audit Support
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Clients & Industry Expertise */}
        <section className="clients-expertise">
          <div className="ce-header">
            <h2 className="ce-title">Industry Expertise</h2>
            <p className="ce-subtitle">Serving diverse industries with specialized knowledge and proven track record.</p>
          </div>
          <div className="ce-grid">
            <div className="ce-card">
              <div className="ce-icon">🏢</div>
              <h3 className="ce-card-title">Large Corporations & MNCs</h3>
              <p className="ce-card-desc">Comprehensive business analysis & market research</p>
            </div>
            <div className="ce-card">
              <div className="ce-icon">📈</div>
              <h3 className="ce-card-title">IPO-Focused Enterprises</h3>
              <p className="ce-card-desc">Custom-tailored strategy development</p>
            </div>
            <div className="ce-card">
              <div className="ce-icon">🚀</div>
              <h3 className="ce-card-title">High-Growth Startups</h3>
              <p className="ce-card-desc">Custom-tailored strategy development</p>
            </div>
            <div className="ce-card">
              <div className="ce-icon">🌐</div>
              <h3 className="ce-card-title">Financial Institutions</h3>
              <p className="ce-card-desc">Investor & stakeholder management</p>
            </div>
          </div>
        </section>
        

        <section className="cta-banner2">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Unlock Your Growth</h2>
            <p className="cta-subtitle">
              Partner with Aimerz Advisors and leverage our expertise to maximize corporate value,
              achieve unparalleled market positioning, and unlock new business opportunities.
            </p>
            <button className="why-choose-button4" onClick={handleContactClick}>
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

export default Services;
