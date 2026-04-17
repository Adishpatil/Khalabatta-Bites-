import { useState, useEffect, useCallback } from 'react';
import PageHero from '../components/PageHero';
import PriceCard from '../components/PriceCard';
import { SkeletonPriceGrid } from '../components/SkeletonPriceCard';
import ErrorMessage from '../components/ErrorMessage';
import { fetchProducts } from '../utils/api';
import { getWhatsAppLink } from '../utils/constants';

const PriceListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async () => {
    setLoading(true); setError(null);
    try { setProducts(await fetchProducts()); }
    catch { setError('Price list unavailable. Please try again.'); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { loadProducts(); }, [loadProducts]);

  return (
    <>
      <PageHero title="Price List" subtitle="All prices are in Indian Rupees (₹)" />

      <section>
        <div className="container">
          {loading && <SkeletonPriceGrid count={5} />}
          {error && <ErrorMessage message={error} onRetry={loadProducts} />}
          {!loading && !error && products.length > 0 && (
            <div className="price-cards">
              {products.map((product, i) => (
                <PriceCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Bulk Orders & Customization</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>Need larger quantities or custom packaging? We offer bulk orders with special pricing. Reach out to us on WhatsApp to discuss your requirements.</p>
          <a href={getWhatsAppLink('Hello, I am interested in a bulk order')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">📦 Inquire About Bulk Orders</a>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Order?</h2>
          <p>Choose your favorite products and order now through WhatsApp.</p>
          <a href={getWhatsAppLink('Hello, I want to place an order')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">🛒 Order Now</a>
        </div>
      </section>
    </>
  );
};

export default PriceListPage;
