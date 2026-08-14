import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');
  const [activeFAQ, setActiveFAQ] = useState(null);

  // Scroll Animation Logic (Intersection Observer)
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Form Handling
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitLead = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Thank you! Our NewCastle Infratech team will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Error connecting to the server.');
    }
  };

  // FAQ Data
  const faqs = [
    { question: "Is Suraksha Enclave a gated community?", answer: "Yes, it features a highly secure gated masterplan with a majestic iron gate entry and 24/7 security." },
    { question: "How far is the Jewar International Airport?", answer: "The project is strategically located in Jattari, offering seamless and direct connectivity to the upcoming Jewar International Airport." },
    { question: "Are bank loans available for the plots?", answer: "Absolutely. Our residential plots are pre-approved for loans from leading nationalised and private banks." }
  ];

  return (
    <div className="app-container">
      
      {/* 1. GLASSMORPHISM NAVBAR */}
      <nav className="navbar">
        <div className="navbar-brand">SURAKSHA <span>ENCLAVE</span></div>
        <div className="navbar-links">
          <a href="#overview">Overview</a>
          <a href="#masterplan">Master Plan</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Location</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="btn-gold" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          Contact Us
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="hero" id="overview">
        <div className="hero-content reveal" ref={addToRefs}>
          <h1>Suraksha Enclave Jattari</h1>
          <h2>A Premium Township Experience</h2>
          <p>Experience the perfect blend of modern infrastructure, prime connectivity near the upcoming Jewar International Airport, and premium security. Crafted for your ultimate lifestyle and future.</p>
          <div className="hero-buttons">
            <button className="btn-gold">Book A Visit</button>
            <button className="btn-outline">Download Brochure</button>
          </div>
        </div>
        <div className="hero-image reveal delay-1" ref={addToRefs}>
          <img src="/images/iron-gate.jpg" alt="Majestic iron gate entry" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="about-section reveal" ref={addToRefs}>
        <div className="section-container">
          <h2>The Vision of NewCastle Infratech</h2>
          <div className="divider"></div>
          <p>Suraksha Enclave is not just a residential project; it is a meticulously planned community designed to offer peace of mind, luxury, and outstanding investment returns. Every inch of this township is developed with sustainability and high-value architecture at its core.</p>
        </div>
      </section>

      {/* 4. VIDEO WALKTHROUGH */}
      <section className="video-section reveal" ref={addToRefs}>
        <div className="section-container">
          <h2>Project Walkthrough</h2>
          <div className="divider"></div>
          <div className="video-wrapper">
             <div className="play-button">▶</div>
             <img src="/images/site-aerial.jpg" alt="Aerial Site View" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.6' }} />
          </div>
        </div>
      </section>

      {/* 5. MASTER PLAN & LAYOUT */}
      <section className="masterplan-section" id="masterplan">
        <h2 className="reveal" ref={addToRefs}>Architectural Master Plan</h2>
        <div className="divider reveal" ref={addToRefs}></div>
        <div className="masterplan-container">
          <div className="layout-image-box reveal" ref={addToRefs}>
             <img src="/images/masterplan.jpg" alt="Site Layout Blueprint" style={{ width: '100%', borderRadius: '12px', border: '2px solid #d4af37', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
          <div className="layout-features reveal delay-1" ref={addToRefs}>
            <ul>
              <li><strong>Vastu-Compliant:</strong> Perfectly oriented plots for positive energy.</li>
              <li><strong>Zoned Spaces:</strong> Dedicated commercial and recreational zones.</li>
              <li><strong>Modern Infrastructure:</strong> Underground wiring and advanced drainage systems.</li>
              <li><strong>Grand Entry:</strong> Signature iron gate ensuring controlled and secure access.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. AMENITIES SECTION */}
      <section className="features-section">
        <h2 className="reveal" ref={addToRefs}>World-Class Amenities</h2>
        <div className="divider reveal" ref={addToRefs}></div>
        <div className="features-grid">
          <div className="feature-card reveal" ref={addToRefs}><h3>Gated Township</h3></div>
          <div className="feature-card reveal delay-1" ref={addToRefs}><h3>High Appreciation</h3></div>
          <div className="feature-card reveal delay-2" ref={addToRefs}><h3>Prime Connectivity</h3></div>
          <div className="feature-card reveal" ref={addToRefs}><h3>Wide Paved Roads</h3></div>
          <div className="feature-card reveal delay-1" ref={addToRefs}><h3>Lush Green Spaces</h3></div>
          <div className="feature-card reveal delay-2" ref={addToRefs}><h3>24/7 Security</h3></div>
        </div>
      </section>

      {/* 7. GALLERY */}
      <section className="gallery-section" id="gallery">
        <h2 className="reveal" ref={addToRefs}>Project Highlights & Renders</h2>
        <div className="divider reveal" ref={addToRefs}></div>
        <div className="gallery-grid">
          <div className="gallery-item reveal" ref={addToRefs}>
            <img src="/images/gallery-1.jpg" alt="Iron Gate Front Elevation" />
          </div>
          <div className="gallery-item reveal delay-1" ref={addToRefs}>
            <img src="/images/gallery-2.jpg" alt="Park & Landscape View" />
          </div>
          <div className="gallery-item reveal delay-2" ref={addToRefs}>
            <img src="/images/gallery-3.jpg" alt="Street View with Lighting" />
          </div>
        </div>
      </section>

      {/* 8. LOCATION SECTION */}
      <section className="location-section" id="location">
        <h2 className="reveal" ref={addToRefs}>Location & Connectivity</h2>
        <div className="divider reveal" ref={addToRefs}></div>
        <p className="reveal" ref={addToRefs}>Strategically positioned in Jattari for exponential growth.</p>
        <div className="location-content">
          <div className="location-map reveal" ref={addToRefs}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112311.14441065752!2d77.6534575!3d28.016335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c9b0e5b5b5b5b%3A0x6b0e5b5b5b5b5b5b!2sJattari%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin" 
              width="100%" height="100%" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
          <div className="location-details reveal delay-1" ref={addToRefs}>
            <ul>
              <li>Direct connectivity to Jewar International Airport</li>
              <li>Located along the Yamuna Expressway corridor</li>
              <li>Close to major educational hubs and healthcare facilities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="faq-section reveal" ref={addToRefs}>
        <h2>Frequently Asked Questions</h2>
        <div className="divider"></div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${activeFAQ === index ? 'active' : ''}`} key={index} onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}>
              <div className="faq-question">
                {faq.question}
                <span>{activeFAQ === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. PRICING SECTION */}
      <section className="pricing-section reveal" ref={addToRefs}>
        <h2>Pricing Plans</h2>
        <div className="divider"></div>
        <div className="pricing-card">
          <h3>Premium Residential Plots</h3>
          <div className="price">₹42,500 <span>/ sq. yd.</span></div>
          <p>* Bank Loan Approved | Limited Inventory</p>
          <button className="btn-gold" style={{ width: '100%' }}>Request Price Sheet</button>
        </div>
      </section>

      {/* 11. API INTEGRATED CONTACT FORM */}
      <section className="contact-section reveal" id="contact" ref={addToRefs}>
        <h2>Get In Touch</h2>
        <div className="divider"></div>
        <p>Schedule a site visit or technical pre-assessment.</p>
        <form className="contact-form" onSubmit={submitLead}>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name*" required />
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email*" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Mobile Number*" required />
          <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" placeholder="How can we help you?"></textarea>
          <button type="submit" className="btn-gold">Submit Details</button>
          {status && <p className="form-status" style={{ marginTop: '15px', color: '#d4af37', fontWeight: 'bold' }}>{status}</p>}
        </form>
      </section>

      {/* 12. FOOTER */}
      <footer>
        <p>&copy; 2026 NewCastle Infratech Pvt. Ltd. | All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;