import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import { useQuery } from '@tanstack/react-query';
import ProjectCard from './Components/ProjectCard';
import { fetchProjects } from '../../../Utils/api';

// REPOS IDS:
const reposIds = [
    1, // EStatein
    2, // Photographer-Portfolio
    3, // Pinnacle-Bank
    4, // Quran.co
    5, // reset-countries-api
    6, // Stream-Vibe
];

const filterRepos = (repos) => {
    return repos.filter(repo => reposIds.includes(repo.id));
};

function ProjectsSection() {
    const { data, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
        refetchOnWindowFocus: false
    });

    return (
        <section className='projects-section point-light min-h-screen' id='projects'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    title={`My Projects`}
                    description={`Showcasing my latest web development works.`}
                />
                {/* Projects Cards */}
                <div className='projects-cards grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {
                        isLoading ? (
                            <>Loading...</>
                        ) : (
                            (filterRepos(data) || [])
                                .map((repo, index) => (
                                    <ProjectCard projectData={repo} index={index} key={index} />
                                ))
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;