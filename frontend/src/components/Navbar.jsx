import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold tracking-wider">SHIKHA GARMENTS</h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                            <a href="#products-grid" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">Uniforms</a>
                            <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</a>
                            <a href="#" className="bg-white text-blue-900 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">Contact</a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-800 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
