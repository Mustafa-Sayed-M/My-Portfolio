import React from 'react';

function NavMenuToggler({ isOpen, setIsOpen }) {
    return (
        <button
            type='button'
            aria-label='Navbar Menu Toggler'
            title={isOpen ? 'Close' : 'Open'}
            onClick={() => setIsOpen(prev => !prev)}
            className='navbar-menu-toggler text-3xl lg:hidden w-12 h-8 flex flex-col justify-between overflow-hidden'
        >
            {/* For Screen Reader */}
            <span className='sr-only'>Navbar Menu Toggler</span>
            {/* 1 */}
            <span
                className={`w-full h-1 block ${isOpen ? 'bg-purple-color -rotate-45 translate-y-3.5 rounded-md' : 'bg-white'} transition`}
            ></span>
            {/* 2 */}
            <span className={`w-full h-1 bg-white block ${isOpen ? 'translate-x-full opacity-0' : ''} transition`}></span>
            {/* 3 */}
            <span
                className={`w-full h-1 block ${isOpen ? 'bg-purple-color rotate-45 -translate-y-3.5 rounded-md' : 'bg-white'} transition`}
            ></span>
        </button>
    )
}

export default NavMenuToggler;