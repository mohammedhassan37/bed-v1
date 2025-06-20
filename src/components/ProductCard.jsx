import products from '../Product.js';

function ProductCard(props){
    return(
        <>
            <img src={props.img} alt={props.title} />
            <h4>{props.title}</h4>
             <p>{props.price}</p>
              <p>{props.review}</p>
               <p>{props.stock}</p>
        </>
    )
}

export default ProductCard;