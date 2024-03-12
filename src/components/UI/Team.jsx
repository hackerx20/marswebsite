import React from 'react'
import '../../styles/team.css'
import team01 from '../../pictures/team-01.png'
import team02 from '../../pictures/team-02.png'
import team03 from '../../pictures/team-03.png'
const teamMembers = [
    {
        imgUrl: team01,
        name: 'President',
        position: 'Sr. product Developer'
    },
    {
        imgUrl: team02,
        name: 'Mechanical Head',
        position: 'Mechanical Engg.'
    },
    {
        imgUrl: team03,
        name: 'Marketing head',
        position: 'Marketing  & Designing'
    },
    {
        imgUrl: team02,
        name: 'Electrical Head',
        position: 'Electrical Engg.'
    },
]
const Team = () => {
    return (
        <section className="our__team" id="Team">
            <div className="container">
                <div className="team__content">
                    <h6 className="subtitle">
                        Our Team
                    </h6>
                    <h2>
                        Meet with <span className="highlight">our team</span>
                    </h2>
                </div>
                <div className="team__wrapper">
                    {
                        teamMembers.map((item, index) => (
                            <div className="team__item"  key={index}>
                                <div className="team__img">
                                    <img src={item.imgUrl} alt="team-img" />
                                </div>
                                <div className="team__details">
                                    <h4>{item.name}</h4>
                                    <p className="description">{item.position}</p>
                                    <div className="team__member-social">
                                        <span><i class="ri-linkedin-box-line"></i></span>
                                        <span><i class="ri-twitter-x-line"></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team