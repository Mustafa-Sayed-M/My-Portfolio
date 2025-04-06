import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import { useQuery } from '@tanstack/react-query';
import ProjectCard from './Components/ProjectCard';

// REPOS IDS:
const reposIds = [
    948443163, // EStatein
    948750269, // Photographer-Portfolio
    943975537, // Pinnacle-Bank
    960465622, // Quran.co
    921847559, // reset-countries-api
    948746558, // Stream-Vibe
];

const fetchRepos = async () => {
    try {
        const res = await fetch(`https://api.github.com/users/mustafa-sayed-m/repos`);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

const filterRepos = (repos) => {
    return repos.filter(repo => reposIds.includes(repo.id));
};

function ProjectsSection() {
    const { data, isLoading } = useQuery({
        queryKey: ['github_repos'],
        queryFn: fetchRepos,
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
                                .slice(0, 6)
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