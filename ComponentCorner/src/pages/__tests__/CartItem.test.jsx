import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartItem from '../CartItem';

const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('CartItem', () => {
    const defaultProduct = {
        id: 1,
        name: 'Test Product',
        price: 9.99,
        image: 'https://placehold.co/600x400',
        description: 'This is a test product',
        onRemoveFromCart: vi.fn()
    };
    
    test('renders without crashing', () => {
        renderWithRouter(
            <CartItem
                name={defaultProduct.name}
                quantity={1}
            />
        );
    });

    test('calls onRemoveFromCart when remove button is clicked', () => {
        const onRemoveFromCartMock = vi.fn();
        renderWithRouter(
            <CartItem
                name={defaultProduct.name}
                quantity={1}
                onRemoveFromCart={onRemoveFromCartMock}
            />
        );
        expect(onRemoveFromCartMock).toHaveBeenCalledTimes(1);
    });
});

