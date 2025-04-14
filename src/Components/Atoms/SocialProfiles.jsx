import React from 'react';
import useFetchProfileData from '../../Hooks/useFetchProfileData';

function SocialProfiles({ className }) {

    const { data, isLoading } = useFetchProfileData();

    return (
        <ul className={`flex items-center justify-center gap-2 max-md:w-full ${className}`}>
            {
                isLoading ? (
                    <>Loading...</>
                ) : (
                    (data.social_profiles || []).map((link, index) => (
                        <li
                            key={index}
                            data-aos='fade-left'
                            data-aos-offset={20}
                            data-aos-delay={50 * index}
                        >
                            <a
                                href={link.href}
                                target='_blank'
                                rel="noreferrer"
                                title={`${link.name} Profile`}
                                className='block w-10 h-10 leading-10 text-center rounded-full border-2 border-purple-color text-purple-color sm:hover:bg-purple-color sm:hover:text-white transition'
                            >
                                <span className='sr-only'>{link.name}</span>
                                <i className={`fa-brands fa-${link.fontAwesomeIcon2} fa-fw`}></i>
                            </a>
                        </li>
                    )))
            }
        </ul>
    )
}

export default SocialProfiles;