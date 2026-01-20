import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter text-white">News Port.</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted source for the latest global headlines. keeping you informed with accurate and timely reporting from around the world.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Categories</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Business</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Technology</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Sports</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Entertainment</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex flex-col gap-3">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="input input-bordered w-full bg-neutral-800 border-gray-700 text-white focus:border-blue-500"
                            />
                            <button className="btn btn-primary w-full max-w-[120px]">
                                Subscribe <Mail size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-8"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} News Port. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><Youtube size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;