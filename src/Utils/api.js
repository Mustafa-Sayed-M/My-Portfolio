const apiUrl = 'https://my-portfolio-backend-teal.vercel.app/api';

const fetchData = async (endpoint) => {
    try {
        const res = await fetch(`${apiUrl}${endpoint}`);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

export const fetchProfileData = async () => {
    return await fetchData(`/profile`);
};

export const fetchProjects = async () => {
    return await fetchData(`/projects`);
};

export const fetchServices = async () => {
    return await fetchData(`/services`);
};

export const fetchSkills = async () => {
    return await fetchData(`/skills`);
};