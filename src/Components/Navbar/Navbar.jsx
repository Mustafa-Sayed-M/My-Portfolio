import React from 'react';
import AppLogo from '../Atoms/AppLogo';
import NavLinks from './Components/NavLinks';
import NavMenuToggler from './Components/NavMenuToggler';

function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);
    const [is, setIs] = React.useState(() => (window.scrollY > 500));
    React.useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 500 ? setIs(true) : setIs(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className='sticky top-0 z-50 transition ease-out duration-300'
            style={{
                backgroundColor: is ? '#050709' : '#0F0715',
                boxShadow: is ? 'rgb(135, 80, 247) 0px -2px 8px 0px' : ''
            }}
        >
            <div className='container min-h-[100px] flex items-center justify-between'>
                {/* App Logo */}
                <AppLogo />
                {/* Nav Links */}
                <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
                {/* Navbar Toggler */}
                <NavMenuToggler isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </nav>
    )
}

export default Navbar;