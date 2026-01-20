import React from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
            <div className="navbar max-w-7xl mx-auto">
                <div className="flex-1">
                    <Link href="/" className="text-xl font-bold text-gray-900 ml-2">
                        News Port.
                    </Link>
                </div>
                
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal px-1 gap-4 text-base font-medium text-gray-600">
                        <li><Link href="/" className="hover:text-black hover:bg-transparent">Home</Link></li>
                        <li><a href="#" className="hover:text-black hover:bg-transparent">Business</a></li>
                        <li><a href="#" className="hover:text-black hover:bg-transparent">Technology</a></li>
                        <li><a href="#" className="hover:text-black hover:bg-transparent">Sports</a></li>
                        <li><a href="#" className="hover:text-black hover:bg-transparent">Entertainment</a></li>
                    </ul>
                </div>

                <div className="flex-none md:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-gray-600">
                            <Menu size={24} />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-52 border border-gray-100">
                             <li><Link href="/">Home</Link></li>
                             <li><a href="#">Business</a></li>
                             <li><a href="#">Technology</a></li>
                             <li><a href="#">Sports</a></li>
                             <li><a href="#">Entertainment</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;