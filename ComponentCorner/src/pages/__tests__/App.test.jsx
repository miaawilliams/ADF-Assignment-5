import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn()
};
global.localStorageMock = localStorageMock;

describe('App localStorage Integration', () => {
    beforeEach(() => {
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear();
        localStorageMock.removeItem.mockClear();
        localStorageMock.clear.mockClear();
    });

    test('loads products from localStorage on mount', () => {
        const addedtoCartProducts = JSON.stringify([
            { id: 1, name: 'Test Product', price: 9.99, image: 'https://placehold.co/600x400', description: 'This is a test product' }
        ]);
        localStorageMock.getItem.mockReturnValue(addedtoCartProducts);

        render(<App />);

        expect(localStorageMock.getItem).toHaveBeenCalledWith('products');
    });

    test('saves products to localStorage on update', async () => {
        localStorageMock.getItem.mockReturnValue('[]');

        render(<App />);

        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith('products', '[]');
        });
    });

    test
});