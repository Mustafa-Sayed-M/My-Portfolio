import React from 'react';

function ServiceCard({ index, serviceData: { name, description } }) {
    return (
        <div
            data-aos='fade'
            data-aos-delay={50 * index}
            className='service-card p-5 rounded-md border border-purple-color flex items-start gap-5'
        >
            {/* <picture>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/services/${index + 1}.png`}
                    alt={name}
                    width={100}
                    height={100}
                    className=''
                />
            </picture> */}
            <div className='font-semibold text-2xl text-purple-color'>
                {(index + 1).toString().padStart(2, '0')}
            </div>
            <div className='text-container space-y-2 flex-1'>
                <h3 className='font-semibold text-xl'>{name}</h3>
                <p className='text-gray-color font-medium'>{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard;