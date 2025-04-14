import React from 'react';

function Technologies({ technologiesData }) {
    return (
        <ul className='flex items-center'>
            {
                technologiesData.map(({ name, icon_url }, index) => (<li
                    key={index}
                    className={`w-10 h-10 flex items-center justify-center bg-slate-900 rounded-full border border-purple-color -ms-2 first-of-type:ms-0`}
                >
                    <picture>
                        <img
                            src={icon_url}
                            alt={name || '...'}
                            width={20}
                            height={20}
                        />
                    </picture>
                </li>))
            }
        </ul>
    )
}

export default Technologies;