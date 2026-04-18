import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      // price is a string like "₹4000", remove the ₹ symbol for math
      const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
      return total + (numericPrice * item.quantity);
    }, 0);
  };

  const totalAmount = calculateTotal();

  if (cart.length === 0) {
    return (
      <div className="page-wrapper container empty-cart-container">
        <h1 className="section-title">Your Cart is <span className="text-gradient">Empty</span></h1>
        <p>Looks like you haven't added any services yet.</p>
        <Link to="/products" className="btn-primary rgb-border" style={{ marginTop: '2rem' }}>
          Browse Services
        </Link>
      </div>
    );
  }

  return (
    <div className="page-wrapper container" style={{ paddingTop: '120px', paddingBottom: '4rem' }}>
      <h1 className="section-title" style={{ marginBottom: '2rem' }}>Your <span className="text-gradient">Cart</span></h1>
      
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item glass-panel">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="text-secondary">{item.category}</p>
                <div className="cart-item-bottom">
                  <span className="cart-item-price text-gradient">{item.price}</span>
                  <span className="cart-item-quantity">Qty: {item.quantity}</span>
                </div>
              </div>
              <button 
                className="remove-btn" 
                onClick={() => removeFromCart(item.id)}
                title="Remove item"
              >
                <Trash2 size={20} color="#ff007f" />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary glass-panel rgb-border">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal ({cart.length} items)</span>
            <span>₹{totalAmount}</span>
          </div>
          <div className="summary-row">
            <span>Taxes</span>
            <span>Included</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total-row">
            <span>Total</span>
            <span className="text-gradient">₹{totalAmount}</span>
          </div>
          
          <button className="checkout-btn bg-gradient-neon rgb-border" onClick={() => setIsCheckoutOpen(true)}>
            Proceed to Checkout <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {isCheckoutOpen && (
        <CheckoutModal 
          cart={cart} 
          totalAmount={totalAmount} 
          onClose={() => setIsCheckoutOpen(false)} 
        />
      )}
    </div>
  );
};

export default Cart;
