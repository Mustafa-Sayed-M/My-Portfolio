import React from 'react';

function SectionHeader({ title, description }) {
    return (
        <div className='section-header mb-10'>
            <h2 className='mb-4 uppercase text-2xl md:text-4xl my-3 bg-gradient-to-r from-purple-color to-white text-transparent bg-clip-text relative w-fit mx-auto pb-3'>{title}</h2>
            <p className='text-gray-color text-center'>{description}</p>
        </div>
    )
}

export default SectionHeader;