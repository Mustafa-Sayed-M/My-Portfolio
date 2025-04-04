import React from 'react';
import SocialProfiles from '../Atoms/SocialProfiles';

function Footer() {
    return (
        <footer className='py-5 overflow-hidden'>
            <div className='container flex items-center justify-between max-md:flex-col-reverse gap-y-3'>
                {/* Copyrights */}
                <p
                    data-aos="fade"
                    data-aos-offset={20}
                    className='text-gray-color font-medium'
                >
                    All Rights Reserved
                    {" - "}
                    <a
                        target='_blank'
                        rel="noreferrer"
                        title='Github Profile'
                        href='https://github.com/Mustafa-Sayed-M'
                        className='text-white sm:hover:text-purple-color transition-colors font-semibold'
                    >
                        BA7R
                    </a>
                    {" "}
                    <i className='fa-solid fa-heart fa-fw text-purple-color'></i>
                </p>
                {/* Social Profiles */}
                <SocialProfiles />
            </div>
        </footer>
    )
}

export default Footer;