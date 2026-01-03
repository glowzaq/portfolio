import React from 'react'

const Nav = () => {
    const closeNav = () => {
        const navCollapse = document.getElementById('navbarSupportedContent');
        if (navCollapse.classList.contains('show')) {
            navCollapse.classList.remove('show');
        }
    };
    return (
        <nav id='nav' className="navbar navbar-expand-lg px-5">
            <div className="container-fluid">
                <a id='logo' className="navbar-brand" href="#">
                    fullStack.<span className="pink-accent">Secure</span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end gap-5" id="navbarSupportedContent">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <a className="nav-link pe-5" href="#about" onClick={closeNav}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pe-5" href="#skills-section" onClick={closeNav}>Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pe-5" href="#projects" onClick={closeNav}>Projects</a>
                        </li>
                    </ul>
                    <a href="#contact" onClick={closeNav}>
                        <button id='contactBtn' type="button">Contact</button>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav