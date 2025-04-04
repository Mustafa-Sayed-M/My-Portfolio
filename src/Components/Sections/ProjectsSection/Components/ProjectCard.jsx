import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CardOverlay from './CardOverlay';
import Technologies from './Technologies';

// Row Url:
const rowUrl = 'https://raw.githubusercontent.com';

function ProjectCard({ index, projectData: { id, full_name, homepage, name, description, html_url } }) {

    const { data: technologiesData, isLoading: technologiesIsLoading } = useQuery({
        queryKey: [`technologies_${name}_${id}`],
        queryFn: async () => {
            try {
                const res = await fetch(`${rowUrl}/${full_name}/main/technologies.json`);
                return await res.json();
            } catch (err) {
                console.log(err);
            }
        },
        refetchOnWindowFocus: false
    });

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
                href={homepage || `https://${full_name.split('/')[0].toLowerCase()}.github.io/${name}/`}
                className='image-container aspect-[1/0.5] overflow-hidden rounded-md block mb-3 relative group'
            >
                {/* Image */}
                <picture>
                    <img
                        src={`${rowUrl}/${full_name}/main/preview.webp`}
                        style={{
                            transformOrigin: 'top center'
                        }}
                        alt='...'
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
                    href={html_url}
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
            <Technologies technologiesData={technologiesData} technologiesIsLoading={technologiesIsLoading} />
        </div>
    )
}

export default ProjectCard;