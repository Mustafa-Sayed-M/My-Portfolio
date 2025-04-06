import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import SkillCard from './Components/SkillCard';
import { useQuery } from '@tanstack/react-query';
import { fetchSkills } from '../../../Utils/api';

function SkillsSection() {

    const { data, isLoading } = useQuery({
        queryKey: ['skills'],
        queryFn: fetchSkills,
        refetchOnWindowFocus: false
    });

    return (
        <section className='skills-section point-light' id='skills'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    title={`My Skills`}
                    description={`Key technologies and tools I specialize in.`}
                />
                {/* Skills Cards */}
                <div className='skills-cards grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {
                        isLoading ? (
                            <>Loading...</>
                        ) : (
                            (data || []).map((skill, index) => (<SkillCard skillData={skill} index={index} key={index} />))
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;