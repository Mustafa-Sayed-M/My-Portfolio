import React from 'react';
import DownloadCv from '../../../Atoms/DownloadCv';

function AboutTextContent() {
    return (
        <div className='about-text-content lg:col-span-2'>
            <p className='bg-purple-color rounded-md p-1 w-fit selection:bg-white selection:text-purple-color' data-aos='fade'>About Me</p>
            <h3 className='text-lg font-semibold my-2' data-aos='fade' data-aos-delay={100}>Hello, I'm Mustafa 👋</h3>
            {/* Text Pieces */}
            <div className='text-pieces space-y-5 mb-5'>
                <p data-aos='fade' data-aos-delay={150}>
                    A passionate <span className='text-purple-500 font-medium'>Front-End Developer</span> with expertise in
                    <span className='text-purple-500 font-medium'> React.js</span> and <span className='text-purple-500 font-medium'>Tailwind CSS</span>.
                    I specialize in building modern, responsive, and high-performance web applications, ensuring smooth
                    user experiences and clean, maintainable code.
                </p>

                <p data-aos='fade' data-aos-delay={200}>
                    I have hands-on experience with state management using<span className='text-purple-500 font-medium'> Redux Toolkit </span>
                    and have worked with backend services like<span className='text-purple-500 font-medium'> Strapi </span>
                    to build full-stack applications. I also integrate authentication solutions such as
                    <span className='text-purple-500 font-medium'> Clerk </span>to enhance security and user management.
                </p>

                <p data-aos='fade' data-aos-delay={150}>
                    In addition to front-end development, I enjoy experimenting with UI/UX design, optimizing performance,
                    and continuously improving my skills by working on real-world projects. My goal is to create web experiences
                    that are not only visually appealing but also fast and accessible.
                </p>

                <p data-aos='fade' data-aos-delay={200}>
                    Feel free to explore my projects and get in touch if you'd like to collaborate! 🚀
                </p>
            </div>
            {/* Links */}
            <div className='flex sm:items-center gap-5 max-sm:flex-col *:text-center'>
                {/* Download Cv */}
                <div className='download-cv-container' data-aos='fade' data-aos-delay={250}>
                    <DownloadCv />
                </div>
                {/* Go To Projects */}
                <a
                    href='#projects'
                    data-aos='fade' data-aos-delay={300}
                    title='Go To Projects Section'
                    onClick={(e) => {
                        e.preventDefault();
                        const sectionEle = document.getElementById('projects');
                        if (sectionEle) {
                            sectionEle.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            })
                        }
                    }}
                    className='block py-2 px-4 rounded-full border-2 text-purple-color border-purple-color sm:hover:bg-purple-color font-medium sm:hover:text-white transition'
                >
                    <i className="fa-solid fa-diagram-project fa-fw me-2"></i>
                    <span>View My Projects</span>
                </a>
            </div>
        </div>
    )
}

export default AboutTextContent;