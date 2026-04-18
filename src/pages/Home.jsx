import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight, Play, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-content">
          <div className="badge glass-panel rgb-border">
            <Star size={14} color="#ff007f" />
            <span>Pro Level Editing Services</span>
          </div>
          <h1 className="hero-title">
            Transform Your Vision Into a <br/>
            <span className="text-gradient">Cinematic Reality</span>
          </h1>
          <p className="hero-desc">
            Premium quality thumbnails, wedding posters, cinematic video edits, and custom PSDs at unbeatable prices. Tailored for creators who demand the best.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn-primary rgb-border">
              Explore Services <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary glass-panel">
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Abstract Video/Image Placeholder */}
        <div className="hero-visual">
          <div className="visual-wrapper rgb-border">
            <div className="glass-panel visual-inner">
               <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=1000" alt="Editing Workspace" className="hero-img" />
               <div className="play-button glass-panel">
                 <Play fill="white" size={24} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="featured-section container">
        <div className="section-header">
          <h2 className="section-title">Featured <span className="text-gradient">Services</span></h2>
          <Link to="/products" className="view-all-link">View All <ArrowRight size={16} /></Link>
        </div>
        
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
