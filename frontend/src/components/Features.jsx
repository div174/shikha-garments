import React from 'react';
import { ShieldCheck, MapPin, MessageCircle } from 'lucide-react';

const Features = () => {
    return (
        <div className="bg-white py-6 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center">

                <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <ShieldCheck className="w-5 h-5 text-blue-900" />
                    <span>Quality Assured</span>
                </div>

                <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <MapPin className="w-5 h-5 text-blue-900" />
                    <span>Modinagar's Trusted Shop</span>
                </div>

                <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <span>Quick WhatsApp Support</span>
                </div>

            </div>
        </div>
    );
};

export default Features;
