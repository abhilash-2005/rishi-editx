import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css'; /* Reusing grid styles */

const Products = () => {
  return (
    <div className="page-wrapper container" style={{ paddingTop: '120px' }}>
      <div className="section-header">
        <h1 className="section-title">All <span className="text-gradient">Services</span></h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '600px' }}>
          Browse our complete catalog of professional editing and design services.
        </p>
      </div>
      
      <div className="products-grid" style={{ marginBottom: '4rem' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
