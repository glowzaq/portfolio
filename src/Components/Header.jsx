import React from 'react'
import portfolio from '../assets/images/portfolio.png'

const Header = () => {
    return (
        <header id='header'>
            <div className='container text-center pt-5' id='portfolio-header'>
                <div className='profile-image'>
                    <img src={portfolio} alt="Inioluwa Akintokun" className='img-fluid rounded-circle' />
                </div>
                <h1>Inioluwa Akintokun</h1>
                <p id='tag'>Building Resilient Applications with a Security-First Mindset</p>
                <p id='desc'>Full-Stack Engineer specialized in architecting high-performance systems where security isn't an afterthought, it's the foundation.</p>
                <div className='mb-5 d-grid gap-3 d-md-flex justify-content-md-center mt-5'>
                    <a href="#projects"><button id='view'>See Projects</button></a>
                    <a href="/cv/Inioluwa-Akintokun-CV.pdf" target="_blank" rel="noopener noreferrer">
                        <button id='cv'>View CV</button>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header