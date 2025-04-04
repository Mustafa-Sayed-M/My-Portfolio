import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import ContactForm from './Components/ContactForm';
import ContactInfo from './Components/ContactInfo';

function ContactSection() {
    return (
        <section className='contact-section bg-section-bg-color overflow-hidden' id='contact'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    title={`Get In Touch`}
                    description={`Let's discuss your project and collaborate.`}
                />
                {/* Content Grid */}
                <div className='content-grid grid lg:grid-cols-2 gap-y-5 gap-x-10'>
                    {/* Contact Form */}
                    <ContactForm />
                    {/* Contact Info */}
                    <ContactInfo />
                </div>
            </div>
        </section>
    )
}

export default ContactSection;