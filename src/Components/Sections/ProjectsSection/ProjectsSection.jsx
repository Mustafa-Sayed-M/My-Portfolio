import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import { useQuery } from '@tanstack/react-query';
import ProjectCard from './Components/ProjectCard';

function ProjectsSection() {

    const { data, isLoading } = useQuery({
        queryKey: ['github_repos'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://api.github.com/users/mustafa-sayed-m/repos`);
                return await res.json();
            } catch (err) {
                console.log(err);
            }
        },
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
                            data
                                .slice(0, 9)
                                .filter(repo => (repo.id !== 960445720 && repo.id !== 616718455))
                                .sort((a, b) => b.stargazers_count - a.stargazers_count)
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