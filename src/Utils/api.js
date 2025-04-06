export const a = '';
export const githubRowUrl = 'https://raw.githubusercontent.com';
const profileDataUrl = `https://my-profile-data.vercel.app`;
const reposUrl = `https://api.github.com/users/mustafa-sayed-m/repos`;

const fetchData = async (endpoint) => {
    try {
        const res = await fetch(endpoint);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

export const fetchSocialProfiles = async () => {
    return await fetchData(`${profileDataUrl}/social_profiles.json`);
};

export const fetchSkills = async () => {
    return await fetchData(`${profileDataUrl}/skills.json`);
};

export const fetchRepos = async () => {
    return await fetchData(reposUrl);
};

export const fetchTechnologies = async (full_name) => {
    return await fetchData(`${githubRowUrl}/${full_name}/main/technologies.json`);
}