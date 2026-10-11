
function CartItem({ name, price, removeFromCart }) {
    return (
        <div className="cart-item">
            <h3 className="cart-item-name">{name}</h3>
            <p className="cart-item-price">${price.toFixed(2)}</p>
            <button className="remove-from-cart-btn" onClick={removeFromCart}>
                Remove
            </button>
        </div>
    )
}

export default CartItem;