import React from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { ExternalLink } from 'lucide-react';


export default function NewsCard({data}) {

    return(
        <a href={data.url}
        target='_blank'
        rel='noreferrer'
        className='group bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300'>
            {/* Image */}
            <div>
                <Image src={data.urlToImage || "https://via.placeholder.com/400x200"} alt="news" className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'/>

                {/* Source */}
                <span className='absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded'>{data.source?.name}</span>
            </div>

            {/* Content */}

            <div>
                <div>
                    <h2 className='text-lg font-semibold leading-snug line-clamp-2'>{data.title}</h2>

                    <p className='text-sm text-gray-600 mt-2 line-clamp-3'>
                        {data.description || "No description Available"}
                    </p>
                </div>

                {/* Footer */}

                <div className='flex items-center justify-between mt-4 text-sm text-gray-500'>
                    <div className='flex items-center gap-1'>
                    {/* <Calendar size={14}/> {data.publishedAt ? new Data(data.publishedAt).toDataString() : "No Date"  } */}
                    {/* {new Data(data.publishedAt).toDataString()} */}
                    </div>

                    <span className='flex items-center gap-1 text-blue-600 font-medium group-hover:underlines'>
                        Read More <ExternalLink size={14}/>
                    </span>
                </div>
            </div>
        </a>
    )
};