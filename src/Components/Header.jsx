import React from 'react'
import portfolio from '../assets/images/portfolio.png'

const Header = () => {
    return (
        <header style={{ backgroundColor: '#f8e2ee' }} id='header'>
            <div className='container text-center pt-5' id='portfolio-header'>
                <div className='profile-image'>
                    <img src={portfolio} alt="portfolio_png" className='img-fluid rounded-circle' />
                </div>
                <h1>Inioluwa Akintokun</h1>
                <p id='tag'>Building Resilient Applications with a Security-First Mindset</p>
                <p id='desc'>Full-Stack Engineer specialized in architecting high-performance systems where security isn't an afterthought, it's the foundation.</p>
                <div className='mb-5 mt-5'>
                    <a href="#projects"><button id='view' className='me-3'>See Projects</button></a>
                    <a href="#contact"><button id='cv'>Hire Me</button></a>
                </div>
                <i id='fa-solid' className="fa-solid fa-arrow-down-long mb-5"></i>
            </div>
        </header>
    )
}

export default Header