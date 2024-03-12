import React from 'react'
import '../../styles/about.css'
import aboutImg from '../../pictures/about-us.jpg';

const chooseData = [
    {
        icon: 'ri-team-line',
        title: 'Our Team',
        desc: ' Lorem ipsum dolor sit amet corum voluptas possimus deleniti ipsum delectus doloribus? Iure, explicabo voluptas?'
    },
    {
        icon: 'ri-customer-service-2-fill',
        title: '24*7 Support',
        desc: ' Lorem ipsum dolor sit amet consectevoluptas possimus deleniti ipsum delectus doloribus? Iure, explicabo voluptas?'
    },
]
const About = () => {
    return (
        <section id="About">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__content">
                        <h6 className="subtitle">Why choose us?</h6>
                        <h2>Model and Robotics Section</h2>
                        <h2 className="highlight">MaRS,IIT-Roorkee</h2>
                        <p className="description about__content-desc">
                        Models and Robotics Section, a.k.a MaRS, is a group open for all Robotics enthusiasts at the Indian Institute Of Technology–Roorkee. We provide a perfect platform for students to develop innovative and technical skills such as mechanical, electronics, Autonomous navigation, and architecture to create things that simplify life. 
                        </p>
                        <div className='choose__item-wrapper'>
                            {
                                chooseData.map((item, index) => (
                                    <div className="choose__us-item" key={index}>
                                        <span className="choose__us-icon"><i className={item.icon}></i></span>
                                        <div>
                                            <h4 className="choose__us-title">{item.title}</h4>
                                            <p className="description">{item.desc}</p>  
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="about__img"><img src={aboutImg} alt="about-image" /></div>
                </div>
            </div>
        </section>
    )
}
export default About
