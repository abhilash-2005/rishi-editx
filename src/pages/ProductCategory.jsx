import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, getCategories } from '../data/products';
import './ProductCategory.css';

const ProductCategory = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = getCategories();
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="page-wrapper container" style={{ paddingTop: '120px' }}>
      <div className="section-header" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h1 className="section-title">Shop by <span className="text-gradient">Category</span></h1>
        
        <div className="category-filters">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`category-btn ${activeCategory === cat ? 'active rgb-border text-gradient' : 'glass-panel'}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className="products-grid" style={{ marginBottom: '4rem' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <p style={{ color: 'var(--text-secondary)' }}>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
