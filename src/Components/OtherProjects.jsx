import React from 'react'

const OtherProjects = () => {
  return (
    <section id='other-projects-section' className="py-5">
      <div className='container text-center'>
        <h2 className="section-title-small">Other Projects & Experiments</h2>
        <p className="section-subtitle-small">Smaller tools, utilities, and learning labs built along the way.</p>

        <div className="row mt-5 g-4 justify-content-center text-start">
          {/* Project 1: Student Management */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card other-project-card h-100 p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h5 className="other-card-title">Student Management System</h5>
                <span className="mini-badge">PHP/MySQL</span>
              </div>
              <p className="other-card-text">
                A secure admin dashboard for managing student records. Implements PHP session-based
                authentication and full CRUD operations with sanitized inputs for data protection.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <div className="d-flex gap-3 small-icons">
                  <i className="fa-brands fa-php"></i>
                  <i className="fa-solid fa-database"></i>
                </div>
                <a href="https://github.com/glowzaq" className="other-link">
                  View Lab →
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: SmartRecharge */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card other-project-card h-100 p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h5 className="other-card-title">SmartRecharge Generator</h5>
                <span className="mini-badge">Utility</span>
              </div>
              <p className="other-card-text">
                Simulates telecom PIN generation with secure encryption logic. Focused on reliability
                and automation while maintaining a clean, intuitive user interface.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <div className="d-flex gap-3 small-icons">
                  <i className="fa-brands fa-js"></i>
                  <i className="fa-brands fa-bootstrap"></i>
                </div>
                <a href="https://recharge-card-generator-ten.vercel.app/" className="other-link">
                  View Lab →
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: Multiplication Table */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card other-project-card h-100 p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h5 className="other-card-title">Math Patterns Tool</h5>
                <span className="mini-badge">Math App</span>
              </div>
              <p className="other-card-text">
                An interactive tool to visualize mathematical patterns. A clean exercise in DOM
                manipulation and responsive CSS layouts for educational purposes.
              </p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <div className="d-flex gap-3 small-icons">
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3-alt"></i>
                </div>
                <a href="https://multiplication-table-generator-beta.vercel.app/" className="other-link">
                  View Lab →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <a href="https://github.com/glowzaq" target="_blank" rel="noopener noreferrer">
            <button id="github-full-btn">See All on GitHub →</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default OtherProjects