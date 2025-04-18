import React from 'react';

function SkillCard({ index, skillData: { name, percentage, icon_url } }) {
    return (
        <div
            data-aos='fade'
            data-aos-delay={50 * index}
            className='skill-card p-5 rounded-md border border-purple-color text-center'
        >
            <picture>
                <img
                    src={icon_url}
                    alt={name}
                    width={50}
                    height={50}
                    className='mx-auto mb-3'
                />
            </picture>
            <h3 className='uppercase font-semibold mb-1'>{name}</h3>
            <p className='font-medium text-gray-color'>{percentage}%</p>
        </div>
    )
}

export default SkillCard;