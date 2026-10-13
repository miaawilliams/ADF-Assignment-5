import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';

const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
};


vi.mock('../../components/ProductCard', () => {
    return {
        default: ({ product }) => (
        <div data-testid="product-card">
            <span>{product.name}</span>
        </div>
        )
    };
});

vi.mock('../../components/Cart', () => {
    return {
        default: ({ onAddToCart }) => <div data-testid="add-to-cart">Add to Cart</div>
    }
})


describe('HomePage', () => {
    test('renders the HomePage component', () => {
        renderWithRouter(
            <HomePage
                products={[]}
                onAddToCart={() => {}}
            />
        );

        expect(screen.getByText('Welcome to Component Corner!')).toBeInTheDocument();
        expect(screen.getByText('Explore our wide range of components and gadgets.')).toBeInTheDocument();
        expect(screen.getByText('Featured Products')).toBeInTheDocument();
    });    
});

