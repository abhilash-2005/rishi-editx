import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card rgb-border">
      <div className="glass-panel card-inner">
        <div className="card-image-wrapper">
          <img src={product.image} alt={product.title} className="card-image" />
          <span className="category-badge">{product.category}</span>
        </div>
        <div className="card-content">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-desc">{product.description}</p>
          
          <ul className="card-features">
            {product.features.map((feature, idx) => (
              <li key={idx}>✓ {feature}</li>
            ))}
          </ul>
          
          <div className="card-footer">
            <span className="price text-gradient">{product.price}</span>
            <button 
              className={`buy-btn ${added ? 'added' : 'glass-panel'}`}
              onClick={handleAddToCart}
            >
              {added ? <Check size={16} /> : <ShoppingCart size={16} />} 
              {added ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
