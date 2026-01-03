import React from 'react'

const Skills = () => {
    return (
        <section style={{ backgroundColor: '#fcf3fb' }}>
            <div className='container py-5 text-center'>
                <h2 id='skills' style={{ fontSize: '48px', fontWeight: '700', color: '#db547d' }}>
                    Skills & Expertise
                </h2>
                <p style={{ fontSize: '20px', fontWeight: '400', color: '#4B5563' }}>
                    My technical toolkit for building amazing things
                </p>

                {/* Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
                <div className='row mt-5 g-4 justify-content-center'>
                    {/* Development Card */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className='text-center mt-3'>
                                <i
                                    className="fa-solid fa-code"
                                    style={{
                                        color: '#ffffff',
                                        borderRadius: '50px',
                                        backgroundColor: '#db7bd9',
                                        padding: '30px'
                                    }}
                                ></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Development</h5>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-7 col-sm-8 text-start">
                                        <span>React & Angular</span>
                                    </div>
                                    <div className="col-5 col-sm-4 text-end">
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                    </div>
                                </div>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-7 col-sm-8 text-start">
                                        <span>Node.js & Express</span>
                                    </div>
                                    <div className="col-5 col-sm-4 text-end">
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                    </div>
                                </div>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-7 col-sm-8 text-start">
                                        <span>PHP & Mongo DB</span>
                                    </div>
                                    <div className="col-5 col-sm-4 text-end">
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                    </div>
                                </div>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-7 col-sm-8 text-start">
                                        <span>Bootstrap/Tailwind</span>
                                    </div>
                                    <div className="col-5 col-sm-4 text-end">
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#db7bd9' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Card */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className='text-center mt-3'>
                                <i
                                    className="fa-solid fa-user-shield"
                                    style={{
                                        color: '#ffffff',
                                        borderRadius: '50px',
                                        backgroundColor: '#db7bd9',
                                        padding: '30px'
                                    }}
                                ></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Security</h5>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-7 col-sm-8 text-start">
                                        <span>Secure Authentication</span>
                                    </div>
                                    <div className="col-5 col-sm-4 text-end">
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                    </div>
                                </div>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-7 col-sm-8 text-start">
                                        <span>OWASP</span>
                                    </div>
                                    <div className="col-5 col-sm-4 text-end">
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                    </div>
                                </div>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-7 col-sm-8 text-start">
                                        <span>Hashing/Encryption</span>
                                    </div>
                                    <div className="col-5 col-sm-4 text-end">
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                    </div>
                                </div>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-7 col-sm-8 text-start">
                                        <span>XSS & SQL INJECTION</span>
                                    </div>
                                    <div className="col-5 col-sm-4 text-end">
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#64c2c2' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Design Card */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className='text-center mt-3'>
                                <i
                                    className="fa-solid fa-palette"
                                    style={{
                                        color: '#ffffff',
                                        borderRadius: '50px',
                                        backgroundColor: '#f9b73f',
                                        padding: '30px'
                                    }}
                                ></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Design</h5>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-7 col-sm-8 text-start">
                                        <span>UI/UX Design</span>
                                    </div>
                                    <div className="col-5 col-sm-4 text-end">
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                    </div>
                                </div>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-7 col-sm-8 text-start">
                                        <span>Layout/Composition</span>
                                    </div>
                                    <div className="col-5 col-sm-4 text-end">
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                    </div>
                                </div>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-7 col-sm-8 text-start">
                                        <span>Accessibility</span>
                                    </div>
                                    <div className="col-5 col-sm-4 text-end">
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star-half-stroke" style={{ color: '#e8b923' }}></i>
                                    </div>
                                </div>
                                <div className="row mb-2 align-items-center">
                                    <div className="col-7 col-sm-8 text-start">
                                        <span>Figma & Adobe</span>
                                    </div>
                                    <div className="col-5 col-sm-4 text-end">
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star" style={{ color: '#e8b923' }}></i>
                                        <i className="fa-solid fa-star-half-stroke" style={{ color: '#e8b923' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills