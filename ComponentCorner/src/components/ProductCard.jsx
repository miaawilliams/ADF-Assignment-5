import './ProductCard.css';

function ProductCard({ product, name, price, image, description, onAddToCart }) {
    return (
        <div className='product-card'>
            <div className='product-header'>
                <img
                    src={image}
                    alt='Product Image'
                    className='product-image'
                />
                <div className='product-info'>
                    <h3 className='product-name'>{name}</h3>
                    <p className='price'>{price}</p>
                </div>
            </div>
            <p className='product-description'>{description}</p>
            <button className='addToCart-btn' onClick={() => onAddToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;