import React from 'react'
import recipe from '../assets/images/recipe.png'
import portweb from '../assets/images/portweb.png'
import firebase from '../assets/images/firebase.png'
import prints from '../assets/images/prints.png'
import recharge from '../assets/images/recharge.png'
import multi from '../assets/images/multi.png'

const Projects = () => {
    return (
        <div id='projects' className='container py-5 text-center'>
            <h2 style={{ fontSize: '48px', fontWeight: '700', color: '#dd557f' }}>Featured Projects</h2>
            <p style={{ fontSize: '20px', fontWeight: '400', color: '#4B5563' }}>A showcase of my favorite creations</p>

            <div className="row mt-5 g-4 justify-content-center">
                {/* Project 1: GlowCart E-Commerce */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card shadow-sm border-0 h-100 recharge-card text-center mx-auto">
                        <img src={recharge} className="card-img-top" alt="GlowCart" />
                        <div className="card-body d-flex flex-column">
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <h5 className="card-title" style={{ fontSize: '' }}>GlowCart E-Commerce</h5>
                                <span className='badge rounded-pill recharge-tag'>SaaS</span>
                                {/* <span className='badge rounded-pill recharge-tag' style={{ backgroundColor: '#ff6b9d' }}>MERN</span> */}
                            </div>
                            <p className="card-text flex-grow-1">A multi-vendor e-commerce platform where customers can browse and order products, sellers manage inventory and listings, and a super admin oversees the entire marketplace. Built with secure authentication, real-time updates, and a responsive shopping experience.</p>
                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                <div className="recharge-icons">
                                    <i className="fa-brands fa-react"></i>
                                    <i className='fa-brands fa-node-js'></i>
                                    <i className="fa-solid fa-database"></i>
                                    <i className="fa-brands fa-stripe"></i>
                                </div>
                                <a href="https://github.com/glowzaq/glowcart" className="recharge-project">
                                    View Repository <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 2: HireAI */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card shadow-sm border-0 h-100 multi-card text-center mx-auto">
                        <img src={multi} className="card-img-top" alt="HireAI" />
                        <div className="card-body d-flex flex-column">
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <h5 className="card-title">HireAI - ATS Job Board</h5>
                                <span className='badge rounded-pill hireglow-tag' style={{ backgroundColor: '#008080' }}>SaaS</span>
                                <span className='badge rounded-pill hireglow-tag2' style={{ backgroundColor: '#008080' }}>AI</span>
                            </div>
                            <p className="card-text flex-grow-1">A modern AI-enhanced Applicant Tracking System and job platform where candidates discover tailored job listings and employers effortlessly post and manage roles. Developed using the MERN stack, it features real-time search, personalized recommendations, secure user authentication, and a responsive dashboard for both job seekers and recruiters.</p>
                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                <div className="multi-icons">
                                    <i className="fa-brands fa-react" style={{ color: '#006666' }}></i>
                                    <i className='fa-brands fa-node-js' style={{ color: '#006666' }}></i>
                                    <i className="fa-solid fa-database" style={{ color: '#006666' }}></i>
                                    <i className="fa-solid fa-brain" style={{ color: '#006666' }}></i>
                                </div>
                                <a href="https://github.com/glowzaq/HireAI" className="multi-project" style={{ color: '#006666' }}>
                                    View Repository <i className="fa-solid fa-arrow-right" style={{ color: '#006666' }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 3: GlowBank Mobile */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card shadow-sm border-0 h-100 glowbank-card text-center mx-auto">
                        <img src={firebase} className="card-img-top" alt="GlowBank mobile banking app" />
                        <div className="card-body d-flex flex-column">
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <h5 className="card-title">GlowBank App</h5>
                                <div className="d-flex gap-2">
                                    <span className='badge rounded-pill glowbank-tag' style={{ backgroundColor: '#4a90e2' }}>Fintech</span>
                                    <span className='badge rounded-pill glowbank-tag2' style={{ backgroundColor: '#4a90e2' }}>Full-Stack</span>
                                </div>
                            </div>
                            <p className="card-text flex-grow-1">
                                A secure web-based digital banking platform that enables users to manage accounts, transfer funds, pay bills, view transaction history, and monitor finances. Features robust authentication, real-time updates, and a responsive dashboard designed for seamless banking from any device.
                            </p>
                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                <div className="glowbank-icons">
                                    <i className="fa-brands fa-react" style={{ color: '#4a90e2' }}></i>
                                    <i className="fa-brands fa-node-js" style={{ color: '#4a90e2' }}></i>
                                    <i className="fa-solid fa-database" style={{ color: '#4a90e2' }}></i>
                                    <i className="fa-solid fa-desktop" style={{ color: '#4a90e2' }}></i>
                                    <i className="fa-solid fa-shield-halved" style={{ color: '#4a90e2' }}></i>
                                </div>
                                <a href="https://github.com/glowzaq/glowbank" target="_blank" rel="noopener noreferrer" className="glowbank-project">
                                    View Repository <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 4: Web Clone */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card shadow-sm border-0 h-100 fireauth-card text-center mx-auto">
                        <img src={prints} className="card-img-top" alt="Web Clone" />
                        <div className="card-body d-flex flex-column">
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <h5 className="card-title">Web Clone</h5>
                                <span className='badge rounded-pill fireauth-tag' style={{ backgroundColor: '#e8b923'}}>Backend</span>
                            </div>
                            <p className="card-text flex-grow-1">A backend-focused Firebase Authentication system designed to manage secure user sign-up and login. It leverages Firebase’s authentication services with email/password and Google sign-in methods, ensuring protected access and seamless user verification for web apps.</p>
                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                <div className="fireauth-icons">
                                    <i className="fab fa-js-square"></i>
                                    <i className='fas fa-fire'></i>
                                    <i className="fas fa-database"></i>
                                </div>
                                <a href="https://level-2-project.vercel.app/" className="fireauth-project">
                                    View Project <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 5: Portfolio Website */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card shadow-sm border-0 h-100 portfolio-card text-center mx-auto">
                        <img src={portweb} className="card-img-top" alt="Portfolio" />
                        <div className="card-body d-flex flex-column">
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <h5 className="card-title">Portfolio Website</h5>
                                <span className='badge rounded-pill portfolio-tag'>Full-Stack</span>
                            </div>
                            <p className="card-text flex-grow-1">A sleek and responsive portfolio website built with React, Node.js, and MongoDB. It showcases my projects, skills, and professional journey with smooth animations, reusable components, and a dynamic backend for managing content effortlessly.</p>
                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                <div className="portfolio-icons">
                                    <i className="fa-brands fa-react"></i>
                                    <i className='fa-brands fa-node-js'></i>
                                    <i className="fa-solid fa-database"></i>
                                </div>
                                <a href="https://level-2-project.vercel.app/" className="portfolio-project">
                                    View Project <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 6: Recipe Finder App */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card shadow-sm border-0 h-100 recipe-card text-center mx-auto">
                        <img src={recipe} className="card-img-top" alt="Recipe Finder app" />
                        <div className="card-body d-flex flex-column">
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <h5 className="card-title">CookCompass</h5>
                                <div className="d-flex gap-2">
                                    <span className='badge rounded-pill recipe-tag' style={{ backgroundColor: '#b77ceb' }}>Full-Stack</span>
                                    <span className='badge rounded-pill recipe-tag2' style={{ backgroundColor: '#b77ceb' }}>API</span>
                                </div>
                            </div>
                            <p className="card-text flex-grow-1">
                                A delicious recipe discovery app powered by TheMealDB API. Users can sign up, log in, search meals, view detailed recipes with ingredients and steps, bookmark favorites, and manage their profile, all with secure Firebase authentication and real-time data.
                            </p>
                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                <div className="recipe-icons">
                                    <i className="fa-brands fa-js" style={{ color: '#b77ceb' }}></i>
                                    <i className="fa-brands fa-html5" style={{ color: '#b77ceb' }}></i>
                                    <i className="fa-brands fa-css3-alt" style={{ color: '#b77ceb' }}></i>
                                    <i className="fas fa-fire" style={{ color: '#b77ceb' }}></i>
                                </div>
                                <a href="https://level-2-project.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#b77ceb' }} className="recipe-project">
                                    View Project <i className="fa-solid fa-arrow-right" style={{ color: '#b77ceb' }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects