
import React, { useRef, useEffect } from "react";
import "./header.css";
import logo01 from '../../pictures/mars-logo.png';
const nav__link = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#About',
        display: 'About'
    },
    {
        path: '#Projects',
        display: 'Projects'
    },
    {
        path: '#Team',
        display: 'Team'
    },
    {
        path: '#Contact',
        display: 'Contact Us'
    },
]
const Header = ({ theme, toggleTheme }) => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('header__shrink')
        }
        else {
            headerRef.current.classList.remove('header__shrink')
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", headerFunc)
        return () => window.removeEventListener("scroll", headerFunc)
    }, [])
    const handleClick = e => {
        e.preventDefault()
        const targetAttr = e.target.getAttribute("href");
        const location = document.querySelector(targetAttr).offsetTop;
        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    };
    const toggleMenu = () => menuRef.current.classList.toggle('menu__active')
    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="nav__wrapper">
                    <div className="logo">
                        <img src={logo01} alt="mars-logo" />
                    </div>
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu">
                            {
                                nav__link.map((item, index) => (
                                    <li className="menu__item" key={index}> <a href={item.path} onClick={handleClick} className="menu__link">
                                        {item.display}
                                    </a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="light__mode">
                        <span onclick={toggleTheme}>
                            {
                                theme === "light-mode" ? (<span><i class="ri-moon-line"></i>Dark</span>) : (<span><i class="ri-sun-line"></i>Light</span>)
                            }
                        </span>
                    </div>
                    <span className="mobile__menu" onClick={toggleMenu}>
                        <i class="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </header>
    );
}
export default Header;