import React from 'react';
import useFetchProfileData from '../../../../Hooks/useFetchProfileData';

function ContactInfo() {

    const { data, isLoading } = useFetchProfileData();

    return (
        <div className='contact-info'>
            <h3 className='font-semibold text-3xl mb-5 max-lg:hidden'>Contact Info</h3>
            <ul className='space-y-3'>
                {
                    isLoading ? (
                        <>Loading...</>
                    ) : (
                        (data.profile[0].contact_info || []).map((contact, index) => (
                            <li
                                key={index}
                                data-aos="fade-left"
                                data-aos-delay={index * 50}
                            >
                                <a
                                    target='_blank'
                                    rel="noreferrer"
                                    href={contact.href}
                                    className='flex items-center gap-3 bg-purple-color p-5 rounded-md group border border-purple-color sm:hover:bg-transparent transition-colors'
                                >
                                    <i className={`fa-solid fa-${contact.icon} fa-fw`}></i>
                                    <p className='line-clamp-1 font-medium'>{contact.label}</p>
                                    <i className='fa-solid fa-arrow-right text-xl sm:group-hover:-rotate-45 sm:group-hover:text-purple-color ms-auto transition-transform'></i>
                                </a>
                            </li>
                        )
                        ))
                }
            </ul>
        </div>
    )
}

export default ContactInfo;