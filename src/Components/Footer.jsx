import React from 'react'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#111827' }}>
            <div className='container text-center py-5'>
                <div className='mb-3' style={{ fontSize: '30px', fontWeight: '700', color: '#e05781' }}>fullStack.Secure</div>
                <p className='mb-3' style={{ fontSize: '16px', fontWeight: '400', color: '#9CA3AF' }}>Crafting secure, beautiful web experiences ✨</p>
                <div className="d-flex align-items-center justify-content-center gap-5 my-4">
                    <a href="https://www.linkedin.com/in/inioluwa-akintokun" target="_blank" className="linkedin-icon" aria-label="LinkedIn Profile">
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                    </a>
                    <a href="https://github.com/glowzaq" target="_blank" className="github-icon" aria-label="GitHub Profile">
                        <i className="fa-brands fa-github fa-lg"></i>
                    </a>
                    <a href="https://x.com/INI_TOKUN" target="_blank" className="twitter-icon" aria-label="Twitter Profile">
                        <i className="fa-brands fa-x-twitter fa-lg"></i>
                    </a>
                    <a href="mailto:inioluwaakintokun@gmail.com" className="email-icon" aria-label="Email Inioluwa">
                        <i className="fa-solid fa-envelope fa-lg"></i>
                    </a>
                </div>
                <p style={{ fontSize: '14px', fontWeight: '400', color: '#6B7280' }}>© 2025 Inioluwa Akintokun. Made with 💖 and lots of coffee</p>
            </div>
        </div>
    )
}

export default Footer