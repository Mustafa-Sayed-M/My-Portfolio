const baseUrl = 'https://my-profile-data.vercel.app';

const fetchData = async (endpoint) => {
    try {
        const res = await fetch(endpoint);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

export const fetchProfileData = async () => {
    return await fetchData(`${baseUrl}/profile.json`);
};

export const fetchSkills = async () => {
    return await fetchData(`${baseUrl}/skills.json`);
};

export const fetchProjects = async () => {
    return await fetchData(`${baseUrl}/projects.json`);
};