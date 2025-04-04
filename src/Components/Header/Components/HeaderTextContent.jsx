import React from 'react';
import SocialProfiles from '../../Atoms/SocialProfiles';
import DownloadCv from '../../Atoms/DownloadCv';

function HeaderTextContent() {
    return (
        <div className='header-text-content max-lg:order-1'>
            <p className='bg-purple-color rounded-md p-1 w-fit selection:bg-white selection:text-purple-color' data-aos='fade'>Hi, I'm Mustafa</p>
            <h1
                data-aos="fade"
                data-aos-delay={100}
                className="text-2xl md:text-4xl font-bold my-3 bg-gradient-to-r from-purple-color to-white text-transparent bg-clip-text"
            >
                Frontend Developer
            </h1>
            <p className='text-gray-color mb-10' data-aos='fade' data-aos-delay={200}>
                Passionate Frontend Developer specializing in building interactive and
                high-performance web applications using React and modern technologies.
                Experienced in crafting responsive designs with Tailwind CSS and optimizing
                user experiences. Always eager to learn, innovate, and deliver high-quality solutions.
            </p>
            {/* Foot */}
            <div className='foot flex md:items-center gap-3 max-md:flex-col-reverse'>
                {/* Download Btn */}
                <div
                    data-aos='fade-left'
                    className='download-btn-container'
                >
                    <DownloadCv />
                </div>
                {/* Social Profiles */}
                <SocialProfiles />
            </div>
        </div>
    )
}

export default HeaderTextContent;