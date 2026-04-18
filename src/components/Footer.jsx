import { Heart, MessageCircle, PlaySquare, Image } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container glass-panel footer-content rgb-border-footer">
        <div className="footer-brand">
          <h2 className="text-gradient">RISHI EDITX</h2>
          <p className="footer-desc">Professional editing services tailored for your unique needs. Video, photo, and everything in between.</p>
        </div>
        <div className="footer-socials">
          <a href="#" className="social-icon" title="YouTube"><PlaySquare size={20} /></a>
          <a href="https://instagram.com/rishi_editx_official" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram"><Image size={20} /></a>
          <a href="#" className="social-icon" title="Twitter"><MessageCircle size={20} /></a>
        </div>
        <div className="footer-bottom">
          <p>Created with <Heart size={14} color="#ff007f" className="heart-icon"/> by RISHI EDITX © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
