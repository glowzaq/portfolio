import React from 'react'

const Nav = () => {
    return (
        <nav style={{ backgroundColor: '#f8e2ee' }} id='nav' className="navbar navbar-expand-lg bg-body-transparent px-5">
            <div className="container-fluid">
                <a id='logo' className="navbar-brand" href="#">fullStack.Secure</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end gap-5" id="navbarSupportedContent">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <a className="nav-link pe-5" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pe-5" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pe-5" href="#projects">Projects</a>
                        </li>
                    </ul>
                    <a href="#contact"><button id='contactBtn' type="submit">Contact</button></a>
                </div>
            </div>
        </nav>
    )
}

export default Nav