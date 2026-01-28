import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { API_URL } from '../config';

const ProductCard = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const phoneNumber = '918218785491';

    // Parse sizes from string or fallback based on category logic
    const getSizes = () => {
        if (product.sizes) return product.sizes.split(',').map(s => s.trim());
        // Fallback logic if database sizes are missing
        if (product.category_name === 'School Uniform') return ['28', '30', '32', '34', '36', '38'];
        return ['S', 'M', 'L', 'XL', 'XXL'];
    };

    const sizes = getSizes();

    const handleQuantityChange = (change) => {
        const newQty = quantity + change;
        if (newQty >= 1) setQuantity(newQty);
    };

    const handleWhatsAppClick = () => {
        if (!selectedSize && sizes.length > 0) {
            alert("Please select a size first!");
            return;
        }

        const totalPrice = product.price * quantity;

        // 1. Send Async Email Notification (Fire and Forget)
        fetch(`${API_URL}/log-order/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_name: product.name,
                size: selectedSize || 'N/A',
                quantity: quantity,
                total_price: totalPrice
            }),
        }).catch(err => console.error("Email logging failed:", err));

        // 2. Open WhatsApp Immediately
        const message = `Hello Shikha Garments! I am interested in buying:
Item: ${product.name}
Size: ${selectedSize || 'N/A'}
Quantity: ${quantity}
Total Price: ₹${totalPrice}
Please let me know if this is available for pickup/delivery.`;

        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col w-full group border border-gray-100">
            <div className="aspect-square overflow-hidden w-full bg-gray-50 relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-slate-800 font-semibold mb-2 text-lg line-clamp-1">{product.name}</h3>
                <div className="flex justify-between items-center mb-4">
                    <div className="text-green-700 font-bold text-lg">₹{product.price}</div>
                    {product.is_in_stock ? (
                        <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">In Stock</span>
                    ) : (
                        <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full">Out of Stock</span>
                    )}
                </div>

                {/* Size Selection */}
                <div className="mb-4">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Select Size</span>
                    <div className="flex flex-wrap gap-2">
                        {sizes.map((size, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedSize(size)}
                                className={`px-3 py-1 text-sm rounded-md border transition-colors ${selectedSize === size
                                    ? 'bg-blue-900 text-white border-blue-900'
                                    : 'bg-white text-slate-600 border-slate-200 hover:bg-blue-50'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quantity & Buy Button */}
                <div className="mt-auto flex gap-3 items-center pt-2">
                    {/* Quantity Counter */}
                    <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                        <button
                            onClick={() => handleQuantityChange(-1)}
                            className="w-8 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-200 rounded-l-lg transition-colors font-bold"
                        >-</button>
                        <span className="w-8 text-center text-sm font-semibold text-slate-800">{quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(1)}
                            className="w-8 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-200 rounded-r-lg transition-colors font-bold"
                        >+</button>
                    </div>

                    <button
                        className="flex-1 py-2.5 px-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-95 text-sm"
                        onClick={handleWhatsAppClick}
                        disabled={!product.is_in_stock}
                    >
                        <MessageCircle className="w-5 h-5" />
                        Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
