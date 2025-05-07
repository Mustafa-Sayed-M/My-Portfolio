import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import ServiceCard from './Components/ServiceCard';
import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '../../../Utils/api';

function ServicesSection() {

    const { data, isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: fetchServices,
        refetchOnWindowFocus: false
    });

    return (
        <section className='services-section bg-section-bg-color' id='services'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    title={`My Services`}
                    description={`A suite of services for building professional websites.`}
                />
                {/* Services Cards */}
                <div className='services-cards grid md:grid-cols-2 gap-5'>
                    {
                        isLoading ? (
                            <>Loading...</>
                        ) : (
                            (data || []).map((service, index) => (<ServiceCard serviceData={service} index={index} key={index} />)))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServicesSection;