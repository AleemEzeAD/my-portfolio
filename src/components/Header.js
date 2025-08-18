import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/images/logo.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    return (
        <header>
            <Container>
                <div className="d-flex justify-content-between align-items-center CustomNav">

                    {/* Logo */}
                    <a href="#home" className="DesktopLogo">
                        <img src={Logo} alt="Logo icon" />
                    </a>

                    {/* Top Navigation */}
                    <nav className="d-lg-block d-none">
                        <ul className="nav">
                            <li className="nav-item"><a href="#home">Home</a></li>
                            <li className="nav-item"><a href="#introduction">Introduction</a></li>
                            <li className="nav-item"><a href="#skills">Skills</a></li>
                            <li className="nav-item"><a href="#projects">Projects</a></li>
                            <li className="nav-item"><a href="#education">Education</a></li>
                            <li className="nav-item"><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="HeaderBtns d-flex align-items-center gap-2">
                        <a href="#" className="hover1">Login</a>
                        <a href="#" className="hover2">Login Out</a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="menu-toggle d-lg-none d-flex hover1" onClick={() => setIsOpen(true)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    {/* Sidebar */}
                    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                        <div className="d-flex justify-content-between align-items-center">
                            <a href="#home" className="sidebar-logo">
                                <img src={Logo} alt="Logo icon" />
                            </a>
                            <button className="close-btn hover1" onClick={() => setIsOpen(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>

                        <nav className="sidebar-nav">
                            <ul className="sidebar-menu">
                                <li><a href="#home" className="sidebar-link">Home</a></li>
                                <li><a href="#introduction" className="sidebar-link">Introduction</a></li>
                                <li><a href="#skills" className="sidebar-link">Skills</a></li>
                                <li><a href="#projects" className="sidebar-link">Projects</a></li>
                                <li><a href="#education" className="sidebar-link">Education</a></li>
                                <li><a href="#contact" className="sidebar-link">Contact</a></li>
                            </ul>
                        </nav>
                    </aside>

                    {/* Overlay for Sidebar */}
                    {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

                </div>
            </Container>
        </header>
    );
}

export default Header;
