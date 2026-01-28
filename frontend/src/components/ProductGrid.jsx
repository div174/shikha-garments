import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, loading }) => {
    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="text-center text-gray-500 py-12">
                <p className="text-xl">No products found. Please add products via the admin panel.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
