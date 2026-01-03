import React from 'react'

const Skills = () => {
    return (
        <section id="skills-section">
            <div className='container py-5 text-center'>
                <h2 id='skills-title'>Skills & Expertise</h2>
                <p id='skills-subtitle'>
                    My specialized toolkit for architecting secure and scalable web applications.
                </p>

                <div className='row mt-5 g-4 justify-content-center'>
                    {/* Development Card */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 skill-card">
                            <div className='text-center mt-4'>
                                <div className="icon-box dev-icon">
                                    <i className="fa-solid fa-code"></i>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="skill-card-title">Development</h5>
                                <ul className="skill-list">
                                    <li><span>React & Angular</span> <div className="dot-rating dev">•••••</div></li>
                                    <li><span>Node.js & Express</span> <div className="dot-rating dev">•••••</div></li>
                                    <li><span>PHP & MongoDB</span> <div className="dot-rating dev">••••◦</div></li>
                                    <li><span>Tailwind & Bootstrap</span> <div className="dot-rating dev">•••••</div></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Security Card */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 skill-card featured-skill">
                            <div className='text-center mt-4'>
                                <div className="icon-box security-icon">
                                    <i className="fa-solid fa-user-shield"></i>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="skill-card-title">Security</h5>
                                <ul className="skill-list">
                                    <li><span>Secure Auth (JWT/OAuth)</span> <div className="dot-rating sec">•••••</div></li>
                                    <li><span>OWASP Principles</span> <div className="dot-rating sec">•••••</div></li>
                                    <li><span>Hashing & Encryption</span> <div className="dot-rating sec">•••••</div></li>
                                    <li><span>XSS & SQLi Defense</span> <div className="dot-rating sec">•••••</div></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Design Card */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 skill-card">
                            <div className='text-center mt-4'>
                                <div className="icon-box design-icon">
                                    <i className="fa-solid fa-palette"></i>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="skill-card-title">Design</h5>
                                <ul className="skill-list">
                                    <li><span>UI/UX Design</span> <div className="dot-rating des">••••◦</div></li>
                                    <li><span>Layout & Composition</span> <div className="dot-rating des">•••••</div></li>
                                    <li><span>Web Accessibility</span> <div className="dot-rating des">••••◦</div></li>
                                    <li><span>Figma & Adobe CC</span> <div className="dot-rating des">••••◦</div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills