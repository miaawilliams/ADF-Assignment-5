import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../ProductCard';
 

const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
};


describe('ProductCard', () => {
    const defaultProduct = {
        id: 1,
        name: 'Test Product',
        price: 9.99,
        image: 'https://placehold.co/600x400',
        description: 'This is a test product',
        onAddToCart: vi.fn()
    };

    test('renders without crashing', () => {
        renderWithRouter(<ProductCard {...defaultProduct} onAddToCart={() => {}} />);
    });

    test('displays product info correctly', () => {
        renderWithRouter(<ProductCard {...defaultProduct} onAddToCart={() => {}} />);

        expect(screen.getByText(defaultProduct.name)).toBeInTheDocument();
        expect(screen.getByText(defaultProduct.price)).toBeInTheDocument();
        expect(screen.getByText(defaultProduct.description)).toBeInTheDocument();
    });

    test('displays add to cart button', () => {
        renderWithRouter(<ProductCard {...defaultProduct} onAddToCart={() => {}} />);
        
        expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    });
});

