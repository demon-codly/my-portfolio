import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };

    // State to track if the page has been scrolled
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Set state to true if user scrolls more than 50px
            setIsScrolled(window.scrollY > 50);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <img src={logo} alt="Logo" className="logo" />
            <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
                <li><AnchorLink className="anchor-link" href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt="" /> : <></>}</li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;
