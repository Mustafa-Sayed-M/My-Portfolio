import React from 'react';
import HeaderTextContent from './Components/HeaderTextContent';
import HeaderHero from './Components/HeaderHero';

function Header() {
    return (
        <header
            id='home'
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/header-bg.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: "fixed",
            }}
            className='flex items-center py-16 lg:min-h-[70vh] relative overflow-x-hidden'
        >
            {/* Light */}
            <div className='w-96 h-96 rounded-full bg-purple-color absolute -right-48 -top-48 blur-3xl opacity-15'></div>
            <div className='container'>
                {/* Header Content */}
                <div className='header-content grid lg:grid-cols-2 gap-x-5 gap-y-16 items-center'>
                    {/* Text Content */}
                    <HeaderTextContent />
                    {/* Hero */}
                    <HeaderHero />
                </div>
            </div>
        </header>
    )
}

export default Header;