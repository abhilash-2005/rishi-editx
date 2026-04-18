import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Mail, Video } from 'lucide-react';
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup
    navigate('/');
  };

  return (
    <div className="auth-wrapper page-wrapper">
      <div className="auth-container glass-panel rgb-border">
        <div className="auth-header">
          <Video className="logo-icon" size={32} />
          <h2>Create Account</h2>
          <p>Join RISHI EDITX and elevate your content.</p>
        </div>

        <form onSubmit={handleSignup} className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <div className="input-group">
              <User className="input-icon" size={18} />
              <input type="text" required className="form-input with-icon" placeholder="John Doe" />
            </div>
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-group">
              <Mail className="input-icon" size={18} />
              <input type="email" required className="form-input with-icon" placeholder="saptarshikar25@gmail.com" />
            </div>
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <div className="input-group">
              <Lock className="input-icon" size={18} />
              <input type="password" required className="form-input with-icon" placeholder="••••••••" />
            </div>
          </div>

          <button type="submit" className="btn-primary auth-submit rgb-border">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login" className="text-gradient">Log in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
