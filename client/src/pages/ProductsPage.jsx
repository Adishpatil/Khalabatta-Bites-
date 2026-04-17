import { useState, useEffect, useCallback } from 'react';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import { SkeletonGrid } from '../components/SkeletonCard';
import ErrorMessage from '../components/ErrorMessage';
import { fetchProducts } from '../utils/api';
import { getWhatsAppLink } from '../utils/constants';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async () => {
    setLoading(true); setError(null);
    try { setProducts(await fetchProducts()); }
    catch { setError('Products unavailable. Please try again.'); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { loadProducts(); }, [loadProducts]);

  return (
    <>
      <PageHero title="Our Products" subtitle="Authentic Kolhapuri food products made with traditional methods" />

      <section>
        <div className="container">
          {loading && <SkeletonGrid count={5} />}
          {error && <ErrorMessage message={error} onRetry={loadProducts} />}
          {!loading && !error && products.length > 0 && (
            <div className="products-grid">
              {products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Have Questions About Our Products?</h2>
          <p>Reach out to us on WhatsApp and we'll be happy to help you choose the perfect products.</p>
          <a href={getWhatsAppLink('Hello, I have questions about your products')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">💬 Message on WhatsApp</a>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
