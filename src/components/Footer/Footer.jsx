import React from 'react'
import '../Footer/footer.css'
const quickLinks01 = [
    {
        path:'https://www.instagram.com/mars_iitr/',
        icon:'ri-instagram-line'
    },
    {
        path:'https://discord.com/invite/jajRwPvnCB',
        icon: 'ri-discord-line'
    },
    {
        path:'https://github.com/marsiitr',
        icon:'ri-github-fill'
    },
    {
        path:'https://www.linkedin.com/company/marsiitrookee/',
        icon:'ri-linkedin-box-line'
    },
    {
        path:'https://www.youtube.com/channel/UCpmWMaJXu_j6YTIH8905V9Q',
        icon:'ri-youtube-fill'
    },
]
const Footer = () => {
    return (
        <footer className="footer" id="Contact">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <h2>MaRS.IITR</h2>
                        <p className="description text-big">Chat with us on any of the following page:</p>
                        <p className="small__text description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quo dolorem harum modi iure incidunt impedit aspernatur unde quae ullam!</p>
                    </div>
                    <div className="footer__quick-links">
                        <div className="quick__links-title">Connect With Us</div>
                        <ul className="quick__links">
                            {
                                quickLinks01.map((item,index)=>(
                                    <li className="quick__link-item"><a href={item.path}><i className={item.icon}></i></a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer