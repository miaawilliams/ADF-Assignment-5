import CartItem from '../components/CartItem';

function CartPage({ products, removeFromCart }) {
    const cartTotal = products.reduce((total, item) => total + item.price, 0);

    return (
        <div className='cart-page'>
            <h2>Your Cart</h2>

            {products.length === 0 ? (
                <p className='empty-cart'>Your cart is empty.</p>
            ) : (
                <div className='cart-list'>
                    {products.map((item, index) => (
                        <CartItem
                            key={`${item.id}-${index}`}
                            name={item.name}
                            price={item.price}
                            removeFromCart={() => removeFromCart(item.id)}
                        />
                    ))}
                </div>
            )}

            <p className='cart-total'>Total: ${cartTotal.toFixed(2)}</p>

        </div>
    );
}


export default CartPage;