import React from 'react';

function Technologies({ technologiesIsLoading, technologiesData }) {
    return (
        <ul className='flex items-center'>
            {
                technologiesIsLoading ? (
                    Array.from({ length: 4 }).map((_, index) => (<li
                        key={index}
                        className={`w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-700 animate-pulse rounded-full -ms-2 first-of-type:ms-0`}
                    ></li>))
                ) : (
                    technologiesData.map((tech, index) => (<li
                        key={index}
                        title={tech.toUpperCase()}
                        className={`w-10 h-10 flex items-center justify-center bg-slate-900 rounded-full border border-purple-color -ms-2 first-of-type:ms-0`}
                    >
                        <picture>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/skills/${tech}.svg`}
                                alt={tech}
                                width={20}
                                height={20}
                            />
                        </picture>
                    </li>))
                )
            }
        </ul>
    )
}

export default Technologies;