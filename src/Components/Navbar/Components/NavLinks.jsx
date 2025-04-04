import React from 'react';
import SocialProfiles from '../../Atoms/SocialProfiles';

const linksData = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
]

function NavLinks({ isOpen, setIsOpen }) {

    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);
    const [activeSection, setActiveSection] = React.useState(null);

    React.useEffect(() => {
        if (!isOpen && ref1.current && window.innerWidth < 1024) {
            setTimeout(() => {
                ref1.current.classList.add('scale-0');
            }, 150)
        };
    }, [isOpen]);

    React.useEffect(() => {
        const handleResizeWindow = () => {
            if (ref1.current) ref1.current.classList.remove('transition-opacity');
            if (ref2.current) ref2.current.classList.remove('transition');
            if (window.innerWidth > 1024) {
                if (ref1.current) ref1.current.classList.remove('scale-0');
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResizeWindow);
        return () => window.removeEventListener('resize', handleResizeWindow);
    }, [isOpen, setIsOpen]);

    React.useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        linksData.forEach((link) => {
            const section = document.querySelector(link.href);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const href = e.target.getAttribute('data-section');
        const sectionId = href.slice(1);
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
            if (window.lenis) {
                window.lenis.scrollTo(sectionElement, {
                    duration: 0.6,
                    offset: -100,
                    easing: (t) => t * (2 - t),
                });
            } else {
                sectionElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
            setActiveSection(sectionId);
            setIsOpen(false);
        }
    };

    return (
        <div
            ref={ref1}
            onClick={() => setIsOpen(false)}
            className={`navbar-links ${isOpen ? 'max-lg:opacity-100' : 'max-lg:opacity-0'} transition-opacity max-lg:absolute max-lg:left-0 max-lg:top-full max-lg:border-t max-lg:border-t-purple-color max-lg:w-full max-lg:h-[calc(100vh-100px)] max-lg:bg-black/20 max-lg:backdrop-blur-sm`}
        >
            <ul onClick={e => e.stopPropagation()} ref={ref2} className={`${isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'} transition flex items-center gap-1 max-lg:flex-col max-lg:bg-body-color max-lg:h-full max-lg:w-[300px] max-lg:p-5`}>
                {
                    linksData.map((link, index) => (
                        <li
                            key={index}
                            data-aos='fade-left'
                            className='max-lg:w-full'
                            data-aos-delay={50 * index}
                        >
                            <a
                                href={link.href}
                                onClick={handleClick}
                                data-section={link.href}
                                className={`block p-2 font-medium md:text-lg relative transition ${activeSection === link.href.slice(1) ? "active" : "opacity-60"}`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))
                }
                <li className='mt-auto'>
                    {/* Social Profiles */}
                    <SocialProfiles className={'lg:hidden'} />
                </li>
                <li
                    data-aos='zoom-in'
                    data-aos-delay={50 * linksData.length + 100}
                    className='lg:ms-5 max-lg:w-full max-lg:mt-3'
                >
                    <a
                        target='_blank'
                        rel="noreferrer"
                        href='tel:+201122124968'
                        className='block text-center py-2 px-4 font-semibold rounded-full border border-purple-color sm:hover:text-purple-color transition sm:hover:bg-white group bg-purple-color'
                    >
                        <i className='fa-brands fa-whatsapp fa-fw me-2 text-lg'></i>
                        <span>Whatsapp</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks;