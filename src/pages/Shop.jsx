import { useState } from 'react';
import products from '../Product';
import ProductCard from '../components/ProductCard';
import '../styles/Shop.css';
import Navigation from '../components/Navigation';

function Shop() {
  const [selectedSize, setSelectedSize] = useState('');
  const [sliderValue, setSliderValue] = useState(1000); 

const filteredProducts = products
  .filter((product) =>
    selectedSize ? product.size.toLowerCase() === selectedSize.toLowerCase() : true
  )
  .filter((product) => {
    // Remove "$" and convert to number
    const priceNum = parseInt(product.price.replace('$', ''));
    return priceNum <= sliderValue;
  });

  

  return (
    <div className="shop-page">
      <Navigation
  selectedSize={selectedSize}
  setSelectedSize={setSelectedSize}
  sliderValue={sliderValue}
  setSliderValue={setSliderValue}
/>


      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
