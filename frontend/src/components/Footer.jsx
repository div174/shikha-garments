import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-10 mt-auto">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h3 className="text-xl font-bold mb-4">Shikha Garments</h3>
                <p className="text-slate-400 mb-2">
                    Opposite Bhagwan Ganj Mandi, Modinagar, UP
                </p>
                <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Shikha Garments. All rights reserved.</p>
                    <p className="mt-2 text-xs opacity-75">Powered by Suresh</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
