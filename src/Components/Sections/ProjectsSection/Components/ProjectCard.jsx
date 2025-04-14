import React from 'react';
import CardOverlay from './CardOverlay';
import Technologies from './Technologies';

function ProjectCard({ index, projectData: { name, description, image, technologies } }) {
    return (
        <div
            data-aos='fade'
            data-aos-delay={50 * index}
            className='project-card p-3 border border-purple-color rounded-md'
        >
            {/* Image Container */}
            <a
                target='_blank'
                rel="noreferrer"
                href={`/`}
                className='image-container aspect-[1/0.5] overflow-hidden rounded-md block mb-3 relative group'
            >
                {/* Image */}
                <picture>
                    <img
                        src={image}
                        style={{
                            transformOrigin: 'top center'
                        }}
                        alt={name || '...'}
                        width={400}
                        height={400}
                        className='w-full h-auto group-hover:scale-110 duration-500 ease-in-out transition'
                    />
                </picture>
                <CardOverlay />
            </a>
            {/* Head */}
            <div className='head flex items-center gap-5 mb-2'>
                {/* Name */}
                <h3 className='capitalize font-semibold text-lg line-clamp-1 flex-1'>{name.replaceAll('-', ' ')}</h3>
                {/* Github */}
                <a
                    href={`/`}
                    target='_blank'
                    rel="noreferrer"
                    title='Go To Github Repo'
                    className='text-2xl sm:hover:text-purple-color transition'
                >
                    <span className='sr-only'>Github Repo</span>
                    <i className='fa-brands fa-github fa-fw'></i>
                </a>
            </div>
            {/* Description */}
            <p className='text-gray-color line-clamp-3'>{description || 'No Description'}</p>
            {/* Split Line */}
            <hr className='border-purple-color my-3' />
            {/* Technologies */}
            <Technologies technologiesData={technologies} />
        </div>
    )
}

export default ProjectCard;