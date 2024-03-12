import React from 'react'
import '../../styles/services.css';
const serviceData = [
    {
        icon:'ri-apps-line',
        title:'Machine learning',
        desc:'Lorem ipsum dolor sit amet elit. Dolor, quis rerum. Incidunt quod ullam fugiat facilis neque rerum distinctio saepe?'
    },
    {
        icon:'ri-code-s-slash-line',
        title:'Web Development',
        desc:'Lorem ipsum dolor sit amet elit. Dolor, quis rerum. Incidunt quod ullam fugiat facilis neque rerum distinctio saepe?'
    },
    {
        icon:'ri-landscape-line',
        title:'Designing',
        desc:'Lorem ipsum dolor sit amet elit. Dolor, quis rerum. Incidunt quod ullam fugiat facilis neque rerum distinctio saepe?'
    },
    {
        icon:'ri-store-2-line',
        title:'Marketing',
        desc:'Lorem ipsum dolor sit amet elit. Dolor, quis rerum. Incidunt quod ullam fugiat facilis neque rerum distinctio saepe?'
    },
]

const Services = () => {
    return (
        <section id="About">
            <div className="container">
                <div className="services__top-content">
                    <h6 className="subtitle">About Us</h6>
                    <h2>What does MaRS do?</h2>
                    <h2 className="highlight">Our Club excel in:</h2>
                </div>
                <div className="service__item-wrapper" >
                    {
                        serviceData.map((item,index)=>(
                            <div className="service__item" key={index}>
                        <span className="service__icon"><i class={item.icon}></i></span>
                        <h3 className="service__title">
                            {item.title}
                        </h3>
                        <p className="description">{item.desc}</p>
                    </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services