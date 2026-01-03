import React from 'react'

const Footer = () => {
    return (
        <footer id="footer-main">
            <div className='container text-center py-5'>
                <div className='footer-logo mb-3'>
                    fullStack.<span className="pink-accent">Secure</span>
                </div>
                <p className='footer-tagline mb-3'>
                    Building resilient systems and secure web experiences.
                </p>

                <div className="d-flex align-items-center justify-content-center gap-4 my-4">
                    <a href="https://www.linkedin.com/in/inioluwa-akintokun" target="_blank" className="footer-link" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/glowzaq" target="_blank" className="footer-link" aria-label="GitHub">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://x.com/INI_TOKUN" target="_blank" className="footer-link" aria-label="Twitter">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="mailto:inioluwaakintokun@gmail.com" className="footer-link" aria-label="Email">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>

                <p className="footer-copyright">
                    © {new Date().getFullYear()} Inioluwa Akintokun. Built with a Security-First Mindset.
                </p>
            </div>
        </footer>
    )
}

export default Footer