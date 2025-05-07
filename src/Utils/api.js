const apiUrl = 'https://my-portfolio-backend-teal.vercel.app/api';

const fetchData = async (endpoint) => {
    try {
        const res = await fetch(endpoint);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

export const fetchProfileData = async () => {
    return await fetchData(`https://my-profile-data.vercel.app/profile.json`);
};

export const fetchProjects = async () => {
    return await fetchData(`${apiUrl}/projects`);
};

export const fetchServices = async () => {
    return await fetchData(`${apiUrl}/services`);
};

export const fetchSkills = async () => {
    return await fetchData(`${apiUrl}/skills`);
};