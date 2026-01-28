import React from 'react';

const ProductSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 animate-pulse">
                    <div className="aspect-square bg-gray-200"></div>
                    <div className="p-5">
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                        <div className="h-10 bg-gray-200 rounded-xl w-full"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductSkeleton;
