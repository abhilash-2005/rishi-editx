import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Video } from 'lucide-react';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/');
  };

  return (
    <div className="auth-wrapper page-wrapper">
      <div className="auth-container glass-panel rgb-border">
        <div className="auth-header">
          <Video className="logo-icon" size={32} />
          <h2>Welcome Back</h2>
          <p>Login to manage your editing orders.</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-group">
              <User className="input-icon" size={18} />
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
            Sign In
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup" className="text-gradient">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
