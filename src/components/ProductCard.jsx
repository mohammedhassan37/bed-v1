function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <p className="price">{props.price}</p>
      <p className="reviews">{props.reviews}</p>
      <p className={props.stock === 'In Stock' ? 'in-stock' : 'out-stock'}>
        {props.stock}
      </p>
      <button>Order Now</button>
    </div>
  );
}

export default ProductCard;
