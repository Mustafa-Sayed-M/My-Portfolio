import React from 'react';

function HeaderHero() {
    return (
        <div
            data-aos='zoom-in'
            className='hero flex items-center justify-center lg:justify-end'
        >
            {/* Image Container */}
            <div className='image-container border-2 border-purple-color rounded-3xl max-lg:overflow-hidden'>
                {/* Hero Image */}
                <picture>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/header-hero.webp`}
                        // src='https://images.pexels.com/photos/19995880/pexels-photo-19995880/free-photo-of-young-man-with-curly-hair-in-a-sweatshirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                        alt='Hero'
                        width={400}
                        height={400}
                        className='lg:-translate-x-10 lg:-translate-y-10 lg:rounded-3xl'
                    />
                </picture>
            </div>
        </div>
    )
}

export default HeaderHero;