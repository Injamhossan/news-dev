import React from 'react';
import { Search } from 'lucide-react';

export default function FilterBar({
    category, setCategory,
    source, setSource,
    country, setCountry,
}) {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Input */}
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                    type="text" 
                    className="input input-bordered w-full pl-10 bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 rounded-xl"
                    value={source} // Re-using source as search term for now, will update page logic
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="Search news..."
                />
            </div>

            {/* Category */}
            <select 
                className="select select-bordered bg-white border-gray-200 text-gray-700 rounded-xl md:w-48" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="entertainment">Entertainment</option>
                <option value="sports">Sports</option>
                <option value="science">Science</option>
                <option value="health">Health</option>
            </select>
                
            {/* Country */}
            <select 
                className="select select-bordered bg-white border-gray-200 text-gray-700 rounded-xl md:w-40" 
                value={country} 
                onChange={(e) => setCountry(e.target.value)}
            >
                <option value="us">USA</option>
                <option value="gb">UK</option>
                <option value="in">India</option>
                <option value="bd">Bangladesh</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
            </select>
        </div>
    );
}
