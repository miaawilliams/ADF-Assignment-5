import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from "../components/ProductCard";


function HomePage({ products, addToCart }) {
    return (
        <main className='home-page'>
            <Hero
              title='Welcome to ComponentCorner'
              subtitle='Your one-stop shop for all your component needs.'
              callToAction='Shop Now'
              image='https://placehold.co/1200x400'
            />

            <h3>
              Why Shop With Us?
            </h3>
            <p>
              We offer a variety of high-end products to fit your every need. Our goal is to provide you
              with the best shopping experience possible. From our organized website, to our top of the line
              customer service, we want to assist you with any and all needs that make you feel appreciated
              as one of our valued customers. 
            </p>
            
            <h2>Top Products</h2>            
              
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                onAddToCart={addToCart}
              />
            ))}

        </main>
    );
}

export default HomePage;