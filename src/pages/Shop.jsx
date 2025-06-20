import products from '../Product.js';
import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';



function Shop() {
  return (
    <div className="shop-page">
      <h2>Shopeeeeeeee Page</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}


export default Shop;
