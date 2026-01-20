import React from 'react';

const Loader = () => {
    return (
        <div className='w-full flex justify-center py-10'>
            <div className='animate-spin h-10 w-10 border-4 border-gray-200 border-t-blue-600 rounded-full'></div>
        </div>
    );
};

export default Loader;