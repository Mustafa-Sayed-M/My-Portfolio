import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import AboutHero from './Components/AboutHero';
import AboutTextContent from './Components/AboutTextContent';

function AboutSection() {
    return (
        <section className='about-section bg-section-bg-color' id='about'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    title={`About Me`}
                    description={`A glimpse into my journey and expertise.`}
                />
                {/* Content Grid */}
                <div className='content-grid grid lg:grid-cols-3 items-start gap-10'>
                    {/* Hero */}
                    <AboutHero />
                    {/* Text Content */}
                    <AboutTextContent />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;