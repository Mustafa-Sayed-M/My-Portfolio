import React from 'react';

function DownloadCv() {
    return (
        <a
            target='_blank'
            rel="noreferrer"
            href={`https://raw.githubusercontent.com/mustafa-sayed-m/my-portfolio-backend/master/files/cv.pdf`}
            className='block text-center py-2 px-8 rounded-full border-2 border-purple-color text-purple-color font-medium transition sm:hover:bg-purple-color sm:hover:text-white'
        >
            <i className="fa-solid fa-file-arrow-down fa-fw me-2"></i>
            <span>Download Cv</span>
        </a>
    )
}

export default DownloadCv;