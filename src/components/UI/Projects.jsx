import React from 'react'
import '../../styles/projects.css';
import project01 from '../../pictures/project-01.avif'
import project02 from '../../pictures/project-02.jpg'
import project03 from '../../pictures/project-03.jpg'


const projectData = [
    {
        ImgUrl: project01,
        title: 'IOT ChatBot',
        desc: 'To know more about the projects,visit our github page... ',
        linkUrl: 'https://github.com/marsiitr/IoT-ChatBot.git'
    },
    {
        ImgUrl: project02,
        title: 'Social Distancing Checker',
        desc: 'To know more about the projects,visit our github page... ',
        linkUrl: 'https://github.com/marsiitr/Social-Distance-Checker.git'
    },
    {
        ImgUrl: project03,
        title: 'SmartWatch',
        desc: 'To know more about the projects,visit our github page... ',
        linkUrl: 'https://github.com/marsiitr/Smartwatch.git'
    },
]
const Projects = () => {
    return (
        <section className="projects" id="Projects">
            <div className="container">
                <div className="project__top-content">
                    <h6 className="subtitle">Our Projects</h6>
                    <h2>
                        Let's have a look from our
                        <span className='highlight'> projects </span>
                    </h2>
                </div>
                <div className="project__wrapper">
                    {
                        projectData.map((item, index) => (
                            <div className="project__item" key={index}>
                                <h3>{item.title}</h3>
                                <div className="project__img">
                                    <img src={item.ImgUrl} alt="project__image" />
                                </div>
                                <p className="description project__desc">{item.desc}</p>
                                <div>
                                    <a href={item.linkUrl} className="learn__more"><i class="ri-arrow-right-line"></i></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects