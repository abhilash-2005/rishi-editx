import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-wrapper container" style={{ paddingTop: '120px', marginBottom: '4rem' }}>
      <div className="section-header" style={{ textAlign: 'center' }}>
        <h1 className="section-title">Get in <span className="text-gradient">Touch</span></h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
          Have a custom project in mind? Let's create something amazing together.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info glass-panel rgb-border">
          <h2>Contact Information</h2>
          <p className="contact-desc">Fill up the form and our Team will get back to you within 24 hours.</p>
          
          <div className="info-items">
            <div className="info-item">
               <span className="info-icon" style={{fontSize: '18px'}}>👤</span>
               <span>Saptarshi Kar</span>
            </div>
            <div className="info-item">
               <Phone className="info-icon" />
               <span>+91 9883300692</span>
            </div>
            <div className="info-item">
               <Mail className="info-icon" />
               <span>saptarshikar25@gmail.com</span>
            </div>
            <div className="info-item">
               <MapPin className="info-icon" />
               <span>Gopiballavpur, Jhargram, West Bengal 721506</span>
            </div>
          </div>
          
          <div className="contact-decor rgb-border text-gradient">
             RISHI EDITX
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper glass-panel">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" className="form-input" placeholder="John Doe" />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" className="form-input" placeholder="john@example.com" />
            </div>
            
            <div className="form-group">
              <label>Service Needed</label>
              <select className="form-input">
                <option value="thumbnail">Youtube Thumbnail</option>
                <option value="video">Cinematic Video Editing</option>
                <option value="photo">Photo Retouching</option>
                <option value="poster">Wedding Poster Album</option>
                <option value="psd">Custom PSD</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-input" rows="4" placeholder="Tell us about your project..."></textarea>
            </div>
            
            <button type="submit" className="submit-btn rgb-border">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
