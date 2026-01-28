import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const LocationMap = () => {
    return (
        <section className="py-20 bg-slate-50" id="contact">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Visit Our Store</h2>
                    <p className="text-slate-500">We are conveniently located in Modinagar</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg text-blue-900">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">Our Location</h4>
                                <p className="text-slate-600 text-sm">
                                    Address: Opposite Bhagwan Ganj Mandi,<br />
                                    Modinagar, UP
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-green-100 p-3 rounded-lg text-green-700">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">Call / WhatsApp</h4>
                                <p className="text-slate-600 text-sm">+91 82187 85491</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-orange-100 p-3 rounded-lg text-orange-700">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 mb-1">Email Us</h4>
                                <p className="text-slate-600 text-sm">sureshsinghal3717@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Address Box */}
                    <div className="md:col-span-2 h-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center text-center">
                        <div>
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">Visit Us At</h3>
                            <p className="text-xl text-slate-700 font-medium">
                                Address: Opposite Bhagwan Ganj Mandi,<br />
                                Modinagar, UP
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
