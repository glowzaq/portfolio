import React from 'react'
import recipe from '../assets/images/recipe.png'
import portweb from '../assets/images/portweb.png'
import firebase from '../assets/images/firebase.png'
import prints from '../assets/images/prints.png'
import recharge from '../assets/images/recharge.png'
import multi from '../assets/images/multi.png'

const Projects = () => {
    return (
        <div id='projects' className='container py-5'>
            <div className="text-center mb-5">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Selected Works & Technical Case Studies</p>
            </div>

            <div className="row g-4 justify-content-center">
                {/* Project 1: GlowCart */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card project-card h-100">
                        <div className="project-img-container">
                            <img src={recharge} className="card-img-top" alt="GlowCart" />
                        </div>
                        <div className="card-body d-flex flex-column">
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <h5 className="project-title">GlowCart E-Commerce</h5>
                                <span className='tech-badge'>SaaS</span>
                            </div>
                            <p className="project-text">
                                A multi-vendor marketplace featuring secure vendor dashboards, real-time inventory management,
                                and Stripe integration. Architected for scalability with a focus on session security and data integrity.
                            </p>
                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                <div className="tech-stack-icons">
                                    <i className="fa-brands fa-react"></i>
                                    <i className='fa-brands fa-node-js'></i>
                                    <i className="fa-solid fa-database"></i>
                                    <i className="fa-brands fa-stripe"></i>
                                </div>
                                <a href="https://github.com/glowzaq/glowcart" className="project-link">
                                    Source <i className="fa-solid fa-arrow-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 2: HireAI */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card project-card h-100">
                        <div className="project-img-container">
                            <img src={multi} className="card-img-top" alt="HireAI" />
                        </div>
                        <div className="card-body d-flex flex-column">
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <h5 className="project-title">HireAI Job Board</h5>
                                <span className='tech-badge'>AI / MERN</span>
                            </div>
                            <p className="project-text">
                                An AI-enhanced Applicant Tracking System with personalized job recommendations and
                                real-time status updates. Implements robust role-based access control (RBAC) for recruiters and candidates.
                            </p>
                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                <div className="tech-stack-icons">
                                    <i className="fa-brands fa-react"></i>
                                    <i className='fa-brands fa-node-js'></i>
                                    <i className="fa-solid fa-brain"></i>
                                </div>
                                <a href="https://github.com/glowzaq/HireAI" className="project-link">
                                    Source <i className="fa-solid fa-arrow-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project 3: GlowBank */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card project-card h-100">
                        <div className="project-img-container">
                            <img src={firebase} className="card-img-top" alt="GlowBank" />
                        </div>
                        <div className="card-body d-flex flex-column">
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                                <h5 className="project-title">GlowBank App</h5>
                                <span className='tech-badge'>Fintech</span>
                            </div>
                            <p className="project-text">
                                A secure digital banking platform featuring fund transfers, transaction history, and
                                account management. Built with end-to-end encryption and MFA to demonstrate security-first banking principles.
                            </p>
                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                <div className="tech-stack-icons">
                                    <i className="fa-brands fa-react"></i>
                                    <i className="fa-solid fa-shield-halved"></i>
                                    <i className="fa-solid fa-vault"></i>
                                </div>
                                <a href="https://github.com/glowzaq/glowbank" className="project-link">
                                    Source <i className="fa-solid fa-arrow-right ms-1"></i>
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