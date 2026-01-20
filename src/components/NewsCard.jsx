import React from 'react';
import Image from 'next/image';
import { Calendar, ExternalLink } from 'lucide-react';


export default function NewsCard({data}) {

    return(
        <a href={data.url}
        target='_blank'
        rel='noreferrer'
        className='group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full'>
            <div className='relative w-full h-48 overflow-hidden'>
                <Image 
                    src={data.urlToImage || "https://via.placeholder.com/400x200"} 
                    alt="news" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <span className='absolute top-3 left-3 bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm'>
                    {data.source?.name}
                </span>
            </div>

            <div className='p-5 flex-1 flex flex-col'>
                <h2 className='text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors'>
                    {data.title}
                </h2>

                <p className='text-gray-600 text-sm line-clamp-3 mb-4 flex-1'>
                    {data.description || "No description available for this article. Click to read the full story."}
                </p>

                <div className='pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 mt-auto'>
                    <div className='flex items-center gap-2'>
                        <Calendar size={16} className="text-gray-400"/>
                        <span>{data.publishedAt ? new Date(data.publishedAt).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        }) : "No Date"}</span>
                    </div>

                    <span className='flex items-center gap-1 text-blue-600 font-semibold group-hover:translate-x-1 transition-transform'>
                        Read more <ExternalLink size={16}/>
                    </span>
                </div>
            </div>
        </a>
    )
};