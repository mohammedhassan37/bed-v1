
import products from '../Product';
import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';

function Shop() {
  return (
    <div className="shop-page">
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
