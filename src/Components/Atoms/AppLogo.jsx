import React from 'react';

const AppLogo = React.memo(() => {
    return (
        <a
            data-aos='zoom-in'
            href={process.env.PUBLIC_URL}
            className='flex items-center font-bold text-3xl'
        >
            {/* <picture>
                <img
                    src={`${process.env.PUBLIC_URL}/favicon.ico`}
                    alt='App Logo'
                    width={50}
                    height={50}
                    className=''
                />
            </picture> */}
            BA<span className='text-purple-color'>7</span>R
        </a>
    )
});

export default AppLogo;