import React from 'react'

const Otherprojects = () => {
  return (
    <div>
      <div className='container py-5 text-center' id='other-projects'>
        <h2 style={{ fontSize: '48px', fontWeight: '700', color: '#dd557f' }}>Other Projects</h2>
        <p style={{ fontSize: '20px', fontWeight: '400', color: '#4B5563' }}>Smaller experiments, tools, and learning projects I've built along the way</p>

        <div className="row mt-5 g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm border-0 h-100 text-start p-4" style={{ borderRadius: '20px', backgroundColor: '#fcf3fb' }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h5 className="card-title mb-0" style={{ color: '#d24e75' }}>Student Management System</h5>
                <span className="badge rounded-pill" style={{ backgroundColor: '#b77ceb', color: '#fff' }}>PHP</span>
              </div>
              <p className="card-text text-muted small">
                A secure admin dashboard for managing student records with full CRUD operations. Features PHP session-based authentication and MySQL database storage for student details (name, age, gender, course).
              </p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <div className="d-flex gap-3 small text-muted">
                  <i className="fa-brands fa-php"></i>
                  <i className="fa-solid fa-database"></i>
                </div>
                <a href="https://your-student-ms-link.com" className="small" style={{ color: '#d24e75', fontWeight: '600' }}>
                  View Project →
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm border-0 h-100 text-start p-4" style={{ borderRadius: '20px', backgroundColor: '#fcf3fb' }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h5 className="card-title mb-0" style={{ color: '#d24e75' }}>SmartRecharge Generator</h5>
                <span className="badge rounded-pill" style={{ backgroundColor: '#e463e6', color: '#fff' }}>Utility</span>
              </div>
              <p className="card-text text-muted small">
                A dynamic web application designed to generate, validate, and manage prepaid recharge cards with secure PIN encryption and real-time tracking. Built to simulate telecom recharge systems, it focuses on reliability, automation, and data protection while maintaining a clean and intuitive user interface.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <div className="d-flex gap-3 small text-muted">
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-js"></i>
                  <i className="fa-solid fa-bootstrap"></i>
                </div>
                <a href="https://recharge-card-generator-ten.vercel.app/" className="small" style={{ color: '#d24e75', fontWeight: '600' }}>
                  View Project →
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm border-0 h-100 text-start p-4" style={{ borderRadius: '20px', backgroundColor: '#fcf3fb' }}>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h5 className="card-title mb-0" style={{ color: '#d24e75' }}>Multiplication Table Generator</h5>
                <span className="badge rounded-pill" style={{ backgroundColor: '#b77ceb', color: '#fff' }}>Math App</span>
              </div>
              <p className="card-text text-muted small">
                An interactive web tool that dynamically generates multiplication tables based on user input. Built with HTML, CSS, and JavaScript, it allows users to easily visualize mathematical patterns and practice basic arithmetic operations. Designed with a clean UI and responsive layout for both learning and fun.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <div className="d-flex gap-3 small text-muted">
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3-alt"></i>
                  <i className="fa-brands fa-bootstrap"></i>
                </div>
                <a href="https://multiplication-table-generator-beta.vercel.app/" className="small" style={{ color: '#d24e75', fontWeight: '600' }}>
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <a href="https://github.com/glowzaq" target="_blank" rel="noopener noreferrer"
            className="btn" style={{ backgroundColor: '#e463e6', color: '#fff', padding: '14px 32px', borderRadius: '50px', fontWeight: '600' }}>
            See All on GitHub →
          </a>
        </div>
      </div>
    </div>
  )
}

export default Otherprojects