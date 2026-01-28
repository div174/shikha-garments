import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-20 bg-white" id="about">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-left">
                        <div className="inline-block px-4 py-1 bg-blue-50 text-blue-900 rounded-full text-sm font-bold mb-4">
                            Since 1990
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
                            More Than 30 Years of <span className="text-blue-900">Trust & Quality</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Established in 1990, <strong>Shikha Readymade Garments</strong> has been a cornerstone of quality clothing in Modinagar.
                            We specialize in durable, comfortable <strong>School Uniforms</strong> for all major local schools and premium <strong>Men's Fashion</strong>.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Our mission is simple: to provide high-quality fabrics and perfect fits that last. We understand our customers' needs and stay updated with the latest trends while maintaining the traditional reliability you expect.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-4 border-blue-900 pl-4">
                                <h4 className="font-bold text-xl text-slate-800">Men's Wear</h4>
                                <p className="text-slate-500">Formals, Casuals & Winter Wear</p>
                            </div>
                            <div className="border-l-4 border-green-600 pl-4">
                                <h4 className="font-bold text-xl text-slate-800">School Uniforms</h4>
                                <p className="text-slate-500">KV, DPS & All Local Schools</p>
                            </div>
                        </div>
                    </div>

                    {/* Image / Stats */}
                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-blue-900 rounded-2xl transform rotate-3 opacity-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
                            alt="Shop Interior"
                            className="relative rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-900 hidden md:block">
                            <p className="text-3xl font-bold text-blue-900">30+</p>
                            <p className="text-slate-500 font-medium">Years of Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
