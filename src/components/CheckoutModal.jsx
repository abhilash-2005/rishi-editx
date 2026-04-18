import { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CheckoutModal.css';

const TELEGRAM_BOT_TOKEN = "8765136828:AAFqlSzgLj1y4AeTb67H4EiSt72F14Gwm7w";
const TELEGRAM_CHAT_ID = "6282041573"; 

const CheckoutModal = ({ cart, totalAmount, onClose }) => {
  const { clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirements: '',
    driveLink: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Format order text for Telegram
    let orderText = `🚨 *NEW ORDER RECEIVED* 🚨\n\n`;
    orderText += `*Customer:* ${formData.name}\n`;
    orderText += `*Email:* ${formData.email}\n`;
    orderText += `*Total Value:* ₹${totalAmount}\n\n`;
    orderText += `📦 *Order Items:*\n`;
    
    cart.forEach((item, index) => {
      orderText += `${index + 1}. ${item.title} (Qty: ${item.quantity}) - ${item.price}\n`;
    });
    
    orderText += `\n📝 *Requirements:*\n${formData.requirements}\n\n`;
    orderText += `🔗 *Content Drive Link:*\n${formData.driveLink}\n`;
    
    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: orderText,
          parse_mode: 'Markdown'
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send order.");
      }

      setSuccess(true);
      clearCart();
    } catch (err) {
      setError('Something went wrong submitting your order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content glass-panel rgb-border">
        <button className="close-modal" onClick={onClose}>
          <X size={24} color="white" />
        </button>
        
        {success ? (
          <div className="success-state">
            <h2>🎉 Order Placed Successfully!</h2>
            <p>We've received your requirements and Google Drive link.</p>
            <p>Our team will reach out to you within 24 hours.</p>
            <button className="btn-primary rgb-border" onClick={onClose} style={{marginTop: '2rem'}}>
              Return to Catalog
            </button>
          </div>
        ) : (
          <>
            <h2>Complete Your <span className="text-gradient">Order</span></h2>
            <p className="modal-subtitle">Total: ₹{totalAmount}</p>
            
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-input" placeholder="Saptarshi Kar" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="form-input" placeholder="saptarshikar25@gmail.com" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Google Drive Link (Raw Content)</label>
                <input type="url" name="driveLink" required value={formData.driveLink} onChange={handleChange} className="form-input" placeholder="https://drive.google.com/..." />
                <small style={{color: 'var(--rgb-accent-3)', marginTop: '0.3rem', display: 'block'}}>Please make sure link sharing is turned on.</small>
              </div>
              
              <div className="form-group">
                <label>Specific Instructions / Requirements</label>
                <textarea name="requirements" required value={formData.requirements} onChange={handleChange} className="form-input" rows="4" placeholder="Tell us exactly how you want it edited..."></textarea>
              </div>
              
              <button type="submit" disabled={loading} className="btn-primary rgb-border submit-order-btn">
                {loading ? <Loader2 className="spinner" /> : <><Send size={18} /> Confirm details & Send</>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
