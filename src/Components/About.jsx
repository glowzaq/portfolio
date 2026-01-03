import React from 'react'
import port from '../assets/images/port.png'

const About = () => {
    return (
        <section className='py-5 container text-center bg-white'>
            <div>
                <h2 className='about-header' id='about'>About Me</h2>
                <p id='about-p'>Fullstack Engineer specializing in secure and scalable web architecture.</p>
            </div>
            <div className='row align-items-center text-md-start text-center justify-content-evenly mt-5'>
                <div id='about-div' className="col-md-6 mb-4 mb-md-0">
                    <p>I am a Fullstack Developer with a specialized focus on Application Security, dedicated to building software that is resilient by design. My path to engineering was unconventional: I transitioned from a background in Crop Science, where I developed a rigorous approach to systems analysis and problem-solving. Today, I apply that same methodical mindset to architecting secure, scalable web applications.
                    </p>
                    <p>I don’t just build features, I build "Security-First" systems. I believe a seamless user experience is only successful if the underlying data is protected. My technical expertise spans the full MERN stack, complemented by a deep commitment to defensive programming, implementing robust authentication, strict input validation, and protection against OWASP Top 10 vulnerabilities.</p>
                    <ul className="flex gap-3">
                        <li className="skill-tag tag-frontend me-2">Fullstack Engineering</li>
                        <li className="skill-tag tag-security me-2">Application Security</li>
                        <li className="skill-tag tag-logic">Systems Thinking</li>
                    </ul>
                    <div className="text-center mt-5">
                        <a href="/cv/Inioluwa-Akintokun-CV.pdf" target='_blank' rel='noopener noreferrer'>
                            <button id='cv-download'>View CV 📄</button>
                        </a>
                    </div>
                </div>
                <img id='about-img' src={port} alt="Inioluwa Akintokun - Fullstack Developer and Security Enthusiast" className='img-fluid' />
            </div>
        </section>
    )
}

export default About